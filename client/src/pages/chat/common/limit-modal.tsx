
import { Pressable } from "react-native"
import { getHeight, getWidth } from "../../../theme/responsive"
import { BaseModal } from "../../../components/modal"
import { TextH4 } from "../../../components/typography"
import styled from "styled-components";

interface LimitModalProps {
    isModal: any
    onCloseModal: () => void
    setIsLimited: Function
}

const LimitModal = (props: LimitModalProps) => {
    const {isModal, onCloseModal, setIsLimited} = props;

    return (
        <BaseModal
            visible={isModal}
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
                <TextH4 style={{ fontWeight: 700, paddingBottom: getHeight(1) }}>カテゴリーは最大3つまで選択できます。</TextH4>
            </ModalTextContainer>
            <ButtonContainer>
                <Pressable onPress={() => setIsLimited(false)}>
                    <TextH4 style={{ fontWeight: 700, color: '#3B82F6' }}>はい</TextH4>
                </Pressable>
            </ButtonContainer>
        </BaseModal>
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
    alignItems: 'center',
    paddingTop: getHeight(2),
    borderTopColor: '#dbd3c7',
    borderTopWidth: 0.5
}))

export {LimitModal}