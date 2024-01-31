import { type ReactNode } from 'react'
import { type LinkItem, type RelatedLink } from 'src/types/global'
import { type ShortDocument } from 'src/types/document'

import { Link } from 'react-router-dom'

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
