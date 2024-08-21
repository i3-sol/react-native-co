import { View } from "react-native";
import styled from "styled-components/native";

import { SearchInput } from "../input";

const SearchBar = () => {
	return (
		<SearchBarWarpper>
			<SearchInput />
		</SearchBarWarpper>
	)
}

const SearchBarWarpper = styled(View)(({ theme }) => ({
	padding: `${theme.globalSpacingX / 2}px ${theme.globalSpacingX}px`,
	backgroundColor: theme.baseBackground,
}))

export { SearchBar };