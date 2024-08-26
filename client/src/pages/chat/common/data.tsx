import { UserAvatarIconSvg1, UserAvatarIconSvg2, UserAvatarIconSvg3, UserAvatarIconSvg4, AfterIconSvg, BeforeIconSvg, copyIcon, informIcon, replyIcon, emojiImage7 } from "../../../assets/image"

import { emojiImage1, emojiImage2, emojiImage3, emojiImage4, emojiImage5, emojiImage6, } from "../../../assets/image";
import { getWidth } from "../../../theme/responsive";

export const reactionEmoji = [emojiImage1, emojiImage2, emojiImage3, emojiImage4, emojiImage5, emojiImage6];

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

const UserAvatar1 = <UserAvatarIconSvg1 width={getWidth(10)} height={getWidth(10)} />
const RepliedUserAvatar1 = <UserAvatarIconSvg1 width={getWidth(6)} height={getWidth(6)} />
const RepliedUserAvatar2 = <UserAvatarIconSvg2 width={getWidth(6)} height={getWidth(6)} />
const UserAvatar2 = <UserAvatarIconSvg2 width={getWidth(10)} height={getWidth(10)} />

export const data: DataObject[] = [
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