import React from "react";
import { Pressable, View, TextInput, Image } from "react-native"
import { getHeight, getWidth } from "../../../theme/responsive"
import { BaseModal } from "../../../components/modal"
import { TextH3, TextH4 } from "../../../components/typography"
import styled from "styled-components";
import { CloseIconSvg, cameraIcon } from "../../../assets/image";
import Checkbox from "../../../components/checkbox";
import { routerConfig } from "../../../router-config";

interface InformModalProps {
    isModal: any
    onCloseModal: () => void
    setIsModal: Function
    navigation: any
}

const InformModal = (props: InformModalProps) => {
    const { isModal, onCloseModal, setIsModal, navigation } = props;

    const [status, setStatus] = React.useState({
        isProblemWithImage: false,
        isInappropriate: false,
        isOther: false
    })

    const onChangeValue = (key: string, value: boolean) => {
        setStatus({ ...status, [key]: value })
    }

    const onSend = () => navigation.navigate(routerConfig.setting.name)

    return (
        <BaseModal
            visible={isModal.isInform}
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
                <CloseButton onPress={() => setIsModal({ ...isModal, isInform: false })}>
                    <CloseIconSvg height={getWidth(6)} width={getWidth(6)} />
                </CloseButton>
                <TextH3>通報</TextH3>
            </HeaderContainer>
            <ReasonForNotification>
                <TextH3>通報理由</TextH3>
                <ReasonContainer>
                    <ReasonItem onPress={() => onChangeValue('isProblemWithImage', !status.isProblemWithImage)}>
                        <TextH3 style={{ fontWeight: 300, fontSize: getWidth(3.5) }}>画像に問題がある</TextH3>
                        <Checkbox hitSlop={20} onPress={() => onChangeValue('isProblemWithImage', !status.isProblemWithImage)}>
                            <CheckBoxDotView isProblemWithImage={status.isProblemWithImage} />
                        </Checkbox>
                    </ReasonItem>
                    <Divider />
                    <ReasonItem onPress={() => onChangeValue('isInappropriate', !status.isInappropriate)}>
                        <TextH3 style={{ fontWeight: 300, fontSize: getWidth(3.5) }}>不適切な内容があった</TextH3>
                        <Checkbox hitSlop={20} onPress={() => onChangeValue('isInappropriate', !status.isInappropriate)}>
                            <CheckBoxDotView isInappropriate={status.isInappropriate} />
                        </Checkbox>
                    </ReasonItem>
                    <Divider />
                    <ReasonItem onPress={() => onChangeValue('isOther', !status.isOther)}>
                        <TextH3 style={{ fontWeight: 300, fontSize: getWidth(3.5) }}>その他</TextH3>
                        <Checkbox hitSlop={20} onPress={() => onChangeValue('isOther', !status.isOther)}>
                            <CheckBoxDotView isOther={status.isOther} />
                        </Checkbox>
                    </ReasonItem>
                    <Divider />
                </ReasonContainer>
                <ReportDetailContainer>
                    <TextH3>通報内容</TextH3>
                    <ReportInputText
                        multiline
                        numberOfLines={5}
                        placeholder="こちらに内容を書いてください。"
                        textAlignVertical="top"
                    />
                </ReportDetailContainer>
                <ReportPhotoContainer>
                    <TextH3>証拠写真</TextH3>
                    <ReportPhotoItem>
                        <Image style={{ width: getWidth(6), height: getWidth(6) }} source={cameraIcon} />
                    </ReportPhotoItem>
                </ReportPhotoContainer>

                <SendButton onPress={onSend}>
                    <TextH3>送信</TextH3>
                </SendButton>
            </ReasonForNotification>
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

const ReasonForNotification = styled(View)(({ theme }) => ({
    paddingLeft: getWidth(5),
    paddingRight: getWidth(4),
    paddingTop: getWidth(5),
    paddingBottom: getWidth(5),
    marginTop: getWidth(3),
    display: 'flex',
    gap: getHeight(3)
}))

const ReasonContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(2)
}))

const ReasonItem = styled(Pressable)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const Divider = styled(View)(({ theme }) => ({
    width: getWidth(90),
    height: .5,
    backgroundColor: '#dbd3c7',
}))

const CheckBoxDotView = styled(View)<{ isProblemWithImage?: boolean, isInappropriate?: boolean, isOther?: boolean }>(({ theme, isProblemWithImage, isInappropriate, isOther }) => ({
    height: getWidth(5.5),
    width: getWidth(5.5),
    borderRadius: 50,
    borderWidth: (isProblemWithImage || isInappropriate || isOther) ? 5 : 1,
    borderColor: "#6FCCD5",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
}))

const ReportDetailContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(.7),
}))

const ReportInputText = styled(TextInput)(({ theme }) => ({
    borderRadius: 7,
    borderWidth: .5,
    borderColor: '#dbd3c7',
    paddingTop: getWidth(3.5),
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
    paddingBottom: getWidth(4),
    fontSize: getWidth(3.7),
    height: getHeight(11.5)
}))

const ReportPhotoContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(.7),
}))

const ReportPhotoItem = styled(View)(({ theme }) => ({
    borderRadius: 7,
    backgroundColor: '#F3F4F6',
    height: getHeight(11.5),
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
}))

const SendButton = styled(Pressable)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6FCCD5',
    gap: getWidth(2),
    marginTop: getHeight(2.5),
    padding: getWidth(3),
    borderRadius: 20,
}))

export { InformModal }