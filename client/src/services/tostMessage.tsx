import Toast from 'react-native-toast-message';

const toastMessage = (type: string, html: string) => {
	switch (type) {
		case 'info': {
			Toast.show({ type: 'info', text2: html, visibilityTime: 1500 })
			break;
		}
		case 'success': {
			Toast.show({ type: 'success', text2: html, visibilityTime: 1500 });
			break;
		}
		case 'error': {
			Toast.show({ type: 'error', text2: html, visibilityTime: 1500 });
			break;
		}
	}
}

export { toastMessage };