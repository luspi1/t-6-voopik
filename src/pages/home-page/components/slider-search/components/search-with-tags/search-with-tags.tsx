import { type FC } from 'react'
import { type SearchWithTagInputs } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'
import { MainButton } from 'src/UI/MainButton/MainButton'
export const SearchWithTags: FC = () => {
	const methods = useForm<SearchWithTagInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<SearchWithTagInputs> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.searchWrapper}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<ControlledInput name='search' placeholder='Я хочу найти...' required />
					<MainButton className={styles.searchBtn} as='button' type='submit'>
						найти
					</MainButton>
				</form>
			</FormProvider>
		</div>
	)
}
