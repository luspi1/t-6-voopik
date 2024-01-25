import { type NavigationItem } from 'src/types/navigation'

export const DepartmentsMenuItems: NavigationItem[] = [
	{
		title: 'Региональные отделения',
		link: '/departments-list',
	},
	{
		title: 'Подробнее об отделениях',
		link: 'departments-about',
	},
]

export const OneDepartmentMenu: NavigationItem[] = [
	{
		title: 'Информация',
		link: '/1',
	},

	{
		title: 'Группы',
		link: '/2',
	},

	{
		title: 'Участники',
		link: '/3',
	},

	{
		title: 'События',
		link: '/4',
	},

	{
		title: 'Объекты',
		link: '/5',
	},

	{
		title: 'Проекты',
		link: '/6',
	},

	{
		title: 'Галерея',
		link: '/7',
	},
]
