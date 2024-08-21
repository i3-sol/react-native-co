import { View } from "react-native";
import styled from "styled-components/native";

import { ActiveFirstButton } from "../../../components/button";
import { TextH3, TextH5 } from "../../../components/typography";

interface CategoryListObject {
	text: string
	active: boolean
}

const categoryLists: CategoryListObject[] = [
	{
		text: "学生",
		active: false,
	}, {
		text: "ペット",
		active: false,
	}, {
		text: "金融・ビジネス",
		active: false,
	}, {
		text: "アニメ・漫画",
		active: false,
	}, {
		text: "同世代",
		active: false,
	}, {
		text: "音楽",
		active: true,
	}, {
		text: "職",
		active: false,
	}, {
		text: "芸能人・有名人",
		active: true,
	}, {
		text: "スポーツ",
		active: false,
	},
]

const Categorys = () => {
	return (
		<CategorysWrapper>
			<CategorysHeader>
				<TextH3>カテゴリー検索</TextH3>
				<TextH5>もっと見る</TextH5>
			</CategorysHeader>

			<CategoryContainer>
				{categoryLists.map((category: CategoryListObject, key: number) => (
					<ActiveFirstButton text={category.text} active={category.active} key={key} />
				))}
			</CategoryContainer>
		</CategorysWrapper>
	)
}

const CategorysWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap / 2,
}))

const CategorysHeader = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalSpacingX}px 0px`,
}))

const CategoryContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: theme.globalSpacingGap / 2,
}))

export { Categorys };