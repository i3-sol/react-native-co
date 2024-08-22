import React from "react"
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native"
import styled from "styled-components"

import { getHeight, getWidth } from "../../../theme/responsive"
import { UserAvatarIconSvg1, UserAvatarIconSvg2, UserAvatarIconSvg3, UserAvatarIconSvg4, AfterIconSvg, BeforeIconSvg, copyIcon, informIcon, replyIcon, emojiImage7 } from "../../../assets/image"
import { TextH3 } from "../../../components/typography"


import { emojiImage1, emojiImage2, emojiImage3, emojiImage4, emojiImage5, emojiImage6, } from "../../../assets/image"

const UserAvatar1 = <UserAvatarIconSvg1 width={getWidth(10)} height={getWidth(10)} />
const RepliedUserAvatar1 = <UserAvatarIconSvg1 width={getWidth(6)} height={getWidth(6)} />
const RepliedUserAvatar2 = <UserAvatarIconSvg2 width={getWidth(6)} height={getWidth(6)} />
const UserAvatar2 = <UserAvatarIconSvg2 width={getWidth(10)} height={getWidth(10)} />

interface DataObject {
    avatar?: React.JSX.Element,
    userName?: string
    city?: string
    roll: string
    emoji?: boolean
    reactEmoji?: any,
    message: Array<{
        text: string
        time: string
        isRead?: boolean
        joinEvent?: string
        repliedContent?: {
            avatar: React.JSX.Element,
            userName: string,
            city: string,
            message: string
        }
    }>
}

const reactionEmoji = [emojiImage1, emojiImage2, emojiImage3, emojiImage4, emojiImage5, emojiImage6];

const data: DataObject[] = [
    {
        avatar: UserAvatar1,
        userName: '立花ももか',
        city: '東京都',
        roll: 'other',
        message: [
            {
                text: '今日都内かなり暑いですね🥵',
                time: '13:00',
            }
        ],
    },
    {
        roll: 'me',
        message: [
            {
                text: '溶けそうです',
                time: '13:10',
                isRead: true
            },
        ],
        emoji: true
    },
    {
        avatar: UserAvatar2,
        userName: '甘王',
        city: '東京都',
        roll: 'other',
        message: [
            {
                text: '最近浅草にOpenしたかき氷屋さん行った人いますか？',
                time: '13:12',
            },
            {
                text: '台湾かき氷が衝撃的な美味さだった😍',
                time: '13:12'
            },
        ],

    },
    {
        roll: 'me',
        message: [
            {
                text: 'え！気になる！',
                time: '13:13',
                isRead: true
            },
        ],
    },
    {
        avatar: UserAvatar2,
        userName: '甘王',
        city: '東京都',
        roll: 'other',
        message: [
            {
                text: 'では、イベント作ります。',
                time: '13:15',
            },
            {
                text: '甘王さんがイベントを開催しました\n浅草でかき氷を食べよう！\n場所：浅草橋駅\n日時：2024.8.23\n',
                joinEvent: 'イベント詳細',
                time: '13:12'
            },
        ],

    },
    {
        roll: 'me',
        message: [
            {
                text: 'ありがとうございます🫡',
                time: '13:29',
                isRead: true,
                repliedContent: {
                    avatar: RepliedUserAvatar2,
                    userName: '甘王',
                    city: '東京都',
                    message: 'では、イベント作ります。'
                }
            },
        ],

    },
    {
        avatar: UserAvatar1,
        userName: '甘王',
        city: '東京都',
        roll: 'other',
        message: [
            {
                text: '夏はかき氷ですね〜✨',
                time: '13:29',
            },
        ],
    },
    {
        avatar: UserAvatar2,
        userName: '甘王',
        city: '東京都',
        roll: 'other',
        message: [
            {
                text: '楽しみですね！',
                time: '13:31',
                repliedContent: {
                    avatar: RepliedUserAvatar1,
                    userName: 'マカロン',
                    city: '東京都',
                    message: 'ありがとうございます🫡'
                }
            },
        ],
        reactEmoji: emojiImage1
    },
    {
        roll: 'me',
        message: [
            {
                text: '期間限定品は見逃せない〜',
                time: '13:32',
                isRead: true
            },
        ],
    },
]

const ChatMain = () => {

    const [status, setStatus] = React.useState({
        data: data,
        isReply: false,
        idx: 0
    })

    const onReaction = (idx: number) => {
        setStatus({ ...status, isReply: !status.isReply, idx: idx })
    }

    return (
        <ChatMainWrapper>
            <ScrollView>
                {status.isReply && <View style={styles.opacityContainer}></View>}
                <DateContent>
                    <DateText>今日</DateText>
                </DateContent>
                {status.data.map((i, k) => (
                    <ChatItemContainer key={k} roll={i.roll}>
                        <View style={styles.chatItem}>
                            {i.avatar &&
                                <Pressable style={{ zIndex: (status.isReply && status.idx === k) ? 1001 : 0 }} onPress={() => onReaction(k)}>{i.avatar}</Pressable>
                            }
                            <ItemContainer>
                                {i.userName &&
                                    <UserInfoContainer>
                                        <TextH3 style={styles.userInfo}>{i.city}</TextH3>
                                        <TextH3 style={styles.userInfo}>{i.userName}</TextH3>
                                    </UserInfoContainer>
                                }

                                <ChatContainer>
                                    {(status.isReply && k === status.idx) && (
                                        <EmojiImageContainer>
                                            {reactionEmoji.map((i, k) => (
                                                <Pressable key={k} onPress={() => setStatus({...status, isReply: false})}><Image style={styles.emoji} source={i} /></Pressable>
                                            ))}
                                        </EmojiImageContainer>
                                    )}
                                    {i.message.map((m, n) => (
                                        <ChatContent isReply={status.isReply} k={k} idx={status.idx} key={`${k}-${n}`}>
                                            <ChatItem roll={i.roll}>
                                                <Message isReply={status.isReply} roll={i.roll}>
                                                    {m.repliedContent && (
                                                        <RepliedMessage roll={i.roll}>
                                                            {m.repliedContent.avatar}
                                                            <RepliedContent>
                                                                <RepliedContentInfo>
                                                                    <RepliedContentInfoText roll={i.roll}>{m.repliedContent.city}</RepliedContentInfoText>
                                                                    <RepliedContentInfoText roll={i.roll}>{m.repliedContent.userName}</RepliedContentInfoText>
                                                                </RepliedContentInfo>
                                                                <RepliedContentMessage roll={i.roll}>{m.repliedContent.message}</RepliedContentMessage>
                                                            </RepliedContent>
                                                        </RepliedMessage>
                                                    )}
                                                    <MessageText roll={i.roll} >{m.text}</MessageText>
                                                    {m.joinEvent &&
                                                        <Pressable style={styles.joinEvent}>
                                                            <JoinEvent>{m.joinEvent}</JoinEvent>
                                                        </Pressable>
                                                    }
                                                </Message>
                                                {(i.roll === "other" && n === 0) && <BeforeIconSvg width={getWidth(4)} height={getWidth(4)} style={styles.beforeSvg} />}
                                                {(i.roll === "me" && n === 0) && <AfterIconSvg width={getWidth(4)} height={getWidth(4)} style={styles.afterSvg} />}
                                                <View style={styles.messageStatus}>
                                                    {m.isRead && <TextH3 style={styles.time}>既読</TextH3>}
                                                    <TextH3 style={styles.time}>{m.time}</TextH3>
                                                </View>
                                            </ChatItem>
                                            {i.emoji && <View style={styles.emojiContent}>
                                                <TextH3 style={styles.time}>{i.emoji}13:12</TextH3>
                                                <Image source={emojiImage7} style={styles.emojiImage} />
                                            </View>}
                                            {i.reactEmoji && <Image source={i.reactEmoji} style={styles.reactEmoji} />}
                                        </ChatContent>
                                    ))}
                                    {(status.isReply && k === status.idx) && (
                                        <ReactionContainer>
                                            <Pressable onPress={() => setStatus({...status, isReply: false})} style={styles.reaction}>
                                                <TextH3 style={styles.reactionText}>コピー</TextH3>
                                                <Image source={copyIcon} style={styles.reactionImage} />
                                            </Pressable>
                                            <View style={{ width: '100%', height: 1, backgroundColor: 'lightgray' }}></View>
                                            <Pressable onPress={() => setStatus({...status, isReply: false})}  style={styles.reaction}>
                                                <TextH3 style={styles.reactionText}>返信</TextH3>
                                                <Image source={replyIcon} style={styles.reactionImage} />
                                            </Pressable>
                                            <View style={{ width: '100%', height: 1, backgroundColor: 'lightgray' }}></View>
                                            <Pressable onPress={() => setStatus({...status, isReply: false})}  style={styles.reaction}>
                                                <TextH3 style={styles.reactionText}>通報</TextH3>
                                                <Image source={informIcon} style={styles.reactionImage} />
                                            </Pressable>
                                        </ReactionContainer>
                                    )}

                                </ChatContainer>
                            </ItemContainer>
                        </View>
                    </ChatItemContainer>
                ))}
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                    <TextH3 style={styles.someOneJoined}>パフェラブさんが参加しました</TextH3>
                </View>
                <ChatItemContainer style={{flexDirection: "column"}}>
                    <View style={{ display: "flex", flexDirection: "row", gap: getWidth(2) }}>
                        <UserAvatarIconSvg3 width={getWidth(10)} height={getWidth(10)} />

                        <ItemContainer>
                            <ChatContainer>
                                <ChatContent style={{ maxWidth: getWidth(46.5) }}>
                                    <ChatItem style={{ flexDirection: "row" }}>
                                        <Message style={{ backgroundColor: '#F3F4F6' }}>
                                            <MessageText style={{ color: 'black' }}>パフェラブさんから参加申請がありました。</MessageText>
                                            <View style={{ display: 'flex', flexDirection: "row", justifyContent: "center", gap: getWidth(2), marginTop: getHeight(1) }}>
                                                <Pressable style={styles.joinEvent}>
                                                    <JoinEvent>承認</JoinEvent>
                                                </Pressable>
                                                <Pressable style={styles.joinEvent}>
                                                    <JoinEvent>拒否</JoinEvent>
                                                </Pressable>
                                            </View>
                                        </Message>
                                        <BeforeIconSvg width={getWidth(4)} height={getWidth(4)} style={styles.beforeSvg} />
                                        <View style={styles.messageStatus}>
                                            <TextH3 style={styles.time}>13:31</TextH3>
                                        </View>
                                    </ChatItem>
                                </ChatContent>
                            </ChatContainer>
                        </ItemContainer>
                    </View>
                    <TextH3 style={styles.takeOver}>管理人があと2週間で24歳になります。管理人を誰かが引き継ぎましょう。引き継ぎをしないと自動的に閉鎖になります</TextH3>
                    <View style={{ display: "flex", flexDirection: "row", gap: getWidth(2) }}>
                        <UserAvatarIconSvg4 width={getWidth(10)} height={getWidth(10)} />

                        <ItemContainer>
                            <ChatContainer>
                                <ChatContent style={{ maxWidth: getWidth(46.5) }}>
                                    <ChatItem style={{ flexDirection: "row" }}>
                                        <Message style={{ backgroundColor: '#F3F4F6' }}>
                                            <MessageText style={{ color: 'black' }}>管理人から管理引継ぎ依頼がありました。</MessageText>
                                            <View style={{ display: 'flex', flexDirection: "row", justifyContent: "center", gap: getWidth(2), marginTop: getHeight(1) }}>
                                                <Pressable style={styles.joinEvent}>
                                                    <JoinEvent>承認</JoinEvent>
                                                </Pressable>
                                                <Pressable style={styles.joinEvent}>
                                                    <JoinEvent>拒否</JoinEvent>
                                                </Pressable>
                                            </View>
                                        </Message>
                                        <BeforeIconSvg width={getWidth(4)} height={getWidth(4)} style={styles.beforeSvg} />
                                        <View style={styles.messageStatus}>
                                            <TextH3 style={styles.time}>13:31</TextH3>
                                        </View>
                                    </ChatItem>
                                </ChatContent>
                            </ChatContainer>
                        </ItemContainer>
                    </View>
                </ChatItemContainer>
            </ScrollView>
        </ChatMainWrapper>
    )
}

const ChatMainWrapper = styled(View)({
    backgroundColor: 'white',
    height: getHeight(80)
})

const ChatItemContainer = styled(View)<{ roll?: string }>(({ theme, roll }) => ({
    display: "flex",
    flexDirection: roll === 'other' ? "row" : 'row-reverse',
    gap: getWidth(2),
    marginBottom: getHeight(2),
    paddingRight: getWidth(7),
    paddingLeft: getWidth(4),
    paddingTop: getWidth(4),
    paddingBottom: getWidth(4),
}))

const DateContent = styled(View)({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
})

const DateText = styled(TextH3)({
    padding: getWidth(.75),
    fontSize: getWidth(2.5),
    fontWeight: 300,
    borderRadius: 50,
    backgroundColor: '#F3F4F6',
    width: getWidth(10),
    textAlign: "center",
    marginBottom: getHeight(2)
})

const ItemContainer = styled(View)({
    display: 'flex',
})

const UserInfoContainer = styled(View)({
    display: "flex",
    flexDirection: 'row',
    gap: getWidth(2),
    paddingLeft: getWidth(3.5)
})

const ReactionContainer = styled(View)(({ theme }) => ({
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

const ChatContainer = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(1),
}))

const EmojiImageContainer = styled(View)(({ theme }) => ({
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

const ChatContent = styled(View)<{ idx?: number, k?: number, isReply?: boolean }>(({ theme, idx, k, isReply }) => ({
    maxWidth: getWidth(60),
    zIndex: (k === idx && isReply) ? 1001 : 0,
    position: "relative"
}))

const ChatItem = styled(View)<{ roll?: string }>(({ theme, roll }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: roll === 'other' ? 'row' : 'row-reverse',
    gap: getHeight(1),
}))

const Message = styled(View)<{ roll?: string, isReply?: boolean }>(({ theme, roll, isReply }) => ({
    backgroundColor: (roll === "other" && !isReply) ? theme.footerBackground : (roll === "other" && isReply) ? 'white' : '#3B82F6',
    paddingTop: getWidth(1.3),
    paddingBottom: getWidth(1.3),
    paddingRight: getWidth(3),
    paddingLeft: getWidth(3),
    borderRadius: 15,
    color: roll === "other" ? theme.black : theme.white,
    position: "relative"
}))

const RepliedMessage = styled(View)<{ roll: string }>(({ theme, roll }) => ({
    display: "flex",
    flexDirection: 'row',
    gap: getWidth(1),
    borderBottomWidth: roll === 'other' ? 1.5 : .5,
    borderBottomColor: roll === 'other' ? "#E5E7EB" : 'white',
    paddingBottom: getHeight(1)
}))

const RepliedContent = styled(View)(({ theme }) => ({
    display: 'flex',
    gap: getHeight(1)
}))

const RepliedContentInfo = styled(View)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: getWidth(2)
}))

const RepliedContentInfoText = styled(TextH3)<{ roll: string }>(({ theme, roll }) => ({
    color: roll === "me" ? 'white' : 'black',
    fontSize: getWidth(2.5),
    fontWeight: 300
}))

const RepliedContentMessage = styled(TextH3)<{ roll: string }>(({ theme, roll }) => ({
    color: roll === "me" ? 'white' : 'black',
    fontSize: getWidth(2.5),
    fontWeight: 300
}))

const MessageText = styled(TextH3)<{ roll?: string }>(({ theme, roll }) => ({
    color: roll === 'other' ? theme.black : theme.white,
    fontSize: getWidth(3.7),
    fontWeight: 300
}))

const JoinEvent = styled(TextH3)(({ theme }) => ({
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

const styles = StyleSheet.create({
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

export { ChatMain }