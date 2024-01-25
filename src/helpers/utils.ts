import { type ReactNode } from 'react'

// форматирует дату к формату - 24.03.1999

export const formatDate1 = (date?: string) => {
	if (!date) return

	const formatDate = new Date(date)
	return new Intl.DateTimeFormat('ru-RU', {
		dateStyle: 'short',
	}).format(formatDate)
}

// форматирует дату к формату - 24 марта 1999 г.
export const formatDate2 = (date: string) => {
	const formatDate = new Date(date)
	return new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(formatDate)
}

// форматирует дату к формату - 17 октября 1981 г.
export const formatDate3 = (date?: string) => {
	if (!date) return

	const formatDate = new Date(date)
	return new Intl.DateTimeFormat('ru-RU', {
		dateStyle: 'long',
	}).format(formatDate)
}

// функция отфильтровывает числа из пути
export const filterNumbersWithPathname = (pathname: string) => {
	return pathname
		.split('/')
		.filter((el) => !(parseInt(el) >= 0 || parseInt(el) <= 0))
		.join('/')
}

// форматирование номера телефона
export const formatPhoneNumber = (number: string) => {
	return number.replace(/[-()\s]/g, '')

export const isNullOrEmpty = (value: ReactNode | ReactNode[]): boolean => {
	if (value == null) {
		return true
	}

	if (typeof value === 'string' && value.trim() === '') {
		return true
	}

	if (Array.isArray(value) && value.length === 0) {
		return true
	}

	return false

}
