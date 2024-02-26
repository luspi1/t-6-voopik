import { type NavigationItem } from 'src/types/navigation'
import { AdminNewsIconSvg } from 'src/UI/icons/adminNewsIconSVG'
import { AdminDepartmentsIconSvg } from 'src/UI/icons/adminDepartmentsIconSVG'
import { AdminSupportIconSvg } from 'src/UI/icons/adminSupportIconSVG'
import { AdminCommunityIconSvg } from 'src/UI/icons/adminCommunityIconSVG'

export const adminMenuItems: NavigationItem[] = [
	{
		title: 'Новости',
		icon: <AdminNewsIconSvg />,
		link: 'admin-news',
		childItems: [
			{
				title: 'Список новостей',
				link: 'news-list',
			},
			{
				title: 'Добавить новость',
				link: 'add-news',
			},
		],
	},
	{
		title: 'Общество',
		icon: <AdminCommunityIconSvg />,
		link: 'admin-community',
		childItems: [
			{
				title: 'Об обществе',
				link: 'community-about',
			},
			{
				title: 'История Общества',
				link: 'community-history',
			},
			{
				title: 'Состав правления',
				link: 'community-composition',
			},
			{
				title: 'Контакты и связь',
				link: 'community-contacts',
			},
			{
				title: 'Документы Общества',
				link: 'community-documents',
			},
			{
				title: 'Медиакит',
				link: 'community-mediakit',
			},
			{
				title: 'Фото и видео',
				link: 'community-photos',
			},
		],
	},
	{
		title: 'Отделения',
		icon: <AdminDepartmentsIconSvg />,
		link: 'admin-departments',
		childItems: [
			{
				title: 'Список Отделений',
				link: 'departments-list',
			},
			{
				title: 'Добавить Отделение',
				link: 'add-departments',
			},
		],
	},
	{
		title: 'Поддержка',
		link: 'admin-support',
		icon: <AdminSupportIconSvg />,
	},
]
