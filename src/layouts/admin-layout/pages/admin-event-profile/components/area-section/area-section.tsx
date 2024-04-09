import { PromptInput } from 'src/layouts/admin-layout/components/prompt-input/prompt-input'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const AreaSection = () => {
	return (
		<AdminSection
			className={styles.areaSection}
			contentBg='none'
			contentPadding='0'
			contentBorder='none'
		>
			<PromptInput
				promptContent='Дворец спорта, концертный зал, открытая площадка — место, на или в котором будет проводиться событие.'
				$margin='0'
			>
				<div className={adminStyles.adminInputsRowWrapper}>
					<h6>Площадка *</h6>
					<GridRow>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='areaList'
							selectOptions={[
								{ label: 'выбрать из списка', value: '0' },
								{ label: 'площадка 1', value: '1' },
								{ label: 'площадка 2', value: '2' },
							]}
							margin='0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='areaName'
							placeholder='начните вводить название'
							margin='0'
						/>
					</GridRow>
				</div>
			</PromptInput>
		</AdminSection>
	)
}
