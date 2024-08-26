import { Text,View } from "react-native"

const Prefecture = (props:any) =>
{
	let prefectureName:string = ""
	
	if (props.item && props.item.prefecture_name){
		prefectureName = props.item.prefecture_name
	}

	return (
			<Text>{prefectureName}</Text>
	)
}

export {
	Prefecture,
}