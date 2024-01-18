import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'
import { PageContent } from 'src/components/page-content/page-content'

import {
	departmentTableData,
	departmentTableTitle,
	Tatarstan,
	SaintPetersburg,
	MoscowRegion,
} from './consts'

import styles from './index.module.scss'

export const DepartmentsList: FC = () => {
	return (
		<PageContent className={styles.departmentListPage} $padding='30px 50px 250px 30px'>
			<Helmet>
				<title>Региональные отделения</title>
			</Helmet>

			<h2>Региональные отделения</h2>

			<p className={styles.departmentListText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<a href='#'>Подробнее об отделениях</a>

			<CustomTable
				className={styles.departmentTable}
				cellsData={departmentTableData}
				colTitles={departmentTableTitle}
				additionalElements={[
					{
						col: 2,
						el: [
							<img key='1' alt='' src={Tatarstan} />,
							<img key='2' alt='' src={SaintPetersburg} />,
							<img key='3' alt='' src={MoscowRegion} />,
						],
					},

					{
						col: 3,
						el: [
							<a key='1' href='#'>
								Татарстан, республика
							</a>,
							<a key='2' href='#'>
								Санкт-Петербург
							</a>,
							<a key='3' href='#'>
								Московская область
							</a>,
						],
					},
				]}
			/>

			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
