import { View} from "react-native";
import styled from "styled-components/native";

import { ActiveFirstButton } from "../../../components/button";
import { TextH3, TextH5 } from "../../../components/typography";
import { useEffect, useState } from "react";
import RestApiClass from "../../../classes/RestApiClass";
import { useEffectCustom } from "../../../classes/Functions";

const Categorys = (props:any) => {
	
	const categoryLists = useEffectCustom(async () => {		
		let RestApi:RestApiClass = new RestApiClass("open_chat_category")
		return await RestApi.list({limit:20})				
	});



	return (
		<CategorysWrapper>
			<CategorysHeader>
				<TextH3>カテゴリー検索</TextH3>
				<TextH5>もっと見る</TextH5>
			</CategorysHeader>

			<CategoryContainer>
				{categoryLists.map((category: CategoryListObject, key: number) => (
					<ActiveFirstButton text={category.category_name} active={category.active} key={key} />
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