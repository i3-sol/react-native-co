import React from "react";
import { Pressable, View, TextInput, Image, StyleSheet } from "react-native";
import styled from "styled-components";

import { getHeight, getWidth } from "../../theme/responsive";
import { TextActiveH5, TextH3, TextH5 } from "../../components/typography";
import { CancelCircleIconSvg, CloseIconSvg, PersonIconSvg, arrowLeftIcon, meetingDetailImage1 } from "../../assets/image";
import { routerConfig } from "../../router-config";

const ChangeChatPhotoSetting = ({ navigation }: ComPropsObject) => {

    const onGoToSetting = () => navigation.navigate(routerConfig.setting.name)

    const [isDetail, setIsDetail] = React.useState(false)

    return (
        <ChangeChatPhotoSettingWrapper>
            <HeaderContainer>
                {!isDetail ? (
                    <CloseButton onPress={onGoToSetting}>
                        <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                    </CloseButton>
                ) : (
                    <CloseButton onPress={onGoToSetting}>
                        <Image source={arrowLeftIcon} style={styles.backIcon} />
                    </CloseButton>
                )}
                <TextH3>{!isDetail ? 'オープンチャット名変更' : 'プレビュー'}</TextH3>
            </HeaderContainer>
            <ImageContainer isDetail={isDetail}>
                <Image style={{ flex: 1 }} source={meetingDetailImage1} />
            </ImageContainer>
            {isDetail ? (
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
                        <TextH5 style={{ color: '#6B7280' }}>詳細</TextH5>
                        <TextH3 style={styles.place}>
                            東京２３区の激うまスイーツを最新から昔ながらの
                        </TextH3>
                        <View style={{ display: "flex", flexDirection: 'row', gap: getWidth(1), alignItems: 'flex-end' }}>
                            <TextH3 style={styles.place}>お店まで情報交換し合う場所。</TextH3>
                            <TextActiveH5 style={styles.moreRead}>もっと読む</TextActiveH5>
                        </View>
                    </View>
                    <JoinButton onPress={() => setIsDetail(true)}>
                        <TextH3>参加</TextH3>
                    </JoinButton>
                </DetailContent>
            ) : (
                <MoreDetailButton onPress={() => setIsDetail(true)}>
                    <MoreText>プレビュー</MoreText>
                </MoreDetailButton>
            )}
        </ChangeChatPhotoSettingWrapper>
    )
}

const ChangeChatPhotoSettingWrapper = styled(View)(({ theme }) => ({
    backgroundColor: theme.white,
    paddingTop: getWidth(4),
    paddingBottom: getWidth(4),
    display: 'flex',
    gap: getHeight(1),
    height: getHeight(100),
    alignItems: 'center'
}))

const HeaderContainer = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    paddingRight: getWidth(3.3),
    paddingLeft: getWidth(4),
    width: getWidth(100)
}))

const CloseButton = styled(Pressable)(({ theme }) => ({
    position: "absolute",
    left: getWidth(5),
    top: 0
}))

const ImageContainer = styled(View)<{ isDetail: boolean }>(({ theme, isDetail }) => ({
    marginTop: isDetail ? 0 : getHeight(3),
    height: getHeight(35),
    width: getWidth(100),
}))
const DetailContent = styled(View)(({ theme }) => ({
    paddingLeft: getWidth(3),
    paddingRight: getWidth(3),
    width: getWidth(98)
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

const MoreDetailButton = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#9CA3AF',
    borderWidth: 0.5,
    gap: getWidth(2),
    padding: getWidth(3.7),
    width: getWidth(44),
    borderRadius: 10,
    marginTop: getHeight(14.5)
}))

const MoreText = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3.7),
    fontWeight: 300,
    color: '#9CA3AF',
}))

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: 'row',
        gap: getWidth(2),
        paddingTop: getHeight(1),
        marginBottom: getHeight(2.5)
    },
    buttonText: {
        fontSize: getWidth(3.6),
        color: '#3B82F6',
        fontWeight: 300,
        paddingLeft: getWidth(3.5),
        paddingRight: getWidth(3.5),
        paddingTop: getWidth(.5),
        paddingBottom: getWidth(.5),
    },
    place: {
        fontSize: getWidth(3.8),
        fontWeight: 300,
    },
    moreRead: {
        fontSize: getWidth(2.5),
        fontWeight: 700,
    },
    backIcon: {
        height: getWidth(8),
        maxWidth: getWidth(8),
    }
})

const JoinButton = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#E5E7EB',
    color: 'white',
	gap: getWidth(2),
	padding: getWidth(3),
	width: '100%',
    borderRadius: 100,
    marginTop: getHeight(6)
}))

export { ChangeChatPhotoSetting };