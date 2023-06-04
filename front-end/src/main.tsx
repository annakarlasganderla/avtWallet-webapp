import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { AuthorizationInterceptor } from "./api/Api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<CookiesProvider>
		<AuthorizationInterceptor />
		<App />
	</CookiesProvider>,
);
