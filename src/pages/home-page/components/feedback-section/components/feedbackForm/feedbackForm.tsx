import React, { type FC } from 'react'
import { type FeedbackInputs } from 'src/pages/home-page/components/feedback-section/components/feedbackForm/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { MainButton } from 'src/UI/MainButton/MainButton'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'

export const FeedbackForm: FC = () => {
	const methods = useForm<FeedbackInputs>({
		mode: 'onBlur',
	})
	const onSubmit: SubmitHandler<FeedbackInputs> = (data) => {
		console.log(data)
	}
	return (
		<FormProvider {...methods}>
			<form className={styles.feedbackForm} onSubmit={methods.handleSubmit(onSubmit)}>
				<ControlledInput name='name' placeholder='имя' required />
				<MainButton className={styles.searchBtn} as='button' type='submit'>
					Отправить
				</MainButton>
			</form>
		</FormProvider>
	)
}
