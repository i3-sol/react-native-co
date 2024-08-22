import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { getHeight, getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { arrowLeftIcon, SearchIconSvg, hamburgerIcon, PersonIconSvg } from "../../../assets/image";

const ChatHeader = () => {
    return (
        <ChatHeaderWrapper>
            <View style={styles.headerLeft}>
                <Image source={arrowLeftIcon} style={styles.backIcon} />
                <TextH3 style={styles.title}>東京スイーツ部</TextH3>
                <UserCntContainer>
                    <PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
                    <Description>136</Description>
                </UserCntContainer>
            </View>
            <View style={styles.headerRight}>
                <SearchIconSvg width={getWidth(6.5)} height={getWidth(6.5)} />
                <Image style={styles.burger} source={hamburgerIcon} />
            </View>
        </ChatHeaderWrapper>
    )
}

const ChatHeaderWrapper = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: getWidth(3),
    paddingRight: getWidth(4),
    paddingLeft: getWidth(4),
    paddingBottom: getWidth(4),
    gap: getHeight(2.2),
}))

// const ChatHeader = styled(View)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
// }))

const UserCntContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: getHeight(.25),
    alignItems: "center",
}))

const Description = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3),
    fontWeight: 300
}))

const styles = StyleSheet.create({
    title: {
        textAlign: 'left'
    },
    backIcon: {
        height: getWidth(8),
        width: getWidth(8),
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: getWidth(1)
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: getWidth(2)
    },
    burger: {
        width: getWidth(8),
        height: getWidth(8)
    }
})

export { ChatHeader };