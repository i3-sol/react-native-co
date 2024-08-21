import { Pressable } from "react-native";
import { getWidth } from "../../theme/responsive";
import { ToggleActiveSvg, ToggleDisabledSvg } from "../../assets/image";

interface CustomToggleButtonProps {
	isChecked: boolean
	onChange: () => void
}

const CustomToggleButton = ({ isChecked, onChange }: CustomToggleButtonProps) => {
	return (
		<Pressable onPress={onChange}>
			{!!isChecked && (
				<ToggleActiveSvg width={getWidth(13)} height={getWidth(7)} />
			)}

			{!isChecked && (
				<ToggleDisabledSvg width={getWidth(13)} height={getWidth(7)} />
			)}
		</Pressable>
	)
}

export { CustomToggleButton };