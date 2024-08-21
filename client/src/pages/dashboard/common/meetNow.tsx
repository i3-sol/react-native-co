import { View } from "react-native";
import styled from "styled-components/native";

import { getWidth } from "../../../theme/responsive";
import { TextH3 } from "../../../components/typography";
import { ActiveFirstButton } from "../../../components/button";
import { HelpIconSvg, PhoneIconSvg } from "../../../assets/image";


interface OptionsType {
	text: string
	active: boolean
}

const options: OptionsType[] = [
	{
		text: "福岡",
		active: false
	}, {
		text: "佐賀",
		active: false
	}, {
		text: "長崎",
		active: false
	}, {
		text: "熊本",
		active: true
	}, {
		text: "大分",
		active: false
	}, {
		text: "宮崎",
		active: false
	}, {
		text: "鹿児島",
		active: false
	}, {
		text: "沖縄",
		active: false
	}
]

const MeetNow = () => {
	return (
		<MeetNowWrapper>
			<MeetNowHeader>
				<PhoneIconSvg width={getWidth(7)} height={getWidth(7)} />
				<TextH3>九州地方のMeet Now</TextH3>
				<HelpIconSvg width={getWidth(7)} height={getWidth(7)} />
			</MeetNowHeader>

			<MeetNowContainer>
				{options.map((option: OptionsType, key: number) => (
					<ActiveFirstButton text={option.text} active={option.active} key={key} />
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