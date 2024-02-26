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
	DepartmentsDetailsInfo = 'departments-details-info',
	DepartmentsDetailsGroups = 'departments-details-groups',
	DepartmentsDetailsParticipant = 'departments-details-participants',
	DepartmentsDetailsEvents = 'departments-details-events',
	DepartmentsDetailsObjects = 'departments-details-objects',
	DepartmentsDetailsProjects = 'departments-details-projects',
	DepartmentsDetailsGallery = 'departments-details-gallery',
	Users = 'users-list',
	UserInfo = 'user-info',
	UserGroups = 'user-groups',
	UserEvents = 'user-events',
	UserProjects = 'user-projects',
	UserObjects = 'user-objects',
	UserGallery = 'user-gallery',
	Objects = 'objects',
	ObjectsAbout = 'objects-about',
	Projects = 'projects',
	ProjectsAbout = 'projects-about',
	Library = 'library',
	Events = 'events',
	Shop = 'shop',
}
export enum AdminRoute {
	AdminHome = 'admin',
	AdminNewsList = 'news-list',
	AdminAddNews = 'add-news',
	AdminCommunityAbout = 'community-about',
	AdminCommunityHistory = 'community-history',
	AdminCommunityComposition = 'community-composition',
	AdminCommunityContacts = 'community-contacts',
	AdminCommunityDocuments = 'community-documents',
	AdminCommunityMediakit = 'community-mediakit',
	AdminCommunityPhotos = 'community-photos',
	AdminDepartmentsList = 'departments-list',
	AdminAddDepartments = 'add-departments',
}
export enum ReducerPath {
	Regions = 'regions/api',
	Users = 'users/api',
	Objects = 'objects/api',
	Projects = 'projects/api',
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

export const BASE_URL = 'http://localhost:4020/api/v1'

// export const BASE_URL = 'http://37.235.172.205:40011/api/v1'
