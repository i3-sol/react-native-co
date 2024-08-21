import { Image, Pressable, View } from "react-native";
import styled from "styled-components/native";

import { getHeight, getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { PersonIconSvg, meetingTopicImage1, meetingTopicImage2, meetingTopicImage3, meetingTopicImage4 } from "../../../assets/image";
import { sliceText } from "../../../services/utils";
import { routerConfig } from "../../../router-config";

const data = [
	{
		title: "今日の大谷さん",
		desc: "大谷翔平選手の最新ニュースやパフォーマンスについて語り合うグループです。",
		usersCnt: "136",
		img: meetingTopicImage1
	},
	{
		title: "九州温泉行くぞ",
		desc: "九州の名湯を訪ねるための情報交換やおすすめスポットを共有するグループです。",
		usersCnt: "44",
		img: meetingTopicImage2
	},
	{
		title: "九州大学合格を目指すスレ",
		desc: "九州大学への合格を目指している受験生のための応援グループです。",
		usersCnt: "26",
		img: meetingTopicImage3
	},
	{
		title: "福岡単身赴任決定",
		desc: "福岡への単身赴任が決まった方のためのコミュニティです。",
		usersCnt: "39",
		img: meetingTopicImage4
	},
]

const CurrentTopicThread = ({ navigation }: ComPropsObject) => {
	return (
		<CurrentTopicThreadWrapper>
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<TextH3>今話題のスレ</TextH3>
				<ThreadDesc>もっと見る</ThreadDesc>
			</View>
			<ThreadContainer>
				{data.map((i, k) => (
					<ThreadItem key={k} onPress={() => navigation.navigate(routerConfig.meetingDetail.name)}>
						<ThreadImage source={i.img} />
						<View style={{ display: 'flex', gap: getHeight(.5) }}>
							<ThreadTitle>{i.title}</ThreadTitle>

							<ThreadDesc>{sliceText(i.desc, 23)}</ThreadDesc>
							<ThreadUserCntContainer>
								<PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
								<ThreadDesc>{i.usersCnt}</ThreadDesc>
							</ThreadUserCntContainer>
						</View>
					</ThreadItem>
				))}
			</ThreadContainer>
		</CurrentTopicThreadWrapper>
	)
}

const CurrentTopicThreadWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	paddingTop: getHeight(2.9)
}))

const ThreadContainer = styled(View)(({ theme }) => ({
	paddingTop: getHeight(1),
	gap: getHeight(1.1)
}))

const ThreadItem = styled(Pressable)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	gap: getWidth(2)
}))

const ThreadImage = styled(Image)(({ theme }) => ({
	height: getWidth(15),
	maxWidth: getWidth(15),
}))

const ThreadTitle = styled(TextH3)(({ theme }) => ({
	fontSize: getWidth(3.2),
	fontWeight: 900
}))

const ThreadDesc = styled(TextH3)(({ theme }) => ({
	fontSize: getWidth(3),
	fontWeight: 400
}))

const ThreadUserCntContainer = styled(View)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	marginTop: getHeight(.25),
	gap: getWidth(1),
	alignItems: "center",
}))


export { CurrentTopicThread };