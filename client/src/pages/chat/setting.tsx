import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components";
import { Picker } from '@react-native-picker/picker';

import { getHeight, getWidth } from "../../theme/responsive";
import { TextH3, TextH4, TextH5 } from "../../components/typography";
import { ArrowRightIconSvg, CloseIconSvg, ToggleActiveSvg, ToggleDisabledSvg } from "../../assets/image";
import { routerConfig } from "../../router-config";
import { LeaveModal } from "./common/leave-modal";
import { DeleteModal } from "./common/delete-modal";
import { InformModal } from "./common/inform-modal";
import { TransferModal } from "./common/transfer-modal";
import { TransferUsersModal } from "./common/trasnfer-users-modal";
import { CloseChatModal } from "./common/close-chat-modal";
import { UserListModal } from "./common/user-list-modal";

const ChatSetting = ({ navigation }: ComPropsObject) => {

    const onGoToHome = () => navigation.navigate(routerConfig.chat.name)
    const [isChecked, setIsChecked] = React.useState({
        isEditCapacity: false,
        isApproval: false
    })

    const [isModal, setIsModal] = React.useState({
        isDelete: false,
        isLeave: false,
        isInform: false,
        isTransfer: false,
        isTransferUsers: false,
        isCloseChat: false,
        isUserList: false
    })

    const [selectedLanguage, setSelectedLanguage] = React.useState();

    const onCloseLeaveModal = () => {
        setIsModal({ ...isModal, isLeave: false })
    }

    const onCloseDeleteModal = () => {
        setIsModal({ ...isModal, isDelete: false })
    }

    const onCloseInformModal = () => {
        setIsModal({ ...isModal, isInform: false })
    }

    const onCloseTransferModal = () => {
        setIsModal({ ...isModal, isTransfer: false })
    }
    const onCloseTransferUsersModal = () => {
        setIsModal({ ...isModal, isTransferUsers: false })
    }
    const onCloseChatModal = () => {
        setIsModal({ ...isModal, isCloseChat: false })
    }
    const onCloseUserListModal = () => {
        setIsModal({ ...isModal, isUserList: false })
    }

    return (
        <ScrollView>
            <ChatSettingWrapper>
                <HeaderContainer>
                    <CloseButton onPress={onGoToHome}>
                        <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                    </CloseButton>
                    <TextH3>オープンチャット設定</TextH3>
                </HeaderContainer>

                <MainContainer>
                    <MainInfoContainer>
                        <TextH5>基本情報</TextH5>
                        <MainItemContainer>
                            <MainItem onPress={() => navigation.navigate(routerConfig.changeChatName.name)} >
                                <MainItemContent>
                                    <TextH3>オープンチャット名変更</TextH3>
                                    <TextH4>東京スイーツ部</TextH4>
                                </MainItemContent>
                                <ArrowRightIconSvg width={getWidth(6.5)} height={getWidth(6.5)} />
                            </MainItem>
                            <MainItem onPress={() => navigation.navigate(routerConfig.changeChatPhoto.name)} >
                                <TextH3>オープンチャット画像変更</TextH3>
                                <ArrowRightIconSvg width={getWidth(6.5)} height={getWidth(6.5)} />
                            </MainItem>
                            <MainItem onPress={() => navigation.navigate(routerConfig.changeChatDesc.name)} >
                                <MainItemContent>
                                    <TextH3>説明文</TextH3>
                                    <TextH4>東京２３区の激うま</TextH4>
                                </MainItemContent>
                                <ArrowRightIconSvg width={getWidth(6.5)} height={getWidth(6.5)} />
                            </MainItem>
                            <MainItem onPress={() => navigation.navigate(routerConfig.changeChatCategory.name)} >
                                <MainItemContent>
                                    <TextH3>カテゴリー</TextH3>
                                    <TextH4>カフェ巡り</TextH4>
                                </MainItemContent>
                                <ArrowRightIconSvg width={getWidth(6.5)} height={getWidth(6.5)} />
                            </MainItem>
                        </MainItemContainer>
                    </MainInfoContainer>
                    <MainInfoContainer>
                        <TextH5 style={{ paddingBottom: getHeight(1) }}>トークルーム設定</TextH5>
                        <MainItemContainer>
                            <Pressable onPress={() => setIsModal({ ...isModal, isDelete: true })}>
                                <TextH3>チャットデータ削除</TextH3>
                            </Pressable>
                            <Pressable onPress={() => setIsModal({ ...isModal, isLeave: true })}>
                                <TextH3>オープンチャット退出</TextH3>
                            </Pressable>
                            <Pressable onPress={() => setIsModal({ ...isModal, isInform: true })}>
                                <TextH3>通報</TextH3>
                            </Pressable>
                        </MainItemContainer>
                    </MainInfoContainer>

                    <MainItemContainer style={{ gap: getHeight(5) }}>
                        <MainItem>
                            <TextH3>定員数の編集</TextH3>
                            <Pressable onPress={() => setIsChecked({ ...isChecked, isEditCapacity: !isChecked.isEditCapacity })}>
                                {!!isChecked.isEditCapacity ? (
                                    <ToggleActiveSvg width={getWidth(13)} height={getWidth(7)} />
                                ) : (
                                    <ToggleDisabledSvg width={getWidth(13)} height={getWidth(7)} />
                                )}
                            </Pressable>
                        </MainItem>
                        {isChecked.isEditCapacity && <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                            style={{ fontSize: getWidth(4), width: getWidth(90) }}
                        >
                            {[...Array(5)].map((_, index) => (
                                <Picker.Item key={index} label={(index + 1).toString()} style={{ fontSize: getWidth(4) }} value={(index + 1).toString()} />
                            ))}
                        </Picker>}
                        <MainItem>
                            <Pressable onPress={() => setIsModal({ ...isModal, isUserList: true })}>
                                <TextH3>参加承認</TextH3>
                            </Pressable>
                            <Pressable onPress={() => setIsChecked({ ...isChecked, isApproval: !isChecked.isApproval })}>
                                {!!isChecked.isApproval ? (
                                    <ToggleActiveSvg width={getWidth(13)} height={getWidth(7)} />
                                ) : (
                                    <ToggleDisabledSvg width={getWidth(13)} height={getWidth(7)} />
                                )}
                            </Pressable>
                        </MainItem>
                        <MainItem onPress={() => setIsModal({ ...isModal, isTransfer: true })}>
                            <TextH3>管理人権現の委譲</TextH3>
                        </MainItem>
                        <MainItem onPress={() => setIsModal({ ...isModal, isCloseChat: true })}>
                            <TextH3>オープンチャット強制閉鎖</TextH3>
                        </MainItem>
                    </MainItemContainer>
                </MainContainer>

                <LeaveModal isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseLeaveModal} />
                <DeleteModal isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseDeleteModal} />
                <InformModal navigation={navigation} isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseInformModal} />
                <TransferModal isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseTransferModal} />
                <TransferUsersModal navigation={navigation} isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseTransferUsersModal} />
                <CloseChatModal isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseChatModal} />
                <UserListModal isModal={isModal} setIsModal={setIsModal} onCloseModal={onCloseUserListModal} navigation={navigation} />

            </ChatSettingWrapper>
        </ScrollView>
    )
}

const ChatSettingWrapper = styled(View)(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.white,
    paddingTop: getWidth(4),
    paddingRight: getWidth(3.3),
    paddingLeft: getWidth(4),
    paddingBottom: getWidth(4),
    display: 'flex',
    gap: getHeight(2.5)
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
    left: getWidth(2),
    top: 0
}))

const MainContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(6)
}))


const MainInfoContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(2)
}))

const MainItemContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(4.5)
}))

const MainItem = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: getWidth(1)
}))

const MainItemContent = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export { ChatSetting };