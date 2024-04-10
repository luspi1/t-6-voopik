import cn from 'classnames'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { useFormContext } from 'react-hook-form'

import { CustomText } from 'src/components/custom-text/custom-text'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const RegVisitor = () => {
	const { watch } = useFormContext()

	const setDependentField = (name: string) => {
		return !watch(name)
	}

	return (
		<AdminSection
			titleText='Регистрация посетителей'
			sectionName='regVisitorSection'
			switcherText='Открыть регистрацию посетителей'
		>
			<GridRow $template='1fr/1fr 1fr' $margin='0 0 24px 0'>
				<div>
					<div>
						<CustomText $margin='0 0 5px 0' $fontWeight='600'>
							Открытие регистрации *
						</CustomText>
						<GridRow $template='auto/204px 204px' $margin='0 0 10px 0'>
							<ControlledDateInput
								className={adminStyles.adminDateInput}
								name='regVisitorDateOpen'
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name='regVisitorTimeOpen'
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
								margin='0'
							/>
						</GridRow>
					</div>
					<div>
						<CustomText $margin='0 0 5px 0' $fontWeight='600'>
							Закрытие регистрации *
						</CustomText>
						<GridRow $template='auto/204px 204px'>
							<ControlledDateInput
								className={adminStyles.adminDateInput}
								name='regVisitorDateClose'
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name='regVisitorTimeClose'
								placeholder='чч.мм'
								dateFormat='HH:mm'
								showTimeSelectOnly
								showTimeSelect
								margin='0'
							/>
						</GridRow>
					</div>
				</div>
				<div>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='autoAdmitVisitors'
						label='Автоматически допускать посетителей'
						margin='23px 0 10px 0'
						type='checkbox'
					/>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='publicVisitorsList'
						label='Публичный список посетителей'
						type='checkbox'
					/>
				</div>
			</GridRow>

			<div className={styles.regVisitorSettings}>
				<h5>Настройки формы регистрации посетителей</h5>
				<div className={styles.settingsLists}>
					<ul>
						<li>
							<p className={styles.settingsFieldsTitle}>Поле «Фамилия»</p>
							<div className={styles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regVisitorFieldSurname'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={cn(adminStyles.adminCheckbox, {
										[styles.disabledField]: setDependentField('regVisitorFieldSurname'),
									})}
									name='isRequiredSurnameField'
									label='Обязательное поле'
									type='checkbox'
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</AdminSection>
	)
}
