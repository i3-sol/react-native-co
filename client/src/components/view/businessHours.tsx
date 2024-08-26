import { Text,View } from "react-native"

const BusinessHours = (props:any) =>
{

	if (props.item){
		let result:string = props.item.opening_hours

		if (result && props.item.closing_hours){
			result+="-"
		}

		if (props.item.closing_hours){
			result+=props.item.closing_hours
		}

		return (
				<Text>{result}</Text>
		)	
	}

	return ""
}

export {
	BusinessHours,
}