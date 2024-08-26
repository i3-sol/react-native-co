import { TextH3 } from "../../../components/typography"
import {
    meetingDetailImage2,
    meetingDetailImage3,
    meetingDetailImage4,
    meetingDetailImage5,
    userIcon1,
    userIcon2,
    userIcon3,
    userIcon4
} from "../../../assets/image";
import styled from "styled-components";
import { Image, Pressable, StyleSheet, ScrollView, View } from "react-native";
import { getHeight, getWidth } from "../../../theme/responsive";

const data = [
    {
        image: meetingDetailImage2,
        date: '2024.08.23',
        title: '浅草でかき氷を食べよう！',
        place: '台東区浅草',
        nickname: 'KO -RIYA',
        subImage: meetingDetailImage4,
        users: [userIcon1, userIcon2, userIcon3, userIcon4]
    },
    {
        image: meetingDetailImage3,
        date: '2024.08.23',
        title: '浅草でかき氷を食べよう！',
        place: '台東区浅草',
        nickname: 'KO -RIYA',
        subImage: meetingDetailImage5,
        users: [userIcon1, userIcon2, userIcon3, userIcon4]
    }
]

const Events = () => {
    return (
        <EventsWrapper>
            <TextH3>告知中のイベント</TextH3>
            <ScrollView horizontal>
                <AnnouncedContainer>
                    {data.map((i, k) => (
                        <AnnouncedItem key={k}>
                            <View style={styles.bannerContainer}>
                                <Image source={i.image} style={styles.bannerImage} />
                                <View style={styles.userGroup}>
                                    {i.users.map((m, n) => (
                                        <Image key={`${k}-${n}`} source={m} style={[styles.userImage, { zIndex: i.users.length - n }]} />
                                    ))}
                                    <View style={styles.moreUser}>
                                        <TextH3 style={styles.moreUserText}>+7</TextH3>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.body}>
                                <Image source={i.subImage} style={styles.subImg} />
                                <View style={styles.bodyContent}>
                                    <TextH3 style={styles.contentDate}>{i.date}</TextH3>
                                    <TextH3 style={styles.contentTitle}>{i.title}</TextH3>
                                    <TextH3 style={styles.contentPlace}>{i.place}</TextH3>
                                    <TextH3 style={styles.contentNickName}>{i.nickname}</TextH3>
                                </View>
                            </View>
                        </AnnouncedItem>
                    ))}
                </AnnouncedContainer>
            </ScrollView>

        </EventsWrapper>
    )
}

const EventsWrapper = styled(View)(({ theme }) => ({
    paddingTop: getHeight(3),
    // paddingTop: getHeight(8.5),
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
    display: "flex",
    gap: getHeight(1)
}))

const AnnouncedContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: getWidth(3.5),
    // paddingBottom: getHeight(6),
}))

const AnnouncedItem = styled(View)(({ theme }) => ({
    display: "flex"
}))

const styles = StyleSheet.create({
    bannerContainer: {
        position: 'relative'
    },
    bannerImage: {
        width: getWidth(77),
        height: getWidth(36),
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    userGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: getWidth(-12),
        position: 'absolute',
        bottom: getWidth(2),
        left: getWidth(3.3)
    },
    userImage: {
        width: getWidth(6),
        height: getWidth(6),
        marginLeft: getWidth(-1.5)
    },
    moreUser: {
        borderRadius: 100,
        width: getWidth(6),
        height: getWidth(6),
        backgroundColor: '#D9D9D9',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginLeft: getWidth(-1.5)
    },

    moreUserText: {
        fontSize: getWidth(2.5),
        fontWeight: 600,
    },

    body: {
        padding: getWidth(2),
        display: 'flex',
        flexDirection: "row",
        gap: getWidth(2),
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowColor: '#32325d', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.05, 
        shadowRadius: 1, 
        elevation: 1, 
    },
    subImg: {
        width: getWidth(17),
        height: getWidth(17),
        borderRadius: 6
    },
    bodyContent: {

    },
    contentDate: {
        fontSize: getWidth(3.2),
        fontWeight: 300
    },
    contentTitle: {
        fontSize: getWidth(3.7),
        fontWeight: 500
    },
    contentPlace: {
        fontSize: getWidth(3.1),
        fontWeight: 500
    },
    contentNickName: {
        fontSize: getWidth(3.3),
        fontWeight: 300
    },
})

export { Events }