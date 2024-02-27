import React, { type FC } from 'react'
import { type SearchWithTagInputs } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { TagsList } from 'src/layouts/main-layout/pages/home-page/components/slider-search/components/search-with-tags/consts'
import { Container } from 'src/UI/Container/Container'
export const SearchWithTags: FC = () => {
	const methods = useForm<SearchWithTagInputs>({
		mode: 'onBlur',
	})

	const setTagOnSearch = (e: React.MouseEvent<HTMLLIElement>) => {
		methods.setValue('search', e.currentTarget.textContent ?? '')
	}

	const onSubmit: SubmitHandler<SearchWithTagInputs> = (data) => {
		console.log(data)
	}

	return (
		<Container>
			<div className={styles.searchWrapper}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<ControlledInput
							className={styles.searchInput}
							name='search'
							placeholder='Я хочу найти...'
							required
						/>
						<MainButton className={styles.searchBtn} as='button' type='submit'>
							найти
						</MainButton>
					</form>
				</FormProvider>
			</div>
			<ul className={styles.tagsList}>
				{TagsList?.map((tag) => (
					<li key={tag} onClick={setTagOnSearch}>
						{tag}
					</li>
				))}
			</ul>
		</Container>
	)
}
