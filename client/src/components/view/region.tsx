import { Text,View } from "react-native"

const Region = (props:any) =>
{
	let regionName:string = ""
	
	if (props.item && props.item.region_name){
		regionName = props.item.region_name
	}

	return (
			<Text>{regionName}地方</Text>
	)
}

export {
	Region,
}