// форматирует дату к формату - 24 марта 1999 г.
export const formatDate1 = (date: string) => {
	const formatDate = new Date(date)
	return new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(formatDate)
}

// функция отфильтровывает числа из пути
export const filterNumbersWithPathname = (pathname: string) => {
	return pathname
		.split('/')
		.filter((el) => !(parseInt(el) >= 0 || parseInt(el) <= 0))
		.join('/')
}
