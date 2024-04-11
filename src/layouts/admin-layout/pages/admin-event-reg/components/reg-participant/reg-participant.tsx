import { type EventRegInputs } from 'src/layouts/admin-layout/pages/admin-event-reg/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import cn from 'classnames'

import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { CustomText } from 'src/components/custom-text/custom-text'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import regStyles from 'src/layouts/admin-layout/pages/admin-event-reg/index.module.scss'
import styles from './index.module.scss'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
export const RegParticipant = () => {
	const {
		watch,
		control,
		formState: { errors },
	} = useFormContext<EventRegInputs>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'participantSides',
	})
	return (
		<AdminSection
			titleText='Регистрация участников'
			sectionName='regParticipantSection'
			switcherText='Открыть регистрацию участников'
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
								name='regParticipantDateOpen'
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name='regParticipantTimeOpen'
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
								name='regParticipantDateClose'
								dateFormat='dd.MM.yyyy'
								placeholder='дд.мм.гггг'
								margin='0'
							/>
							<ControlledDateInput
								className={adminStyles.adminTimeInput}
								name='regParticipantTimeClose'
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
						name='autoAdmitParticipants'
						label='Автоматически допускать участников'
						margin='23px 0 10px 0'
						type='checkbox'
					/>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='publicParticipantsList'
						label='Публичный список участников'
						type='checkbox'
					/>
				</div>
			</GridRow>
			<div className={styles.participantSides}>
				<ControlledCheckbox
					className={cn(adminStyles.adminCheckbox, styles.participantSidesCheckbox)}
					name='isParticipantSides'
					type='checkbox'
					label='Несколько сторон участников'
				/>

				<ul className={styles.participantDynamicList}>
					{fields?.map((field, idx) => (
						<li key={field.id}>
							<CustomText $margin='0 0 5px 0'>Название стороны</CustomText>
							<GridRow $template='1fr/0.4fr 0.3fr 0.2fr'>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name={`participantSides.${idx}.sideName`}
									dynamicError={errors?.participantSides?.[idx]?.sideName}
									placeholder='ввести название'
									margin='0'
								/>
								<ControlledSelect
									className={adminStyles.adminSelect}
									name={`participantSides.${idx}.sideColor`}
									selectOptions={[
										{ label: 'выбрать цвет', value: '0' },
										{ label: 'Розово-эбонитовый', value: '1' },
										{ label: 'Умеренный серо-коричневый', value: '2' },
										{ label: 'Сигнальный фиолетовый', value: '3' },
										{ label: 'Темно-серая мальва', value: '4' },
										{ label: 'Бобровый', value: '5' },
										{ label: 'Галечный серый', value: '6' },
									]}
									margin='0'
								/>
								{idx > 1 && (
									<button
										className={styles.removeSideBtn}
										type='button'
										onClick={() => remove(idx)}
									>
										Удалить
									</button>
								)}
							</GridRow>
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
								sideName: '',
								sideColor: '0',
							},
							{ shouldFocus: false },
						)
					}
				>
					Добавить еще одну сторону
				</AdminButton>
			</div>
			<div className={regStyles.regSettings}>
				<h5>Настройки формы регистрации участников</h5>
				<div className={regStyles.settingsLists}>
					<ul>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Фамилия»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldSurname'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredSurnameFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldSurname')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Имя»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldName'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredNameFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldName')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Отчество»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldPatronymic'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredPatronymicFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldPatronymic')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Позывной или прозвище»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldAlias'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredAliasFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldAlias')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Город или регион»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldPlace'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredPlaceFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldPlace')}
								/>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «Номер телефона»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldPhone'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredPhoneFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldPhone')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Поле «E-mail»</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldEmail'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredEmailFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldEmail')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Выбор типа допуска или билета</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldTicket'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredTicketFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldTicket')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Выбор типа посетителя</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldType'
									label='Активное поле'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredTypeFieldParticipant'
									label='Обязательное поле'
									type='checkbox'
									disabled={!watch('regParticipantFieldType')}
								/>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Регистрация групп</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldGroup'
									label='Разрешить'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredGroupFieldParticipant'
									label='Обязательно'
									type='checkbox'
									disabled={!watch('regParticipantFieldGroup')}
								/>
							</div>
						</li>
						<li>
							<p className={regStyles.settingsFieldsTitle}>Регистрация транспортных средств</p>
							<div className={regStyles.settingsFieldsRow}>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='regParticipantFieldTransport'
									label='Разрешить'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name='isRequiredTransportFieldParticipant'
									label='Обязательно'
									type='checkbox'
									disabled={!watch('regParticipantFieldTransport')}
								/>
							</div>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='brandTransportFieldParticipant'
								label='Марка (ВАЗ, Skoda, KIA...)'
								type='checkbox'
								disabled={!watch('regParticipantFieldTransport')}
								margin='10px 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='modelTransportFieldParticipant'
								label='Модель (21083, Rapid, K5...)'
								type='checkbox'
								disabled={!watch('regParticipantFieldTransport')}
								margin='0 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='numberTransportFieldParticipant'
								label='Госномер (вместе с регионом)'
								type='checkbox'
								disabled={!watch('regParticipantFieldTransport')}
								margin='0 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='colorTransportFieldParticipant'
								label='Цвет автомобиля'
								type='checkbox'
								disabled={!watch('regParticipantFieldTransport')}
								margin='0 0 12px 0'
							/>
							<ControlledCheckbox
								className={adminStyles.adminCheckbox}
								name='typeTransportFieldParticipant'
								label='Тип Т/С (легковая, автобус...)'
								type='checkbox'
								disabled={!watch('regParticipantFieldTransport')}
								margin='0'
							/>
						</li>
					</ul>
				</div>
			</div>
		</AdminSection>
	)
}
