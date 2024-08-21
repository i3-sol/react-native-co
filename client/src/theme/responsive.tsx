import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const getWidth = (w: number): number => {
	return widthPercentageToDP(w + "%")
}

const getHeight = (h: number): number => {
	return heightPercentageToDP(h + "%")
}

export { getWidth, getHeight }