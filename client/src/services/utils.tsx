
export const sliceText = (text: string, len: number) => {
	if (!text) return ''
	return (text.length > len ? text.slice(0, len) + '...' : text)
}