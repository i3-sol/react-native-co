import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { getHeight, getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { PersonIconSvg, meetingRecommendImage1, meetingRecommendImage2, meetingRecommendImage3, meetingRecommendImage4 } from "../../../assets/image";
import { sliceText } from "../../../services/utils";
import { routerConfig } from "../../../router-config";

const data = [
	{
		title: "読書好きの集い ",
		desc: "本を愛する人々のためのグループです。おすすめの一冊や読書体験をシェアし、豊かな読書ライフを楽しみましょう。",
		usersCnt: "56",
		img: meetingRecommendImage1
	},
	{
		title: "フィットネス仲間の部屋",
		desc: "健康的なライフスタイルを目指す仲間が集うグループです。",
		usersCnt: "16",
		img: meetingRecommendImage2
	},
	{
		title: "旅好きの体験シェア",
		desc: "旅行が好きな人たちが集まるグループです。世界中の旅先での体験談やおすすめスポットをシェアして、新たな旅のアイデアを探しましょう。",
		usersCnt: "136",
		img: meetingRecommendImage3
	},
	{
		title: "クリエイター交流ラウンジ",
		desc: "クリエイティブな活動に携わる方々が集うグループです。アイデアの共有やコラボレーションのきっかけを見つける場所として、活発な交流を楽しみましょう。",
		usersCnt: "26",
		img: meetingRecommendImage4
	},
]

const Recommend = ({ navigation }: ComPropsObject) => {
	return (
		<RecommendWrapper>
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<TextH3>あなたにおすすめのスレ</TextH3>
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
		</RecommendWrapper>
	)
}

const RecommendWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	paddingTop: getHeight(2.2)
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


export { Recommend };