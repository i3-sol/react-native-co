import React from "react";
import { Pressable, View } from "react-native";
import styled from "styled-components/native";

import { TextH6 } from "../typography";
import { CalendarIconSvg, HomeIconSvg, MessageIconSvg, UserGroupIconSvg, UserIconSvg } from "../../assets/image";
import { routerConfig } from "../../router-config";

interface FooterProps {
	navigation: any
}

const Footer = ({ navigation }: FooterProps) => {
	const onHandleHome = () => {
		navigation.navigate(routerConfig.home.name)
	}

	const onHandleProfile = () => {
		navigation.navigate(routerConfig.profile.name)
	}

	const onHandleMeeting = () => {
		navigation.navigate(routerConfig.meetingHome.name)
	}

	const onHandleChat = () => {
		navigation.navigate(routerConfig.chat.name)
	}

	return (
		<FooterWrapper>
			<FooterItem onPress={onHandleHome}>
				<HomeIconSvg wiidth={16} height={16} />
				<TextH6>Home</TextH6>
			</FooterItem>

			<FooterItem onPress={onHandleHome}>
				<CalendarIconSvg wiidth={16} height={16} />
				<TextH6>イベント</TextH6>
			</FooterItem>

			<FooterItem onPress={onHandleMeeting}>
				<UserGroupIconSvg wiidth={16} height={16} />
				<TextH6>Meet Now</TextH6>
			</FooterItem>

			<FooterItem onPress={onHandleChat}>
				<MessageIconSvg wiidth={16} height={16} />
				<TextH6>チャット</TextH6>
			</FooterItem>

			<FooterItem onPress={onHandleProfile}>
				<UserIconSvg wiidth={16} height={16} />
				<TextH6>マイページ</TextH6>
			</FooterItem>
		</FooterWrapper>
	)
}

const FooterWrapper = styled(View)(({ theme }) => ({
	gap: 0,
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	padding: `0px ${theme.globalSpacingX}px`,
	backgroundColor: theme.footerBackground,
}))

const FooterItem = styled(Pressable)(({ theme }) => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: `${theme.globalSpacingX}px 0px`,
}))

export { Footer };