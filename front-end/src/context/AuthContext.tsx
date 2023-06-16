import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

interface AuthData {
	isAuthenticated: boolean;
	token: string | null;
	setToken: (token: string | null) => void;
	logout: () => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthData | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
	const navigate = useNavigate();

	const isAuthenticated = useMemo(() => {
		return token ? true : false;
	}, [token]);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			const { exp } = parseToken(storedToken);

			if (exp && exp * 1000 > Date.now()) {
				setToken(storedToken);
			} else {
				logout();
			}
		}
	}, []);

	const parseToken = (token: string) => {
		const base64Url = token.split(".")[1];
		const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split("")
				.map((char) => "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2))
				.join(""),
		);

		return JSON.parse(jsonPayload);
	};

	const handleSetToken = (newToken: string | null) => {
		if (newToken) {
			localStorage.setItem("token", newToken);
			setToken(newToken);
		} else {
			logout();
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setToken(null);
		navigate("/");
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, token, setToken: handleSetToken, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
