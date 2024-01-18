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
	Objects = 'objects',
	Projects = 'projects',
	Participation = 'participation',
	Library = 'library',
	Events = 'events',
	Shop = 'shop',
}
export enum ReducerPath {
	Regions = 'regions/api',
}

export enum DisplayBreakpoints {
	Sm = 576,
	Md = 768,
	Lg = 1024,
	Xl = 1280,
	Xxl = 1440,
}

export const BASE_URL = 'http://localhost:4001/api/v1'
