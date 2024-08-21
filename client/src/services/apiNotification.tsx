import {Platform} from 'react-native';
import { toastMessage } from './tostMessage';

const isIOS = Platform.OS === 'ios';

const apiNotification = async (error: any, message: string = "") => {
	let response = error?.response;
	let tempMessage = "";

	if (error?.name === "ValidateError") {
		tempMessage = error.message || message;
	} else {
		switch (response?.status) {
			case 403:
			case 400:
				let errMessage = response?.data?.message;
				if (typeof errMessage === 'string' && !!errMessage) {
					tempMessage = response?.data?.message;
				} else {
					tempMessage = message;
				}
				break;
			default:
				tempMessage = message;
				break;
		}
	}

	if (tempMessage) {
		toastMessage("error", tempMessage);
	}
}

export { apiNotification, isIOS }
