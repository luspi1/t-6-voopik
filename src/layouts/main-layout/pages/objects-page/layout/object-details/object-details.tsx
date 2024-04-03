import { type FC } from 'react'
import { type LinkItem } from 'src/types/global'
import { type ObjLink } from 'src/types/objects'

import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { formatDocumentLinks, formatRelatedLinks } from 'src/helpers/utils'
import { PageIconSvg } from 'src/UI/icons/pageIconSVG'
import { InfoIconSvg } from 'src/UI/icons/infoIconSVG'
import { ContactsMap } from 'src/components/contacts-map/contacts-map'

import { LinksList } from 'src/components/links-list/links-list'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
export const ObjectDetails: FC = () => {
	const { id } = useParams()
	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	const formatObjectsLinks = (data: ObjLink[] | undefined): LinkItem[] | undefined => {
		if (!data) return undefined
		return data.map((regItem) => ({
			id: regItem.id,
			link: regItem.link,
			titleLink: regItem.title,
			label: [regItem.date, regItem.source],
		}))
	}

	useAdditionalCrumbs(objectData?.title)
	return (
		<PageContent className={styles.objectDetailsPage} $padding='30px 35px 45px 30px'>
			<Helmet>
				<title>{objectData?.title ?? 'Один объект'}</title>
			</Helmet>
			<section>
				<h2>{objectData?.title}</h2>
				<span className={styles.objectCategory}>{objectData?.category}</span>
			</section>
			<section>
				<div className={styles.objectInfoBlock}>
					<div className={styles.objectInfoRows}>
						<InfoRow title='Полный адрес Объекта:' label={objectData?.address} />
						<InfoRow title='Номер в Госреестре:' label={objectData?.registryNumber} />
						<InfoRow title='Вид Объекта:' label={objectData?.kind} />
					</div>
					<div className={styles.objectInfoLinks}>
						<a href='#'>
							<PageIconSvg />
							Страница Объекта в Госреестре
						</a>
						<a href='#'>
							<InfoIconSvg />
							Статусы проектов
						</a>
					</div>
				</div>
				<InfoRow
					wrapperClassname={styles.relatedRow}
					title='Связь с Объектами:'
					label={formatRelatedLinks(objectData?.relatedObjects, 'objects')}
				/>
				<InfoRow
					wrapperClassname={styles.relatedRow}
					title='Связь с Проектами:'
					label={formatRelatedLinks(objectData?.relatedProjects, 'projects')}
				/>
			</section>
			<section className={styles.descsSection}>
				{objectData?.descs?.map((desc, idx) => <p key={idx}>{desc}</p>)}
			</section>
			<section>
				<h4>Объект на карте</h4>
				<ContactsMap className={styles.objectMap} zoom={15} points={objectData?.coords} />
			</section>
			<section>
				<h4>Фотографии Объекта ({objectData?.photos?.length})</h4>
				<ul className={styles.objectsGallery}>
					{objectData?.photos?.map((el) => (
						<li key={el.id}>
							<img src={el.url} alt={el.title} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<LinksList
					dataList={formatDocumentLinks(objectData?.documents)}
					title='Документы объекта'
				/>
			</section>
			<section>
				<LinksList dataList={formatObjectsLinks(objectData?.relatedLinks)} title='Массив ссылок ' />
			</section>
			<Link className={styles.objectListLink} to={`/${AppRoute.Objects}`}>
				На страницу списка Объектов
			</Link>
		</PageContent>
	)
}
