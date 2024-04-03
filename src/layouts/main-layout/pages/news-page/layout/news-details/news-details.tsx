import { PageContent } from 'src/components/page-content/page-content'
import { Helmet } from 'react-helmet-async'

export const NewsDetails = () => {
	return (
		<PageContent $padding='30px 50px 250px 30px'>
			<Helmet>
				<title>Одна новость</title>
			</Helmet>

			<h2>Одна новость</h2>
		</PageContent>
	)
}
