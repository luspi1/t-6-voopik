import { type FC } from 'react'

import { MediakitItem } from '../mediakit-item/mediakit-item'
import { brandbookData } from './consts'

export const Brandbook: FC = () => {
	return <MediakitItem data={brandbookData} />
}
