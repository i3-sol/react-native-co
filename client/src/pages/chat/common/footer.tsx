import { Image, StyleSheet, View, Pressable, ScrollView, FlatList } from "react-native";
import styled from "styled-components/native";
import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard'

import { TextH3 } from "../../../components/typography";
import { getHeight, getWidth } from "../../../theme/responsive";
import { cameraIcon, galleryIcon, emojiIcon } from "../../../assets/image";
import { BaseTextInput } from "../../../components/input/baseInput";
import React from "react";

interface statusObject {
    text: string
}

const ChatFooter = () => {
    const [isEmoji, setIsEmoji] = React.useState(false)

    const [status, setStatus] = React.useState({
        text: ''
    } as statusObject)
    const onChooseEmoji = (emojiObject: EmojiType) => {
        console.log("emojiObject", emojiObject)
        setStatus({...status, text: status.text + emojiObject.emoji})
    }
    return (
        <ChatFooterWrapper>
            <ChooseImgContainer>
                <Pressable>
                    <Image source={cameraIcon} style={styles.icon} />
                </Pressable>
                <Pressable>
                    <Image source={galleryIcon} style={styles.icon} />
                </Pressable>
            </ChooseImgContainer>
            <InputContainer>
                <BaseTextInput placeholder="Aa" value={status.text} onChangeText={(e: string) => setStatus({...status, text: e})}/>
                <Pressable onPress={() => setIsEmoji(true)}>
                    <Image source={emojiIcon} style={styles.emojiIcon} />
                </Pressable>

            </InputContainer>
            <EmojiPicker
                onEmojiSelected={onChooseEmoji}
                open={isEmoji}
                onClose={() => setIsEmoji(false)}
                categoryPosition="top"
                emojiSize={20}
                hideHeader
                enableSearchBar
                styles={{
                    searchBar: {
                        container: { height: getHeight(5) },
                        text: { fontSize: getWidth(4) }
                    }
                }}
            />
        </ChatFooterWrapper>
    )
}

const ChatFooterWrapper = styled(View)({
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    gap: getWidth(4.5),
    bottom: 0,
    left: 0,
    backgroundColor: '#F9FAFB',
    width: getWidth(100),
    paddingRight: getWidth(7),
    paddingLeft: getWidth(7),
    paddingTop: getHeight(2),
    paddingBottom: getHeight(4),
})

const ChooseImgContainer = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    gap: getWidth(4)
})

const InputContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: theme.white,
    borderColor: theme.borderBaseColor,
    borderRadius: 100,
    borderWidth: 1,
    flex: 1,
    marginRight: getWidth(4),
    paddingLeft: getWidth(3),
    paddingRight: getWidth(3),
}))

const EmojiContainer = styled(View)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: getWidth(100),
    height: getHeight(50),
}))

const styles = StyleSheet.create({
    searchBarContainer: {

    },
    icon: {
        width: getWidth(6),
        height: getWidth(6),
    },
    searchBarText: {

    },
    emojiIcon: {
        width: getWidth(5.5),
        height: getWidth(5.5),
    }
})

export { ChatFooter }