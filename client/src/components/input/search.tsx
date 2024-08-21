import { TextInputProps, View } from "react-native";
import styled from "styled-components/native";
import { SearchIconSvg } from "../../assets/image";
import { BaseTextInput } from "./baseInput";

const SearchInput = (props: TextInputProps) => {
	return (
		<SearchInputContainer>
			<SearchIconSvg width={18} height={18} />
			<BaseTextInput {...props} />
		</SearchInputContainer>
	)
}

const SearchInputContainer = styled(View)(({ theme }) => ({
	padding: `0px ${theme.globalBoxPadding}px`,
	border: `1px solid ${theme.borderBaseColor}`,
	borderRadius: 6,

	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
}))

export { SearchInput };