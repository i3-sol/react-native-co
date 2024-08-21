import { Pressable, View } from "react-native";
import styled from "styled-components/native";

import { getHeight, getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { ActiveFirstButton } from "../../../components/button/activebuttons";

const data = [
	{
		text: "学生",
		active: false
	},
	{
		text: "ペ`ット",
		active: false
	},
	{
		text: "金融・ビジネス",
		active: false
	},
	{
		text: "アニメ・漫画",
		active: false
	},
	{
		text: "同世代",
		active: false
	},
	{
		text: "音楽",
		active: true
	},
	{
		text: "職",
		active: false
	},
	{
		text: "芸能人・有名人",
		active: true
	},
	{
		text: "ス`ポーツ",
		active: false
	},
]

const SearchBySelecting = ({ navigation }: ComPropsObject) => {
	return (
		<SearchBySelectingWrapper>
			<TextH3>3つまでのカテゴリーを選んで検索</TextH3>
			<SearchContainer>
				{
					data.map((i, k) => (
						<ActiveFirstButton text={i.text} active={i.active} key={k} />
					))
				}
			</SearchContainer>
			<SearchButton>
				<SearchText>検索</SearchText>
			</SearchButton>

		</SearchBySelectingWrapper>
	)
}

const SearchBySelectingWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	paddingTop: getHeight(1.2),
	gap: getHeight(2)
}))

const SearchContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: theme.globalSpacingGap / 2,
	marginBottom: getHeight(3)
}))

const SearchButton = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	background: '#E5E7EB',
	padding: getWidth(3),
	borderRadius: 20,
}))

const SearchText = styled(TextH3)(({ theme }) => ({
	color: theme.typographyActiveColor,
}))

export { SearchBySelecting };