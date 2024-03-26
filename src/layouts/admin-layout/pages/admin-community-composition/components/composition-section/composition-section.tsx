import { type FC } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'
import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { type CompositionInputs } from 'src/layouts/admin-layout/pages/admin-community-composition/schema'
import { numberToWord } from 'src/helpers/utils'

type CompositionSectionProps = {
	compositionTitle: string
	compositionSubtitle: string
	fieldName: string
}
export const CompositionSection: FC<CompositionSectionProps> = ({
	compositionTitle,
	compositionSubtitle,
	fieldName,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext<CompositionInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: fieldName,
	})

	return (
		<AdminSection
			className={styles.compositionSection}
			titleText={compositionTitle}
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<h3>{compositionSubtitle}</h3>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.compositionItem} key={field.id}>
						<button
							className={styles.compositionRemoveBtn}
							type='button'
							onClick={() => remove(idx)}
						>
							<RemoveBlockSvg />
						</button>
						<h4>{numberToWord(idx + 1)} персона</h4>
						<ReactDropzone
							className={styles.compositionDropzone}
							label='Фотография'
							name={`${fieldName}.${idx}.compositionPhoto`}
							prompt='Перетащите изображение на это поле'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`${fieldName}.${idx}.compositionFullname`}
							dynamicError={errors[fieldName]?.[idx]?.compositionFullname}
							label='ФИО персоны'
							placeholder='Фамилия, имя, отчество полностью'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`${fieldName}.${idx}.compositionPosition`}
							dynamicError={errors[fieldName]?.[idx]?.compositionPosition}
							label='Должность'
							placeholder='Должность'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`${fieldName}.${idx}.compositionLink`}
							dynamicError={errors[fieldName]?.[idx]?.compositionLink}
							label='Ссылка на персональную страницу'
							placeholder='www...'
							margin='0 0 10px 0'
						/>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() =>
					append(
						{
							compositionPhoto: [],
							compositionFullname: '',
							compositionPosition: '',
							compositionLink: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить персону
			</AdminButton>
		</AdminSection>
	)
}
