export enum AppRoute {
	Home = '/',
	About = 'about',
	AboutHistory = 'about-history',
	AboutDirection = 'about-direction',
	AboutContacts = 'about-contacts',
	AboutDocuments = 'about-documents',
	AboutMediakit = 'about-mediakit',
	Departments = 'departments-list',
	DepartmentsAbout = 'departments-about',
	DepartmentsDetailsInfo = ':id/departments-details-info',
	Users = 'users-list',
	UserInfo = 'user-info',
	UserGroups = 'user-groups',
	UserEvents = 'user-events',
	UserProjects = 'user-projects',
	UserObjects = 'user-objects',
	UserGallery = 'user-gallery',
	Objects = 'objects',
	Projects = 'projects',
	Library = 'library',
	Events = 'events',
	Shop = 'shop',
}
export enum ReducerPath {
	Regions = 'regions/api',
	Users = 'users/api',
}

export enum NameSpace {
	BreadCrumbs = 'BREAD_CRUMBS',
}

export enum DisplayBreakpoints {
	Sm = 576,
	Md = 768,
	Lg = 1024,
	Xl = 1280,
	Xxl = 1440,
}

export const BASE_URL = 'http://localhost:4001/api/v1'
