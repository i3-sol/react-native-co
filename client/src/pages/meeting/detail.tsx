import { Image, Pressable, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { Layout } from "../../components/layout";
import { getHeight, getWidth } from "../../theme/responsive";
import { TextActiveH5, TextH3, TextH5 } from "../../components/typography";
import { PersonIconSvg, arrowLeftIcon, moreVertIcon } from "../../assets/image";

import { meetingDetailImage1 } from "../../assets/image";
import { Events } from "./common/events";

const MeetingDetail = ({ navigation }: ComPropsObject) => {
    return (
        <Layout navigation={navigation} disableHeader={true}>
            <MeetingDetailWrapper>
                <MeetingDetailHeader>
                    <TextH3 style={styles.title}>オープンチャット詳細</TextH3>
                    <LeftIcon>
                        <Image source={arrowLeftIcon} style={styles.backIcon} />
                    </LeftIcon>
                    <MoreVertIcon>
                        <Image source={moreVertIcon} style={styles.moreVertIcon} />
                    </MoreVertIcon>
                </MeetingDetailHeader>

                <View>
                    <ImageContainer>
                        <Image source={meetingDetailImage1} style={styles.bannerImage} />
                    </ImageContainer>
                    <DetailContent>
                        <View style={{ display: "flex", flexDirection: 'row', gap: getWidth(1) }}>
                            <TextH3>東京スイーツ部</TextH3>
                            <UserCntContainer>
                                <PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
                                <Description>136</Description>
                            </UserCntContainer>
                        </View>
                        <View style={styles.buttonContainer}>
                            <StyledButton>
                                <TextH3 style={styles.buttonText}>カフェ巡り</TextH3>
                            </StyledButton>
                            <StyledButton>
                                <TextH3 style={styles.buttonText}>料理・グルメ</TextH3>
                            </StyledButton>
                        </View>
                        <View>
                            <TextH5 style={{color: '#6B7280'}}>詳細</TextH5>
                            <TextH3 style={styles.place}>
                                東京２３区の激うまスイーツを最新から昔ながらのお店まで情報交換し合う場所。
                                <TextActiveH5 style={styles.moreRead}>もっと読む</TextActiveH5>
                            </TextH3>
                        </View>
                        <JoinButton>
                            <TextH3>参加</TextH3>
                        </JoinButton>
                    </DetailContent>
                </View>
            </MeetingDetailWrapper>
            <Events />
        </Layout>
    )
}

const MeetingDetailWrapper = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    // padding: getWidth(4),
}))

const MeetingDetailHeader = styled(View)(({ theme }) => ({
    position: 'relative',
    padding: getWidth(4),
}))

const LeftIcon = styled(View)(({ theme }) => ({
    position: 'absolute',
    left: getWidth(4),
    top: getWidth(3.6),
}))

const MoreVertIcon = styled(View)(({ theme }) => ({
    position: 'absolute',
    right: getWidth(4),
    top: getWidth(4),
}))

const ImageContainer = styled(View)(({ theme }) => ({
    height: getWidth(76),
    width: getWidth(100),
}))

const DetailContent = styled(View)(({ theme }) => ({
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
    paddingTop: getHeight(1)
}))

const UserCntContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: getHeight(.25),
    gap: getWidth(1),
    alignItems: "center",
}))

const Description = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3),
    fontWeight: 400
}))

const StyledButton = styled(Pressable)(({ theme }) => ({
    textWrap: "nowrap",
    display: "inline-block",
    padding: getWidth(1),
    backgroundColor: theme.white,
    border: `0.8px solid ${theme.borderActiveColor}`,
    borderRadius: 100,
}))

const JoinButton = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#9DE3E9',
	gap: getWidth(2),
	padding: getWidth(3),
	width: '100%',
    borderRadius: 100,
    marginTop: getHeight(6)
}))

const JoinText = styled(TextH3)(({ theme }) => ({
	fontSize: getWidth(3.7),
	fontWeight: 300,
}))

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    },
    backIcon: {
        height: getWidth(8),
        width: getWidth(8),
    },
    moreVertIcon: {
        height: getWidth(8),
        maxWidth: getWidth(8),
    },
    bannerImage: {
        flex: 1
    },
    buttonContainer: {
        display: "flex",
        flexDirection: 'row',
        gap: getWidth(2.2),
        paddingTop: getHeight(1),
        marginBottom: getHeight(2.5)
    },
    buttonText: {
        fontSize: getWidth(3),
        color: '#3B82F6',
        fontWeight: 300,
        paddingLeft: getWidth(2),
        paddingRight: getWidth(2),
    },
    place: {
        paddingTop: getHeight(1),
        fontSize: getWidth(3.8),
        fontWeight: 300,
    },
    moreRead: {
        fontSize: getWidth(2.5),
        fontWeight: 700,
    }
})

export { MeetingDetail };