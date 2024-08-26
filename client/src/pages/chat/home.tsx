import { Pressable, View } from "react-native";

import { ChatHeader } from "./common/header";
import styled from "styled-components";
import { getHeight, getWidth } from "../../theme/responsive";
import { Events } from "../meeting/common/events";
import { TextH3, TextH4, TextH5 } from "../../components/typography";

const ChatHome = ({ navigation }: ComPropsObject) => {
    return (
        <ChatHomeWrapper>
            <ChatHeader navigation={navigation} />
            <Events />
            <CategoriesWrapper>
                <TextH3>カテゴリー</TextH3>
                <Categories>
                    <ActiveFirstButtonWrapper>
                        <TextActiveH4>カフェ巡り</TextActiveH4>
                    </ActiveFirstButtonWrapper>
                    <ActiveFirstButtonWrapper>
                        <TextActiveH4>料理・グルメ</TextActiveH4>
                    </ActiveFirstButtonWrapper>
                </Categories>
                <DetailContainer>
                    <TextH5>詳細</TextH5>
                    <TextH4>東京２３区の激うまスイーツを最新から昔ながらのお店まで情報交換し合う場所</TextH4>
                </DetailContainer>
            </CategoriesWrapper>
        </ChatHomeWrapper>
    )
}

const ChatHomeWrapper = styled(View)(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.white
}))

const CategoriesWrapper = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.globalSpacingGap / 2,
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
    paddingTop: getHeight(3.7),
}))

const Categories = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: getWidth(2)
}))

const ActiveFirstButtonWrapper = styled(Pressable)(({ theme }) => ({
    textWrap: "nowrap",
    display: "inline-block",
    paddingTop: getWidth(1),
    paddingBottom: getWidth(1),
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
    backgroundColor: theme.white,
    border: `0.8px solid ${theme.borderActiveColor}`,
    borderRadius: 100,
}))

const TextActiveH4 = styled(TextH4)(({ theme }) => ({
    color: theme.typographyActiveColor,
}))

const DetailContainer = styled(View)(({ theme }) => ({
    display: "flex",
    marginTop: getHeight(3),
}))

export { ChatHome };