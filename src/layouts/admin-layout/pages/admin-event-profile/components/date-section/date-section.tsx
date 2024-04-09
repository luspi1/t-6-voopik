import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { PromptInput } from 'src/layouts/admin-layout/components/prompt-input/prompt-input'

import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { GridRow } from 'src/components/grid-row/grid-row'
import { Link } from 'react-router-dom'
import { AdminRoute } from 'src/routes/admin-routes/consts'

export const DateSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput
				promptContent={
					<span>
						Укажите дату и время начала и окончания события. Рекомендуем также использовать{' '}
						<Link to={`/${AdminRoute.AdminHome}`}>раздел настроек «Расписание»</Link>
					</span>
				}
				$margin='0'
			>
				<div className={adminStyles.adminInputsRowWrapper}>
					<h6>Начало события *</h6>
					<GridRow $template='auto/204px 204px'>
						<ControlledDateInput
							className={adminStyles.adminDateInput}
							name='dateEventStart'
							dateFormat='dd.MM.yyyy'
							placeholder='дд.мм.гггг'
						/>
						<ControlledDateInput
							className={adminStyles.adminTimeInput}
							name='timeEventStart'
							placeholder='чч.мм'
							dateFormat='HH:mm'
							showTimeSelectOnly
							showTimeSelect
						/>
					</GridRow>
				</div>
			</PromptInput>
			<div className={adminStyles.adminInputsRowWrapper}>
				<h6>Окончание события *</h6>
				<GridRow $template='auto/204px 204px'>
					<ControlledDateInput
						className={adminStyles.adminDateInput}
						name='dateEventEnd'
						dateFormat='dd.MM.yyyy'
						placeholder='дд.мм.гггг'
						margin='0'
					/>
					<ControlledDateInput
						className={adminStyles.adminTimeInput}
						name='timeEventEnd'
						placeholder='чч.мм'
						dateFormat='HH:mm'
						showTimeSelectOnly
						showTimeSelect
						margin='0'
					/>
				</GridRow>
			</div>
		</AdminSection>
	)
}
