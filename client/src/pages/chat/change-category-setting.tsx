import React from "react";
import { Pressable, View, TextInput, ScrollView } from "react-native";
import styled from "styled-components";

import { getHeight, getWidth } from "../../theme/responsive";
import { TextH3, TextH4, TextH5 } from "../../components/typography";
import { CancelCircleIconSvg, CheckedIconSvg, CloseIconSvg, UnCheckedIconSvg } from "../../assets/image";
import { routerConfig } from "../../router-config";
import { LimitModal } from "./common/limit-modal";

const data = [
    { name: '学生', isChecked: false },
    { name: '金融・ビジネス', isChecked: false },
    { name: 'アニメ・漫画', isChecked: false },
    { name: '料理・グルメ', isChecked: false },
    { name: '音楽', isChecked: false },
    { name: '芸能人・有名人', isChecked: false },
    { name: 'テレビ・ドラマ', isChecked: false },
    { name: 'スポーツ', isChecked: false },
    { name: '子育て', isChecked: false },
    { name: 'カフェ巡り', isChecked: false },
    { name: 'ファッション・美容', isChecked: false },
    { name: '健康', isChecked: false },
    { name: 'カメラ', isChecked: false },
    { name: 'ペット', isChecked: false },
    { name: '地域', isChecked: false },
    { name: 'ゲーム', isChecked: false },
    { name: '旅行', isChecked: false },
    { name: 'レジャー', isChecked: false },
    { name: 'ドライブ', isChecked: false },
    { name: 'デート', isChecked: false },
]

const ChangeChatCategorySetting = ({ navigation }: ComPropsObject) => {

    const onGoToSetting = () => navigation.navigate(routerConfig.setting.name)

    const [categories, setCategories] = React.useState(data);
    const [isLimited, setIsLimited] = React.useState(false);

    React.useEffect(() => {
        setIsLimited(categories.filter(item => item.isChecked).length >= 3)
    }, [categories])

    return (
        <ChangeChatCategorySettingWrapper>
            <HeaderContainer>
                <CloseButton onPress={onGoToSetting}>
                    <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                </CloseButton>
                <TextH3>カテゴリー変更</TextH3>
            </HeaderContainer>

            <MainContainer>
                <TextH4>変更後のカテゴリーを全て選択</TextH4>
                <MainItemContainer>
                    {categories.map((i, k) => (
                        <MainItem key={k}>
                            <TextH4>{i.name}</TextH4>
                            <Pressable onPress={() => {
                                const updatedCategories = categories.map((category, index) =>
                                    index === k ? { ...category, isChecked: !category.isChecked } : category
                                );
                                setCategories(updatedCategories);
                            }}>
                                {!!i.isChecked ? (
                                    <CheckedIconSvg width={getWidth(13)} height={getWidth(6)} />
                                ) : (
                                    <UnCheckedIconSvg width={getWidth(13)} height={getWidth(6)} />
                                )}
                            </Pressable>
                        </MainItem>
                    ))}
                </MainItemContainer>
            </MainContainer>
            
            <LimitModal isModal={isLimited} setIsLimited={setIsLimited} onCloseModal={() => setIsLimited(false)} />

        </ChangeChatCategorySettingWrapper>
    )
}

const ChangeChatCategorySettingWrapper = styled(View)(({ theme }) => ({
    backgroundColor: theme.white,
    paddingTop: getWidth(4),
    paddingRight: getWidth(1),
    paddingLeft: getWidth(4),
    paddingBottom: getWidth(4),
    display: 'flex',
    gap: getHeight(2),
    height: getHeight(100)
}))

const HeaderContainer = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
}))

const CloseButton = styled(Pressable)(({ theme }) => ({
    position: "absolute",
    left: getWidth(1.5),
    top: 0
}))

const MainContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(3),
}))

const MainItemContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(1.45)
}))

const MainItem = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export { ChangeChatCategorySetting };