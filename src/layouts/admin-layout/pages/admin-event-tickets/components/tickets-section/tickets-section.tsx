import { type FC } from 'react'
import { type EventTicketsInputs } from 'src/layouts/admin-layout/pages/admin-event-tickets/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import cn from 'classnames'

import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import { GridRow } from 'src/components/grid-row/grid-row'
import { FlexRow } from 'src/components/flex-row/flex-row'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'
export const TicketsSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<EventTicketsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'tickets',
	})
	return (
		<AdminSection
			titleText='Билетная и пропускная система'
			sectionName='ticketsSection'
			switcherText='Включить'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<ul>
				{fields?.map((field, idx) => (
					<li className={adminStyles.adminBlockItem} key={field.id}>
						{idx !== 0 && (
							<button
								className={adminStyles.adminRemoveBlockBtn}
								type='button'
								onClick={() => remove(idx)}
							>
								<RemoveBlockSvg />
							</button>
						)}

						<h4>Билет {idx + 1}</h4>
						<div className={adminStyles.adminBlockSection}>
							<GridRow
								$template='auto/repeat(auto-fit, minmax(200px, 420px))'
								$gap='20px'
								$margin='0 0 20px 0'
							>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name={`tickets.${idx}.title`}
									dynamicError={errors.tickets?.[idx]?.title}
									label='Название билета *'
									placeholder='Название'
									margin='0'
								/>
								<ControlledInput
									className={cn(adminStyles.adminMainInput, styles.ticketSmInput)}
									name={`tickets.${idx}.quantity`}
									dynamicError={errors.tickets?.[idx]?.quantity}
									label='Билетов, не более'
									mask='99999999999999'
									maskPlaceholder=''
									margin='0'
								/>
							</GridRow>
							<FlexRow $margin='0 0 20px 0'>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isPaidTicket`}
									label='Платный билет'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isQuickReg`}
									label='Быстрая регистрация'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isHimselfBuy`}
									label='Самостоятельная покупка'
									type='checkbox'
								/>
								<ControlledCheckbox
									className={adminStyles.adminCheckbox}
									name={`tickets.${idx}.isReturnTicket`}
									label='Возможен возврат билета'
									type='checkbox'
								/>
							</FlexRow>
							<FlexRow $gap='10px'>
								<ControlledInput
									className={cn(adminStyles.adminMainInput, styles.ticketSmInput)}
									name={`tickets.${idx}.priceTicket`}
									dynamicError={errors.tickets?.[idx]?.priceTicket}
									label='Стоимость билета *'
									mask='99999999999999'
									maskPlaceholder=''
									margin='0'
								/>
								<CustomText $padding='30px 0 0 0'>рублей РФ</CustomText>
							</FlexRow>
						</div>
						<div className={adminStyles.adminBlockSection}>
							<CustomText $fontSize='14px' $fontWeight='700' $margin='0 0 20px 0'>
								Доступные локации *
							</CustomText>
						</div>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() => {
					append(
						{
							title: '',
							quantity: '',
							isPaidTicket: false,
							isQuickReg: false,
							isHimselfBuy: false,
							isReturnTicket: false,
							priceTicket: '',
						},
						{ shouldFocus: false },
					)
				}}
			>
				Добавить еще один тип билета
			</AdminButton>
		</AdminSection>
	)
}
