import { Text } from "react-native"
import { date } from "../../classes/Functions"

const EventDate = (props:any) =>
{

	if (props.item){		
		return (
				<Text>{date("Y.m.d", props.item.event_chat_recruitment_start_on)}</Text>
		)	
	}

	return ""
}

export {
	EventDate,
}