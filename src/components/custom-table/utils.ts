export const formatGridSizes = (sizes: string[][]) => {
	return sizes.map((sizesArr) => `minmax(${sizesArr[0]}px, ${sizesArr[1]}fr)`)
}
