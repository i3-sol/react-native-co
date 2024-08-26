import { Image, Pressable, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { getHeight, getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { arrowLeftIcon, SettingIconSvg, PersonOutlineIconSvg, LogoutIconSvg, NotificationOffIconSvg, CalendarIconSvg } from "../../../assets/image";
import { routerConfig } from "../../../router-config";

const ChatHeader = ({ navigation }: ComPropsObject) => {

    const onGoToHome = () => navigation.navigate(routerConfig.home.name)
    const onGoToSetting = () => navigation.navigate(routerConfig.setting.name)
    const onLogout = () => navigation.navigate('/')

    return (
        <ChatHeaderWrapper>
            <HeaderContainer>
                <Pressable onPress={onGoToHome}>
                    <Image source={arrowLeftIcon} style={styles.backIcon} />
                </Pressable>
                <TitleContent>
                    <TextH3 style={styles.title}>東京スイーツ部</TextH3>
                    <UserCntContainer>
                        <PersonOutlineIconSvg width={getWidth(3.75)} height={getWidth(3.75)} />
                        <Description>136</Description>
                    </UserCntContainer>
                </TitleContent>
                <Pressable onPress={onGoToSetting}>
                    <SettingIconSvg width={getWidth(8)} height={getWidth(8)} />
                </Pressable>
            </HeaderContainer>
            <HeaderNavigateContainer>
                <NavigateItem>
                    <NotificationOffIconSvg width={getWidth(5.5)} height={getWidth(5.5)} />
                    <NavigateText>通知オン</NavigateText>
                </NavigateItem>
                <NavigateItem>
                    <PersonOutlineIconSvg width={getWidth(8)} height={getWidth(6)} />
                    <NavigateText>メンバー</NavigateText>
                </NavigateItem>
                <NavigateItem style={{ gap: getHeight(0.7) }}>
                    <CalendarIconSvg width={getWidth(5)} height={getWidth(5)} />
                    <NavigateText>イベント作成</NavigateText>
                </NavigateItem>
                <NavigateItem onPress={onLogout}>
                    <LogoutIconSvg width={getWidth(5)} height={getWidth(5)} />
                    <NavigateText>退出</NavigateText>
                </NavigateItem>
            </HeaderNavigateContainer>
        </ChatHeaderWrapper>
    )
}

const ChatHeaderWrapper = styled(View)(({ theme }) => ({
    display: "flex",
    gap: getHeight(.6),
}))

const HeaderContainer = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getWidth(3),
    paddingRight: getWidth(3.3),
    paddingLeft: getWidth(4),
    paddingBottom: getWidth(4),
}))

const UserCntContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: getHeight(.25),
    alignItems: "center",
}))

const TitleContent = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: getWidth(2)
}))

const Description = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3),
    fontWeight: 300
}))

const HeaderNavigateContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: getWidth(8),
    paddingRight: getWidth(11),
}))

const NavigateItem = styled(Pressable)(({ theme }) => ({
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "center",
    gap: getHeight(.3)
}))

const NavigateText = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3),
    fontWeight: 300
}))

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    },
    backIcon: {
        height: getWidth(8),
        width: getWidth(8),
    },
})

export { ChatHeader };