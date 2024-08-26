import React from "react";
import { Pressable, View, TextInput } from "react-native";
import styled from "styled-components";

import { getHeight, getWidth } from "../../theme/responsive";
import { TextH3, TextH5 } from "../../components/typography";
import { CancelCircleIconSvg, CloseIconSvg } from "../../assets/image";
import { routerConfig } from "../../router-config";

const ChangeChatDescSetting = ({ navigation }: ComPropsObject) => {

    const onGoToSetting = () => navigation.navigate(routerConfig.setting.name)
    const [value, setValue] = React.useState('東京２３区の激うまスイーツを最新から昔ながらのお店まで情報交換し合う場所');

    const onChange = () => {
        navigation.navigate(routerConfig.setting.name)
    }

    return (
        <ChangeChatDescSettingWrapper>
            <HeaderContainer>
                <CloseButton onPress={onGoToSetting}>
                    <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                </CloseButton>
                <TextH3>オープンチャット名変更</TextH3>
            </HeaderContainer>

            <MainContainer>
                <TextH5>説明文</TextH5>
                <ChangeNameContainer>
                    <BaseTextInput value={value} onChangeText={e => setValue(e)} />
                    <CancelCircleIconSvg width={15} height={15} />
                </ChangeNameContainer>
            </MainContainer>
            <ChangeButton onPress={onChange}>
                <ChangeText>保存</ChangeText>
            </ChangeButton>
        </ChangeChatDescSettingWrapper>
    )
}

const ChangeChatDescSettingWrapper = styled(View)(({ theme }) => ({
    backgroundColor: theme.white,
    paddingTop: getWidth(4),
    paddingRight: getWidth(3.3),
    paddingLeft: getWidth(4),
    paddingBottom: getWidth(4),
    display: 'flex',
    gap: getHeight(6.5),
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
    gap: getHeight(2),
    borderBottomColor: '#9CA3AF',
    borderBottomWidth: 1
}))

const ChangeNameContainer = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: getWidth(1)
}))

const BaseTextInput = styled(TextInput)(({ theme }) => ({
    flex: 1,
    height: 25,
    padding: '0px 2px',
    margin: 0,
    fontSize: 10.5,
}))

const ChangeButton = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9DE3E9',
    gap: getWidth(2),
    padding: getWidth(3.7),
    marginTop: getHeight(20),
    borderRadius: 20,
}))

const ChangeText = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3.7),
    fontWeight: 300,
}))

export { ChangeChatDescSetting };