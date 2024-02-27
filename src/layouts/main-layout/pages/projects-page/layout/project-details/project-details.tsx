import { type FC } from 'react'
import { type LinkItem } from 'src/types/global'
import { type ProjectLink } from 'src/types/projects'

import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { useGetProjectByIdQuery } from 'src/store/projects/projects.api'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { InfoIconSvg } from 'src/UI/icons/infoIconSVG'
import { LinksList } from 'src/components/links-list/links-list'

import { formatDocumentLinks, formatRelatedLinks } from 'src/helpers/utils'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
export const ProjectDetails: FC = () => {
	const { id } = useParams()
	const { data: projectData } = useGetProjectByIdQuery(id ?? '')

	const formatProjectsLinks = (data: ProjectLink[] | undefined): LinkItem[] | undefined => {
		if (!data) return undefined
		return data.map((regItem) => ({
			id: regItem.id,
			link: regItem.link,
			titleLink: regItem.title,
			label: [regItem.date, regItem.source],
		}))
	}

	useAdditionalCrumbs(projectData?.title)
	return (
		<PageContent className={styles.projectDetailsPage} $padding='30px 35px 45px 30px'>
			<Helmet>
				<title>{projectData?.title ?? 'Один проект'}</title>
			</Helmet>
			<section>
				<h2>{projectData?.title}</h2>
				<span className={styles.projectStatus}>{projectData?.type}</span>
			</section>
			<section>
				<InfoRow
					wrapperClassname={styles.projectStatusRow}
					title='Статус Проекта:'
					margin='0 0 35px 0'
					label={[
						projectData?.status,
						<a href='#' key={1}>
							<InfoIconSvg />
							Статусы проектов
						</a>,
					]}
				/>

				<InfoRow
					wrapperClassname={styles.relatedRow}
					title='Связь с Объектами:'
					label={formatRelatedLinks(projectData?.relatedObjects, 'objects')}
				/>
				<InfoRow
					wrapperClassname={styles.relatedRow}
					title='Связь с Проектами:'
					label={formatRelatedLinks(projectData?.relatedProjects, 'projects')}
				/>
			</section>
			<section className={styles.descsSection}>
				{projectData?.descs?.map((desc, idx) => <p key={idx}>{desc}</p>)}
			</section>

			<section>
				<h4>Фотографии Проекта ({projectData?.photos?.length})</h4>
				<ul className={styles.projectGallery}>
					{projectData?.photos?.map((el) => (
						<li key={el.id}>
							<img src={el.url} alt={el.title} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<LinksList
					dataList={formatDocumentLinks(projectData?.documents)}
					title='Документы проекта'
				/>
			</section>
			<section>
				<LinksList
					dataList={formatProjectsLinks(projectData?.relatedLinks)}
					title='Массив ссылок'
				/>
			</section>
			<Link className={styles.projectListLink} to={`/${AppRoute.Projects}`}>
				На страницу списка Проектов
			</Link>
		</PageContent>
	)
}
