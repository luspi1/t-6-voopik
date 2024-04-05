import { type NavigationItem } from 'src/types/navigation'
import { AdminNewsIconSvg } from 'src/UI/icons/adminNewsIconSVG'
import { AdminDepartmentsIconSvg } from 'src/UI/icons/adminDepartmentsIconSVG'
import { AdminSupportIconSvg } from 'src/UI/icons/adminSupportIconSVG'
import { AdminCommunityIconSvg } from 'src/UI/icons/adminCommunityIconSVG'
import { AdminParticipantsIconSvg } from 'src/UI/icons/adminParticipantsIconSVG'
import { AdminObjectsIconSvg } from 'src/UI/icons/adminObjectsIconSVG'
import { AdminProjectsIconSvg } from 'src/UI/icons/adminProjectsIconSVG'
import { AdminEventsIconSvg } from 'src/UI/icons/adminEventsIconSVG'
import { AdminLibraryIconSvg } from 'src/UI/icons/adminLibraryIconSVG'
import { AdminShopIconSvg } from 'src/UI/icons/adminShopIconSVG'
import { AdminSettingsIconSvg } from 'src/UI/icons/adminSettingsIconSVG'

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
		title: 'Участники',
		icon: <AdminParticipantsIconSvg />,
		link: 'admin-participants',
		childItems: [
			{
				title: 'Список Участников',
				link: 'participants-list',
			},
			{
				title: 'Добавить Участника',
				link: 'add-participant',
			},
		],
	},
	{
		title: 'Объекты',
		icon: <AdminObjectsIconSvg />,
		link: 'admin-objects',
		childItems: [
			{
				title: 'Список Объектов',
				link: 'objects-list',
			},
			{
				title: 'Создать Объект',
				link: 'add-object',
			},
		],
	},
	{
		title: 'Проекты',
		icon: <AdminProjectsIconSvg />,
		link: 'admin-projects',
		childItems: [
			{
				title: 'Список Проектов',
				link: 'projects-list',
			},
			{
				title: 'Создать Проект',
				link: 'add-project',
			},
		],
	},
	{
		title: 'События',
		icon: <AdminEventsIconSvg />,
		link: 'admin-events',
		childItems: [
			{
				title: 'Профиль события',
				link: 'event-profile',
			},
			{
				title: 'Регистрация',
				link: 'event-reg',
			},
			{
				title: 'Билеты и допуски',
				link: 'event-tickets',
			},
			{
				title: 'Контент',
				link: 'event-content',
			},
			{
				title: 'Локации',
				link: 'event-locations',
			},
			{
				title: 'Расписание',
				link: 'event-timetable',
			},
			{
				title: 'Списки',
				link: 'event-lists',
			},
		],
	},
	{
		title: 'Библиотека',
		icon: <AdminLibraryIconSvg />,
		link: 'admin-library',
		childItems: [
			{
				title: 'Список Материалов',
				link: 'materials-list',
			},
			{
				title: 'Добавить Материал',
				link: 'add-material',
			},
		],
	},
	{
		title: 'Магазин',
		icon: <AdminShopIconSvg />,
		link: 'admin-shop',
		childItems: [
			{
				title: 'Список товаров',
				link: 'product-list',
			},
			{
				title: 'Продажи',
				link: 'sales',
			},
		],
	},
	{
		title: 'Поддержка',
		link: 'support',
		icon: <AdminSupportIconSvg />,
	},
	{
		title: 'Настройка Системы',
		icon: <AdminSettingsIconSvg />,
		link: 'admin-settings',
		childItems: [
			{
				title: 'Главная страница',
				link: 'settings-home',
			},
			{
				title: 'Обратная связь',
				link: 'settings-feedback',
			},
			{
				title: 'Пользователи',
				link: 'settings-users',
			},
			{
				title: 'Структура страниц',
				link: 'settings-structure',
			},
			{
				title: 'Встраиваемые блоки',
				link: 'settings-blocks',
			},
		],
	},
]
