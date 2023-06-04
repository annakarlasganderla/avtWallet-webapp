import { ReactNode, createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

interface AuthData {
	token: string | null;
	setToken: (token: string | null) => void;
	logout: () => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthData | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const [token, setToken] = useState<string | null>(cookies.token || null);
	const navigate = useNavigate();

	useEffect(() => {
		const storedToken = cookies.token;

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
			setCookie("token", newToken, { secure: true, httpOnly: true });
			setToken(newToken);
		} else {
			logout();
		}
	};

	const logout = () => {
		removeCookie("token");
		setToken(null);
		navigate("/");
	};

	return (
		<AuthContext.Provider value={{ token, setToken: handleSetToken, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
