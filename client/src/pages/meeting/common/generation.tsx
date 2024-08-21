import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { getHeight, getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { PersonIconSvg, recommendedBadgeImage1, meetingGenerationImage1, meetingGenerationImage2, meetingGenerationImage3, meetingGenerationImage4 } from "../../../assets/image";
import { sliceText } from "../../../services/utils";
import { routerConfig } from "../../../router-config";

const data = [
	{
		title: "阿蘇の紅葉が見頃",
		desc: "阿蘇山周辺の紅葉情報を共有するグループです。",
		usersCnt: "23",
		img: meetingGenerationImage1
	},
	{
		title: "医療職さん集合",
		desc: "医療業界で働く方々が集うグループです。仕事の悩みや成功談、役立つ情報を共有し",
		usersCnt: "44",
		img: meetingGenerationImage2
	},
	{
		title: "育児専念中のぼやき",
		desc: "子育てに奮闘中のパパママが集まるグループです。日々のぼやきや悩みをシェアして、少しでも心を軽くしましょう。",
		usersCnt: "136",
		img: meetingGenerationImage3
	},
	{
		title: "ゴルフも円熟味が増してさ",
		desc: "ゴルフを愛する大人たちが集うグループです。技術向上のヒントや、ゴルフ談義を通じて、さらにゴルフを楽しみましょう。",
		usersCnt: "31",
		img: meetingGenerationImage4
	},
]

const Generation = ({ navigation }: ComPropsObject) => {
	return (
		<GenerationWrapper>
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<TextH3>同世代が注目しているスレ</TextH3>
				<ThreadDesc>もっと見る</ThreadDesc>
			</View>
			<ThreadContainer>
				{data.map((i, k) => (
					<ThreadItem key={k} onPress={() => navigation.navigate(routerConfig.meetingDetail.name)}>
						<View>
						<ThreadImage source={i.img} />
						<BadgeImage source={recommendedBadgeImage1} />
						</View>
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
		</GenerationWrapper>
	)
}

const GenerationWrapper = styled(View)(({ theme }) => ({
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

const BadgeImage = styled(Image)(({ theme }) => ({
	position: "absolute",
	right: 0,
	bottom: 0,
	height: getWidth(5),
	maxWidth: getWidth(5),
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


export { Generation };