import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { LogoSvg } from "../../assets/image";

const Header = () => {
	return (
		<HeaderWrapper>
			<LogoSvg width={105} height={25} />
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled(View)(({ theme }) => ({
	height: 30,
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: theme.baseBackground,
}))

export { Header };