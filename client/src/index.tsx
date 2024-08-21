import { Routers } from "./Router"
import { StyledThemeProvider } from "./theme";
import { GlobalContextProvider } from "./provider";

export const App = () => {
	return (
		<GlobalContextProvider>
			<StyledThemeProvider>
				<Routers />
			</StyledThemeProvider>
		</GlobalContextProvider>
	)
}