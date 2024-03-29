import { type ReactNode } from 'react'
import { type LinkItem, type RelatedLink } from 'src/types/global'
import { type ShortDocument } from 'src/types/document'
import { type SelOption } from 'src/types/select'

import { Link } from 'react-router-dom'

// утилитарная функция для кастомного селекта
export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}

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

// форматирование номера телефона
export const formatPhoneNumber = (number: string) => {
	return number.replace(/[-()\s]/g, '')
}
export const isNullOrEmpty = (value: ReactNode | ReactNode[]): boolean => {
	if (value == null) {
		return true
	}

	if (typeof value === 'string' && value.trim() === '') {
		return true
	}

	return Array.isArray(value) && value.length === 0
}

// Форматирование ссылок-связей
export const formatRelatedLinks = (data: RelatedLink[] | undefined, link: string) => {
	if (!data) return
	return data.map((linkEl) => (
		<Link to={`/${link}/${linkEl.id}`} key={linkEl.id}>
			{linkEl.title}
		</Link>
	))
}

// Форматирование ссылок на документы
export const formatDocumentLinks = (data: ShortDocument[] | undefined): LinkItem[] | undefined => {
	if (!data) return undefined
	return data.map((docItem) => ({
		id: docItem.id,
		link: docItem.link,
		titleLink: docItem.title,
		type: docItem.type,
		label: [`${docItem.type}-файл`, docItem.size],
	}))
}

// Функция передачи кастомного класса для NavLink

export const setActive = (isActive: boolean, styles: string) => (isActive ? styles : '')

// Функция определения формата файла, принимает имя файла

export const defineFileFormat = (fileName: string) => {
	const formatFileArr = fileName.split('.')
	if (formatFileArr.length < 2) return ''
	return formatFileArr[formatFileArr.length - 1]
}

// перевод численных значений в буквенные

export const numberToWord = (num: number) => {
	const numbersMap: Record<number, string> = {
		1: 'Первая',
		2: 'Вторая',
		3: 'Третья',
		4: 'Четвертая',
		5: 'Пятая',
		6: 'Шестая',
		7: 'Седьмая',
		8: 'Восьмая',
		9: 'Девятая',
		10: 'Десятая',
	}

	return numbersMap[num] ?? num
}
