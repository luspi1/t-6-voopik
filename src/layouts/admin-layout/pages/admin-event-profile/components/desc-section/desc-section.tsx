import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { PromptInput } from 'src/layouts/admin-layout/components/prompt-input/prompt-input'

import cnBind from 'classnames/bind'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const DescSection = () => {
	const cx = cnBind.bind(adminStyles)

	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptText='Краткое описание или слоган события.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='shortDesc'
					label='Краткое описание *'
					placeholder='Краткое описание события'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptText='Подробное описание события в нескольких фразах или даже абзацах. Не сокращайте слова: килобайтов хватит на всех!'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='fullDesc'
					label='Подробное описание *'
					placeholder='Подробное описание события'
					margin='0'
					isTextarea
				/>
			</PromptInput>
			<PromptInput promptText='Это общая информация. Например, можно указать, что вход с собаками запрещен, или, наоборот, что можно приехать всей семьей или только взрослым.'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='eventConditions'
					label='Условия участия *'
					placeholder='Условия участия в событии'
					margin='0'
					isTextarea
				/>
			</PromptInput>
		</AdminSection>
	)
}
