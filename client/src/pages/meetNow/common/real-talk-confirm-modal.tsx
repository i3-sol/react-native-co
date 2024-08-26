
import { Pressable, View } from "react-native"
import { getHeight, getWidth } from "../../../theme/responsive"
import { BaseModal } from "../../../components/modal"
import { TextH3, TextH4, TextH5 } from "../../../components/typography"
import styled from "styled-components";

interface RealTalkConfirmModalProps {
    isModal: any
    onCloseModal: () => void
    setIsModal: Function
}

const RealTalkConfirmModal = (props: RealTalkConfirmModalProps) => {
    const { isModal, onCloseModal, setIsModal } = props;

    return (
        <BaseModal
            visible={isModal.isRealTalkConfirm}
            onClose={onCloseModal}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            width={75}
            top={27}
            left={12.5}
            height={35}
        >
            <ModalTextContainer>
                <TextH4 style={{ fontWeight: 700, paddingBottom: getHeight(1), textAlign: 'center' }}>Real Talk券がありません。</TextH4>
            </ModalTextContainer>
            <View>
                <Divider />
                <TableItem>
                    <LeftItem>10回券</LeftItem>
                    <RightItem>
                        <FirstItem>3,500円</FirstItem>
                        <TextH5>(2,000円お得)</TextH5>
                    </RightItem>
                </TableItem>
                <Divider />
                <TableItem>
                    <LeftItem>5回券</LeftItem>
                    <RightItem>
                        <FirstItem>2,000円</FirstItem>
                        <TextH5>(750円お得)</TextH5>
                    </RightItem>
                </TableItem>
                <Divider />
                <TableItem>
                    <LeftItem>3回券</LeftItem>
                    <RightItem>
                        <FirstItem>1,300円</FirstItem>
                        <TextH5>(350円お得)</TextH5>
                    </RightItem>
                </TableItem>
                <Divider />
                <TableItem>
                    <LeftItem>1回券</LeftItem>
                    <RightItem style={{paddingLeft: getWidth(10)}}>
                        <FirstItem>550円</FirstItem>
                    </RightItem>
                </TableItem>
                <Divider />
            </View>
            <ButtonContainer>
                <Pressable onPress={() => setIsModal({ ...isModal, isRealTalkConfirm: false })}>
                    <TextH4 style={{ fontWeight: 700, color: '#3B82F6' }}>選択してアプリ課金</TextH4>
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
    marginTop: getHeight(2.5)
}))

const Divider = styled(View)(({ theme }) => ({
    width: getWidth(100),
    height: 0.5,
    backgroundColor: '#dbd3c7',
}))

const RightItem = styled(View)(({ theme }) => ({
    borderLeftColor: '#dbd3c7',
    borderLeftWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: getWidth(1)
}))

const TableItem = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
}))

const LeftItem = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3.9),
    textAlign: "center",
    width: getWidth(34),
    paddingLeft: getWidth(3.3),
}))

const FirstItem = styled(TextH3)(({ theme }) => ({
    fontSize: getWidth(3.9),
    textAlign: "center",
    paddingLeft: getWidth(3.3),
    paddingTop: getWidth(3.3),
    paddingBottom: getWidth(3.3),
}))

export { RealTalkConfirmModal }