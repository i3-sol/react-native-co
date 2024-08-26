
import { Pressable } from "react-native"
import { getHeight, getWidth } from "../../../theme/responsive"
import { BaseModal } from "../../../components/modal"
import { TextH4 } from "../../../components/typography"
import styled from "styled-components";

interface CloseChatModalProps {
    isModal: any
    onCloseModal: () => void
    setIsModal: Function
}

const CloseChatModal = (props: CloseChatModalProps) => {
    const {isModal, onCloseModal, setIsModal} = props;

    return (
        <BaseModal
            visible={isModal.isCloseChat}
            onClose={onCloseModal}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            width={68}
            top={27}
            left={16}
            height={14.5}
        >
            <ModalTextContainer>
                <TextH4 style={{ fontWeight: 700, paddingBottom: getHeight(1) }}>オープンチャットを削除して全員退出させますか？</TextH4>
            </ModalTextContainer>
            <ButtonContainer>
                <Pressable onPress={() => setIsModal({ ...isModal, isCloseChat: false })}>
                    <TextH4 style={{ fontWeight: 700, color: '#3B82F6' }}>いいえ</TextH4>
                </Pressable>
                <Divider></Divider>
                <Pressable onPress={() => setIsModal({ ...isModal, isCloseChat: false })}>
                    <TextH4 style={{ fontWeight: 700, color: '#EF4444' }}>はい</TextH4>
                </Pressable>
            </ButtonContainer>
        </BaseModal >
    )
}

const ModalTextContainer = styled(Pressable)(({ theme }) => ({
    paddingTop: getHeight(1.5),
    paddingBottom: getHeight(0.5),
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
}))

const ButtonContainer = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    gap: getWidth(13),
    alignItems: 'center',
    paddingRight: getWidth(2),
    borderTopColor: '#dbd3c7',
    borderTopWidth: 1
}))

const Divider = styled(Pressable)(({ theme }) => ({
    width: 1,
    height: getHeight(6),
    backgroundColor: '#dbd3c7',
}))

export {CloseChatModal}