import React from "react"
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native"
import styled from "styled-components"

import { getHeight, getWidth } from "../../../theme/responsive"
import { UserAvatarIconSvg1, UserAvatarIconSvg2, UserAvatarIconSvg3, UserAvatarIconSvg4, AfterIconSvg, BeforeIconSvg, copyIcon, informIcon, replyIcon, emojiImage7 } from "../../../assets/image"
import { TextH3 } from "../../../components/typography"
import { data, reactionEmoji } from './data'
import { ChatContainer, ChatContent, ChatItem, ChatItemContainer, ChatMainWrapper, DateContent, DateText, EmojiImageContainer, ItemContainer, JoinEvent, Message, MessageText, ReactionContainer, RepliedContent, RepliedContentInfo, RepliedContentInfoText, RepliedContentMessage, RepliedMessage, UserInfoContainer, styles } from "./main-style"

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

export { ChatMain }