import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { AppRoute } from 'src/routes/main-routes/consts'

import foundersImage from 'src/assets/img/history-founders.jpg'

import styles from './index.module.scss'

export const DepartmentsAbout: FC = () => {
	return (
		<PageContent className={styles.aboutDepartmentContainer} $padding='30px 55px 25px 30px'>
			<Helmet>
				<title>О региональных отделениях ВООПИК</title>
			</Helmet>

			<h2>О региональных отделениях ВООПИК</h2>
			<Link to={`/${AppRoute.Departments}`}>На страницу списка отделений</Link>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient mont.
			</p>

			<figure className={styles.image}>
				<img src={foundersImage} alt='Основатели ВООПИиК' />
				<figcaption>Подпись под фото</figcaption>
			</figure>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
				justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis
				parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
				felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
				amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,
				nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc
				accuan eget.
			</p>

			<Link to={`/${AppRoute.Departments}`}>На страницу списка отделений</Link>
		</PageContent>
	)
}
