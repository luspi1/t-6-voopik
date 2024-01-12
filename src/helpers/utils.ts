import { DisplayBreakpoints } from 'src/helpers/consts'

export const setAdaptiveSliderParams = (displayWidth: number, [a, b, c, d]: number[]) => {
	if (displayWidth < DisplayBreakpoints.Md) {
		return d
	}
	if (displayWidth < DisplayBreakpoints.Lg) {
		return c
	}
	if (displayWidth < DisplayBreakpoints.Xl) {
		return b
	}
	return a
}
