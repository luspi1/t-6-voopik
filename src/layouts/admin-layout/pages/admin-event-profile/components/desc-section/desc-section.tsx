import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { PromptInput } from 'src/layouts/admin-layout/components/prompt-input/prompt-input'

import cnBind from 'classnames/bind'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

export const DescSection = () => {
	const cx = cnBind.bind(adminStyles)

	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Краткое описание или слоган события.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='shortDesc'
					label='Краткое описание *'
					placeholder='Краткое описание события'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Подробное описание события в нескольких фразах или даже абзацах. Не сокращайте слова: килобайтов хватит на всех!'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='fullDesc'
					label='Подробное описание *'
					placeholder='Подробное описание события'
					margin='0'
					isTextarea
				/>
			</PromptInput>
			<PromptInput promptContent='Это общая информация. Например, можно указать, что вход с собаками запрещен, или, наоборот, что можно приехать всей семьей или только взрослым.'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='eventConditions'
					label='Условия участия *'
					placeholder='Условия участия в событии'
					margin='0'
					isTextarea
				/>
			</PromptInput>
			<PromptInput
				promptContent='Мы специально разделили возрастной рейтинг. На странице события будет указан первый из них.'
				$margin='0'
			>
				<div className={adminStyles.adminInputsRowWrapper}>
					<h6>Возрастной рейтинг *</h6>
					<GridRow>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='visitingAge'
							selectOptions={[
								{ label: 'посещение, с 16 лет', value: '1' },
								{ label: 'посещение, с 18 лет', value: '2' },
								{ label: 'без ограничение по возрасту', value: '3' },
							]}
							margin='0'
						/>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='participationAge'
							selectOptions={[
								{ label: 'участие, с 16 лет', value: '1' },
								{ label: 'участие, с 18 лет', value: '2' },
								{ label: 'без ограничение по возрасту', value: '3' },
							]}
							margin='0'
						/>
					</GridRow>
				</div>
			</PromptInput>
		</AdminSection>
	)
}
