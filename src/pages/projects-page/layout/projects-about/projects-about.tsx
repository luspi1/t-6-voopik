import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'

export const ProjectsAbout: FC = () => {
	return (
		<PageContent>
			<Helmet>
				<title>О проектах ВООПИК</title>
			</Helmet>
			<h2>О проектах ВООПИК</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
		</PageContent>
	)
}
