import styled from "styled-components/native";
import { Modal, ModalBaseProps, Pressable, View } from "react-native";
import { getHeight, getWidth } from "../theme/responsive";

interface TransparentModalProps extends ModalBaseProps {
    children: any
}

interface BaseModalProps extends ModalBaseProps {
    children: any
    onClose: () => void
    width: number
    height: number
    top: number
    left: number
    borderTopLeftRadius: number
    borderTopRightRadius: number
    borderBottomLeftRadius: number
    borderBottomRightRadius: number
}

const TransparentModal = ({ visible, children }: TransparentModalProps) => {


    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            {children}
        </Modal>
    )
}

const BaseModal = (props: BaseModalProps) => {
    const { onClose, height, width, top, left, visible, children, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius } = props;

    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <BaseModalHidden onPress={onClose} />

            <BaseModalContainer
                topLeftRadius={borderTopLeftRadius}
                topRightRadius={borderTopRightRadius}
                bottomLeftRadius={borderBottomLeftRadius}
                bottomRightRadius={borderBottomRightRadius}
                width={width}
                left={left}
                top={top}
                height={height}
            >
                {children}
            </BaseModalContainer>
        </Modal>
    )
}

const BaseModalContainer = styled(View)<{
    topLeftRadius: number
    topRightRadius: number
    bottomLeftRadius: number
    bottomRightRadius: number
    width: number
    top: number
    left: number
    height: number
}>(({
    theme,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius,
    top,
    height,
    left,
    width }) => ({
        top: getHeight(top),
        width: getWidth(width),
        left: getWidth(left),
        height: getHeight(height),
        position: "absolute",
        backgroundColor: theme.white,
        borderTopLeftRadius: topLeftRadius,
        borderTopRightRadius: topRightRadius,
        borderBottomLeftRadius: bottomLeftRadius,
        borderBottomRightRadius: bottomRightRadius,
    }))

const BaseModalHidden = styled(Pressable)(({ theme }) => ({
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: '#BCBFC0',
    opacity: .75
}))

export { TransparentModal, BaseModal };