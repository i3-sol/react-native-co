import styled from "styled-components"
import { getHeight, getWidth } from "../../../theme/responsive"
import { StyleSheet, View } from "react-native"
import { TextH3 } from "../../../components/typography"

export const ChatMainWrapper = styled(View)({
    backgroundColor: 'white',
    height: getHeight(80)
})

export const ChatItemContainer = styled(View)<{ roll?: string }>(({ theme, roll }) => ({
    display: "flex",
    flexDirection: roll === 'other' ? "row" : 'row-reverse',
    gap: getWidth(2),
    marginBottom: getHeight(2),
    paddingRight: getWidth(7),
    paddingLeft: getWidth(4),
    paddingTop: getWidth(4),
    paddingBottom: getWidth(4),
}))

export const DateContent = styled(View)({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
})

export const DateText = styled(TextH3)({
    padding: getWidth(.75),
    fontSize: getWidth(2.5),
    fontWeight: 300,
    borderRadius: 50,
    backgroundColor: '#F3F4F6',
    width: getWidth(10),
    textAlign: "center",
    marginBottom: getHeight(2)
})

export const ItemContainer = styled(View)({
    display: 'flex',
})

export const UserInfoContainer = styled(View)({
    display: "flex",
    flexDirection: 'row',
    gap: getWidth(2),
    paddingLeft: getWidth(3.5)
})

export const ReactionContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(1.3),
    backgroundColor: 'white',
    paddingTop: getWidth(3.5),
    paddingBottom: getWidth(3.5),
    zIndex: 1001,
    marginLeft: getWidth(1),
    borderRadius: 10,
    width: getWidth(65)
}))

export const ChatContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(1),
}))

export const EmojiImageContainer = styled(View)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: getWidth(4),
    padding: getWidth(3),
    borderRadius: 10,
    backgroundColor: "white",
    zIndex: 1001,
    marginLeft: getWidth(1),
    position: "absolute",
    top: getHeight(-7),
    left: 0

}))

export const ChatContent = styled(View)<{ idx?: number, k?: number, isReply?: boolean }>(({ theme, idx, k, isReply }) => ({
    maxWidth: getWidth(60),
    zIndex: (k === idx && isReply) ? 1001 : 0,
    position: "relative"
}))

export const ChatItem = styled(View)<{ roll?: string }>(({ theme, roll }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: roll === 'other' ? 'row' : 'row-reverse',
    gap: getHeight(1),
}))

export const Message = styled(View)<{ roll?: string, isReply?: boolean }>(({ theme, roll, isReply }) => ({
    backgroundColor: (roll === "other" && !isReply) ? theme.footerBackground : (roll === "other" && isReply) ? 'white' : '#3B82F6',
    paddingTop: getWidth(1.3),
    paddingBottom: getWidth(1.3),
    paddingRight: getWidth(3),
    paddingLeft: getWidth(3),
    borderRadius: 15,
    color: roll === "other" ? theme.black : theme.white,
    position: "relative"
}))

export const RepliedMessage = styled(View)<{ roll: string }>(({ theme, roll }) => ({
    display: "flex",
    flexDirection: 'row',
    gap: getWidth(1),
    borderBottomWidth: roll === 'other' ? 1.5 : .5,
    borderBottomColor: roll === 'other' ? "#E5E7EB" : 'white',
    paddingBottom: getHeight(1)
}))

export const RepliedContent = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(1)
}))

export const RepliedContentInfo = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: getWidth(2)
}))

export const RepliedContentInfoText = styled(TextH3)<{ roll: string }>(({ theme, roll }) => ({
    color: roll === "me" ? 'white' : 'black',
    fontSize: getWidth(2.5),
    fontWeight: 300
}))

export const RepliedContentMessage = styled(TextH3)<{ roll: string }>(({ theme, roll }) => ({
    color: roll === "me" ? 'white' : 'black',
    fontSize: getWidth(2.5),
    fontWeight: 300
}))

export const MessageText = styled(TextH3)<{ roll?: string }>(({ theme, roll }) => ({
    color: roll === 'other' ? theme.black : theme.white,
    fontSize: getWidth(3.7),
    fontWeight: 300
}))

export const JoinEvent = styled(TextH3)(({ theme }) => ({
    backgroundColor: theme.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.borderActiveColor,
    color: theme.typographyActiveColor,
    paddingTop: getHeight(.65),
    paddingBottom: getHeight(.65),
    paddingLeft: getWidth(4),
    paddingRight: getWidth(4),
    fontSize: getWidth(3.7),
}))

export const styles = StyleSheet.create({
    opacityContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: getWidth(100),
        height: "100%",
        backgroundColor: 'black',
        opacity: 0.6,
        zIndex: 100
    },
    chatItem: {
        display: 'flex',
        flexDirection: 'row',
        gap: getWidth(2)
    },
    takeOver: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 5,
        padding: getWidth(2),
        fontSize: getWidth(3.7),
        fontWeight: 300,
        marginTop: getHeight(10),
        marginBottom: getHeight(10),
    },

    userInfo: {
        fontSize: getWidth(2.75),
        fontWeight: 300
    },
    messageStatus: {
        display: 'flex',
        gap: getHeight(.5)
    },
    time: {
        fontSize: getWidth(2.5),
        fontWeight: 300
    },
    reaction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: getWidth(4),
        paddingRight: getWidth(4),
    },
    reactionText: {
        fontSize: getWidth(4),
    },
    reactionImage: {
        width: getWidth(6),
        height: getWidth(6),
    },
    someOneJoined: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 50,
        padding: getWidth(1),
        fontSize: getWidth(2.7),
        fontWeight: 300,
        marginTop: getHeight(2),
        marginBottom: getHeight(3),
        width: getWidth(49)
    },
    beforeSvg: {
        position: "absolute",
        top: getHeight(.5),
        left: getWidth(-1),
    },
    afterSvg: {
        position: "absolute",
        bottom: getHeight(-0.1),
        right: getWidth(-0.1),
    },
    emojiContent: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: getHeight(1)
    },
    emojiImage: {
        width: getWidth(12),
        height: getWidth(12),
    },
    reactEmoji: {
        width: getWidth(3.9),
        height: getWidth(3.9),
        marginTop: getHeight(0.75),
        marginLeft: getWidth(4)
    },
    joinEvent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emoji: {
        width: getWidth(7),
        height: getWidth(7),
    }
})