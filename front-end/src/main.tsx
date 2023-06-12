import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { AuthorizationInterceptor } from "./api/Api";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<CookiesProvider>
		<QueryClientProvider client={queryClient}>
			<AuthorizationInterceptor />
			<App />
		</QueryClientProvider>
	</CookiesProvider>,
);
