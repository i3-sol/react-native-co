import { Routers } from "./Router"
import { StyledThemeProvider } from "./theme";
import { GlobalContextProvider } from "./provider";
import ModelClass from "./classes/ModelClass";
import { useEffectCustom } from "./classes/Functions";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        },
        mutations: {
            retry: false
        }
    }
});


export const App = () => {
	const user: any = useEffectCustom(async () => {
		let Model:ModelClass = new ModelClass("user")
		return await Model.auth({})
	});


	return (
		<GlobalContextProvider>
			<StyledThemeProvider>
				<QueryClientProvider client={queryClient}>
					<Routers />
				</QueryClientProvider>
			</StyledThemeProvider>
		</GlobalContextProvider>
	)
}