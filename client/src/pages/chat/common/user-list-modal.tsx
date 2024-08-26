import React from "react";
import { Pressable, View } from "react-native"
import { getHeight, getWidth } from "../../../theme/responsive"
import { BaseModal } from "../../../components/modal"
import { TextActiveH4, TextH3, TextH5 } from "../../../components/typography"
import styled from "styled-components";
import { CloseIconSvg, PfpSvgIcon1, PfpSvgIcon2, PfpSvgIcon3, PfpSvgIcon4, PfpSvgIcon5, PfpSvgIcon6, PfpSvgIcon7, PfpSvgIcon8, PfpSvgIcon9, cameraIcon } from "../../../assets/image";
import { routerConfig } from "../../../router-config";

interface UserListModalProps {
    isModal: any
    onCloseModal: () => void
    setIsModal: Function
    navigation: any
}

const Pfp1 = <PfpSvgIcon1 width={getWidth(10)} height={getWidth(10)} />;
const Pfp2 = <PfpSvgIcon2 width={getWidth(10)} height={getWidth(10)} />;
const Pfp3 = <PfpSvgIcon3 width={getWidth(10)} height={getWidth(10)} />;
const Pfp4 = <PfpSvgIcon4 width={getWidth(10)} height={getWidth(10)} />;
const Pfp5 = <PfpSvgIcon5 width={getWidth(10)} height={getWidth(10)} />;
const Pfp6 = <PfpSvgIcon6 width={getWidth(10)} height={getWidth(10)} />;
const Pfp7 = <PfpSvgIcon7 width={getWidth(10)} height={getWidth(10)} />;
const Pfp8 = <PfpSvgIcon8 width={getWidth(10)} height={getWidth(10)} />;
const Pfp9 = <PfpSvgIcon9 width={getWidth(10)} height={getWidth(10)} />;

const data = [
    { pfp: Pfp1, city: '東京都', userName: '甘王' },
    { pfp: Pfp2, city: '東京都', userName: '立花ももか' },
    { pfp: Pfp3, city: '東京都', userName: 'Takahiro' },
    { pfp: Pfp4, city: '東京都', userName: 'マカロン', isJoin: true },
    { pfp: Pfp5, city: '東京都', userName: 'パフェラブ' },
    { pfp: Pfp6, city: '東京都', userName: 'ほたる' },
    { pfp: Pfp7, city: '東京都', userName: 'Naomi' },
    { pfp: Pfp8, city: '東京都', userName: 'チョコチップ' },
    { pfp: Pfp9, city: '東京都', userName: 'Jacob' },
    { pfp: Pfp1, city: '東京都', userName: '甘王' },
    { pfp: Pfp2, city: '東京都', userName: '立花ももか' },
]

const UserListModal = (props: UserListModalProps) => {
    const { isModal, onCloseModal, setIsModal, navigation } = props;

    const [status, setStatus] = React.useState({
        data: data,
        idx: -1
    })

    const onSend = () => navigation.navigate(routerConfig.setting.name)

    return (
        <BaseModal
            visible={isModal.isUserList}
            onClose={onCloseModal}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            width={100}
            height={100}
            top={3}
            left={0}
        >
            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingTop: getHeight(1.5) }}><View style={{ borderRadius: 10, width: getWidth(12), height: getHeight(.5), backgroundColor: '#E6E9EB' }} ></View></View>
            <HeaderContainer>
                <CloseButton onPress={() => setIsModal({ ...isModal, isUserList: false })}>
                    <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                </CloseButton>
                <TextH3>メンバー一覧</TextH3>
            </HeaderContainer>
            <UsersContainer>
                <ReasonContainer>
                    {status.data.map((i, k) => (
                        <ReasonItem key={k} onPress={() => setStatus({ ...status, idx: k })}>
                            <UserContainer>
                                <View>{i.pfp}</View>
                                <View>
                                    <TextH3 style={{ fontWeight: '300', fontSize: getWidth(3.5) }}>{i.city}</TextH3>
                                    <TextH3 style={{ fontWeight: '300', fontSize: getWidth(3.5) }}>{i.userName}</TextH3>
                                </View>
                            </UserContainer>
                            {i.isJoin && (
                                <AcceptConfirmContainer>
                                    <TextH5 style={{ paddingLeft: getWidth(1.5) }}>参加申請がありました。</TextH5>
                                    <ButtonGroupsContainer>
                                        <ActiveFirstButtonWrapper>
                                            <TextActiveH4>承認</TextActiveH4>
                                        </ActiveFirstButtonWrapper>
                                        <ActiveFirstButtonWrapper>
                                            <TextActiveH4>拒否</TextActiveH4>
                                        </ActiveFirstButtonWrapper>

                                    </ButtonGroupsContainer>
                                </AcceptConfirmContainer>
                            )}
                        </ReasonItem>
                    ))}
                </ReasonContainer>
            </UsersContainer>
        </BaseModal>
    )
}

const HeaderContainer = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    paddingTop: getHeight(2)
}))

const CloseButton = styled(Pressable)(({ theme }) => ({
    position: "absolute",
    left: getWidth(6),
    top: getHeight(2)
}))

const UsersContainer = styled(View)(({ theme }) => ({
    paddingLeft: getWidth(5),
    paddingRight: getWidth(6),
    paddingTop: getWidth(4),
    paddingBottom: getWidth(5),
    marginTop: getWidth(3),
    display: 'flex',
    gap: getHeight(3)
}))

const ReasonContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(2.5)
}))

const ReasonItem = styled(Pressable)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: getWidth(12),
    alignItems: 'center',
}))

const UserContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: getWidth(25),
    gap: getWidth(2)
}))

const AcceptConfirmContainer = styled(View)<{ idx?: number, k?: number, isProblemWithImage?: boolean, isInappropriate?: boolean, isOther?: boolean }>(({ theme, idx, isProblemWithImage, isInappropriate, k, isOther }) => ({
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingLeft: getWidth(2),
    paddingRight: getWidth(2),
    paddingTop: getWidth(2),
    paddingBottom: getWidth(2),
}))

const ButtonGroupsContainer = styled(View)<{ idx?: number, k?: number, isProblemWithImage?: boolean, isInappropriate?: boolean, isOther?: boolean }>(({ theme, idx, isProblemWithImage, isInappropriate, k, isOther }) => ({
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: getHeight(0.5),
    gap: getWidth(3)
}))

const SendButton = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6FCCD5',
    gap: getWidth(2),
    marginTop: getHeight(4.5),
    padding: getWidth(3),
    borderRadius: 20,
}))

const ActiveFirstButtonWrapper = styled(View)(({ theme }) => ({
    textWrap: "nowrap",
    display: "inline-block",
    paddingTop: getWidth(1.5),
    paddingBottom: getWidth(1.5),
    paddingRight: getWidth(4.1),
    paddingLeft: getWidth(4.1),
    backgroundColor: theme.white,
    border: `0.5px solid ${theme.borderActiveColor}`,
    borderRadius: 5,
}))

export { UserListModal }