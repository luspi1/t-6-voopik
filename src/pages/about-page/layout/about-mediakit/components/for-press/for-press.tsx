import { type FC } from 'react'

import { MediakitList } from '../mediakit-list/mediakit-list'
import { forPressData } from './consts'

export const ForPress: FC = () => {
	return <MediakitList listTitle='Для прессы' data={forPressData} />
}
