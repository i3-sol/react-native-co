import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

import { Header } from "./header";
import { Footer } from "./footer";
import { SearchBar } from "./search";

interface LayoutProps {
	children?: React.ReactNode
	disableHeader?: boolean
	navigation: any
	disableFooter?: boolean
}

const Layout = ({ navigation, children, disableHeader = false, disableFooter = false }: LayoutProps) => {
	return (
		<LayoutWrapper disableHeader={disableHeader}>
			<LayoutContainer>
				<ScrollView>
					{!disableHeader && (
						<React.Fragment>
							<Header />
							<SearchBar />
						</React.Fragment>
					)}

					{children}
				</ScrollView>
			</LayoutContainer>

			{
				!disableFooter && (
					<Footer navigation={navigation} />
				)
			}
		</LayoutWrapper>
	)
}

const LayoutWrapper = styled(View)<{ disableHeader: boolean }>(({ theme, disableHeader }) => ({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	paddingTop: disableHeader ? 0 : 10,
	backgroundColor: theme.baseBackground,
}))

const LayoutContainer = styled(View)({
	flex: 1,
	position: "relative",
})

export { Layout };