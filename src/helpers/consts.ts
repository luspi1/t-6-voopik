export enum ReducerPath {
	Regions = 'regions/api',
	Users = 'users/api',
	Objects = 'objects/api',
	Projects = 'projects/api',
	News = 'news/api',
}

export const ImagesFormat = ['png', 'jpeg', 'jpg', 'webp', 'gif']
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

// для виртуальной машины
// export const BASE_URL = 'http://37.235.172.205:40011/api/v1'
