import { Pressable, View } from "react-native";
import styled from "styled-components/native";

import { getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { ActiveFirstButton } from "../../../components/button";
import { HelpIconSvg, PhoneIconSvg } from "../../../assets/image";
import { useEffectCustom } from "../../../classes/Functions";
import RestApiClass from "../../../classes/RestApiClass";
import { routerConfig } from "../../../router-config";

interface PrefectureType {
	prefecture_name: string
	active: boolean
}


const MeetNow = ({ navigation }: ComPropsObject) => {
	const prefectures: any = useEffectCustom(async () => {
		let RestApi: RestApiClass = new RestApiClass("prefecture")
		RestApi.fields(["id", "prefecture_name"])
		RestApi.wheres("region:8")

		return await RestApi.list({ limit: 20 })
	})

	const onGotoMeetNow = () => {
		navigation.navigate(routerConfig.meetNow.name)
	}

	return (
		<MeetNowWrapper>
			<Pressable onPress={onGotoMeetNow}>
				<MeetNowHeader>
					<PhoneIconSvg width={getWidth(7)} height={getWidth(7)} />
					<TextH3>九州地方のMeet Now</TextH3>
					<HelpIconSvg width={getWidth(7)} height={getWidth(7)} />
				</MeetNowHeader>
			</Pressable>

			<MeetNowContainer>
				{prefectures.map((prefecture: PrefectureType, key: number) => (
					<ActiveFirstButton text={prefecture.prefecture_name} active={prefecture.active} key={key} />
				))}
			</MeetNowContainer>
		</MeetNowWrapper>
	)
}

const MeetNowWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap / 2,
}))

const MeetNowHeader = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.globalSpacingGap / 2,
	padding: `${theme.globalSpacingX}px 0px`,
}))

const MeetNowContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: theme.globalSpacingGap / 2,
}))

export { MeetNow };