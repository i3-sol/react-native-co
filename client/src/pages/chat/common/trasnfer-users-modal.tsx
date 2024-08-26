import React from "react";
import { Pressable, View, TextInput, Image } from "react-native"
import { getHeight, getWidth } from "../../../theme/responsive"
import { BaseModal } from "../../../components/modal"
import { TextH3, TextH4 } from "../../../components/typography"
import styled from "styled-components";
import { CloseIconSvg, PfpSvgIcon1, PfpSvgIcon2, PfpSvgIcon3, PfpSvgIcon4, PfpSvgIcon5, PfpSvgIcon6, PfpSvgIcon7, PfpSvgIcon8, PfpSvgIcon9, cameraIcon } from "../../../assets/image";
import Checkbox from "../../../components/checkbox";
import { routerConfig } from "../../../router-config";

interface TransferUsersModalProps {
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
    { pfp: Pfp4, city: '東京都', userName: 'マカロン' },
    { pfp: Pfp5, city: '東京都', userName: 'パフェラブ' },
    { pfp: Pfp6, city: '東京都', userName: 'ほたる' },
    { pfp: Pfp7, city: '東京都', userName: 'Naomi' },
    { pfp: Pfp8, city: '東京都', userName: 'チョコチップ' },
    { pfp: Pfp9, city: '東京都', userName: 'Jacob' },
]

const TransferUsersModal = (props: TransferUsersModalProps) => {
    const { isModal, onCloseModal, setIsModal, navigation } = props;

    const [status, setStatus] = React.useState({
        data: data,
        idx: -1
    })

    const onSend = () => navigation.navigate(routerConfig.setting.name)

    return (
        <BaseModal
            visible={isModal.isTransferUsers}
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
                <CloseButton onPress={() => setIsModal({ ...isModal, isTransferUsers: false })}>
                    <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                </CloseButton>
                <TextH3>管理人を選ぶ</TextH3>
            </HeaderContainer>
            <UsersContainer>
                <TextH4>一度に5人まで選択可</TextH4>
                <ReasonContainer>
                    {status.data.map((i, k) => (
                        <ReasonItem key={k} onPress={() => setStatus({ ...status, idx: k })}>
                            <UserContainer>
                                {i.pfp}
                                <View>
                                    <TextH3 style={{ fontWeight: '300', fontSize: getWidth(3.5) }}>{i.city}</TextH3>
                                    <TextH3 style={{ fontWeight: '300', fontSize: getWidth(3.5) }}>{i.userName}</TextH3>
                                </View>
                            </UserContainer>
                            <Checkbox hitSlop={20} onPress={() => setStatus({ ...status, idx: k })}>
                                <CheckBoxDotView idx={status.idx} k={k} />
                            </Checkbox>
                        </ReasonItem>
                    ))}
                </ReasonContainer>

                <SendButton onPress={onSend}>
                    <TextH3>送信</TextH3>
                </SendButton>
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
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const UserContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: getWidth(2)
}))

const CheckBoxDotView = styled(View)<{ idx?: number, k?: number, isProblemWithImage?: boolean, isInappropriate?: boolean, isOther?: boolean }>(({ theme, idx, isProblemWithImage, isInappropriate, k, isOther }) => ({
    height: getWidth(5.5),
    width: getWidth(5.5),
    borderRadius: 50,
    borderWidth: (isProblemWithImage || isInappropriate || idx === k || isOther) ? 5 : 1,
    borderColor: "#6FCCD5",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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

export { TransferUsersModal }