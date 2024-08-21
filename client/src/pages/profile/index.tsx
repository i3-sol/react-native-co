import { Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { Layout } from "../../components/layout";
import { getWidth } from "../../theme/responsive";
import { ActiveSecondButton } from "../../components/button";
import { TextH3, TextH4 } from "../../components/typography";
import { profileAvatarImage1, profileAvatarImage2, profileBackgroundImage } from "../../assets/image";

const Profile = ({ navigation }: ComPropsObject) => {
	return (
		<Layout navigation={navigation} disableHeader={true}>
			<View>
				<ProfileHeader>
					<Image source={profileBackgroundImage} style={profileHeaderStyles.background} />

					<View style={profileHeaderStyles.contentWrapper}>
						<View style={profileHeaderStyles.avatarContainer}>
							<Image source={profileAvatarImage1} style={profileHeaderStyles.avatar} />
						</View>

						<View style={profileHeaderStyles.contentContainer}>
							<TextH3>川端まりな</TextH3>
							<TextH4>26歳  愛知県  女性</TextH4>
						</View>
					</View>
				</ProfileHeader>

				<ProfileContainer>
					<ProfileAvatarContainer>
						<Image source={profileAvatarImage2} style={profileAvatarStyles.image} />
						<TextH3>リゾート好き集まれ〜🏖️</TextH3>
					</ProfileAvatarContainer>

					<View style={profileDataStyles.container}>
						<TextH3>プロフィール</TextH3>

						<TextH4>
							こんにちは！新しい出会いを探していま
							す。趣味はヨガと旅行です。男女関係なく趣味の合う素敵な仲間と出会いたいです。
						</TextH4>
					</View>

					<View style={profileDataStyles.container}>
						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>職業:</TextH4>
							<TextH4 style={profileDataStyles.text}>ヨガインストラクター</TextH4>
						</View>

						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>身長:</TextH4>
							<TextH4 style={profileDataStyles.text}>158cm</TextH4>
						</View>

						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>体型:</TextH4>
							<TextH4 style={profileDataStyles.text}>普通</TextH4>
						</View>

						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>独身・既婚:</TextH4>
							<TextH4 style={profileDataStyles.text}>独身</TextH4>
						</View>

						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>最終学歴:</TextH4>
							<TextH4 style={profileDataStyles.text}>大学卒</TextH4>
						</View>

						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>学校名:</TextH4>
							<TextH4 style={profileDataStyles.text}>名古屋市立大学</TextH4>
						</View>

						<View style={profileDataStyles.detailsContainer}>
							<TextH4 style={profileDataStyles.text}>年収:</TextH4>
							<TextH4 style={profileDataStyles.text}>非公開</TextH4>
						</View>
					</View>

					<View style={profileDataStyles.buttonWrapper}>
						<ActiveSecondButton>
							<TextH3 style={profileDataStyles.buttonText}>Meet</TextH3>
						</ActiveSecondButton>
					</View>
				</ProfileContainer>
			</View>
		</Layout>
	)
}

const ProfileContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: getWidth(4),
	gap: getWidth(10),
}))

const ProfileHeader = styled(View)({
	display: "flex",
	flexDirection: "column",
})

const ProfileAvatarContainer = styled(View)(({ theme }) => ({
	gap: getWidth(2),
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	padding: getWidth(2),
	border: `1px solid ${theme.footerBackground}`,
	borderRadius: 8,
}))

const profileHeaderStyles = StyleSheet.create({
	background: {
		width: getWidth(100),
		height: getWidth(56.5),
	},
	contentWrapper: {
		display: "flex",
		flexDirection: "row",
		paddingLeft: getWidth(4),
		paddingRight: getWidth(4),
	},
	avatarContainer: {
		position: "relative",
		width: getWidth(32)
	},
	avatar: {
		bottom: 0, left: 0,
		position: "absolute",
		width: getWidth(32),
		height: getWidth(32),
	},
	contentContainer: {
		padding: getWidth(3),
	}
})

const profileAvatarStyles = StyleSheet.create({
	image: {
		width: getWidth(15),
		height: getWidth(15),
	}
})

const profileDataStyles = StyleSheet.create({
	container: {
		gap: getWidth(2),
		display: 'flex',
		flexDirection: "column"
	},
	detailsContainer: {
		gap: getWidth(2),
		display: "flex",
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontWeight: 500,
	},
	buttonWrapper: {
		paddingVertical: getWidth(6),
		paddingBottom: getWidth(10)
	},
	buttonText: {
		fontWeight: 500,
		color: "black",
	}
})

export { Profile };