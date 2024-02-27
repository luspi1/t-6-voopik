import { type NavigationItem } from 'src/types/navigation'
import { type ShortDocument } from 'src/types/document'

export const AboutMenuItems: NavigationItem[] = [
	{
		title: 'История Общества',
		link: 'about-history',
	},
	{
		title: 'Состав Правления',
		link: 'about-direction',
	},
	{
		title: 'Контакты и связь',
		link: 'about-contacts',
	},
	{
		title: 'Документы Общества',
		link: 'about-documents',
	},
	{
		title: 'Медиакит',
		link: 'about-mediakit',
	},
]

export const aboutPageDocuments: ShortDocument[] = [
	{
		id: '0',
		title:
			'Пенза. Памятник деревянной архитектуры, в котором располагается областное отделение ВООПИиК',
		type: 'doc',
		size: '68.5',
		link: '#',
	},

	{
		id: '1',
		title: 'Архангельский музей деревянного зодчества «Малые Корелы»',
		type: 'doc',
		size: '68.5',
		link: '#',
	},

	{
		id: '2',
		title:
			'Государственный Бородинский военно-исторический музей-заповедник. Спасо-Бородинский монастырь',
		type: 'doc',
		size: '68.5',
		link: '#',
	},

	{
		id: '3',
		title:
			'Ансамбль Крутицкого подворья XY-XYII веков. Реставрационные работы проводились под руководством П.Д.Барановского. В Успенском Соборе находились реставрационные мастерские ВООПИиК',
		type: 'doc',
		size: '68.5',
		link: '#',
	},
]
