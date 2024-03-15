import { type FC, type ReactNode } from 'react'
import { type FileWithPreview } from 'src/types/files'

import styles from './index.module.scss'

type FilePreviewsProps = {
	files: FileWithPreview[]
	removeBtn?: ReactNode
	removeHandler?: (idx: number) => void
}
export const FilePreviews: FC<FilePreviewsProps> = ({ files, removeBtn, removeHandler }) => {
	if (!files) return null
	return (
		<ul className={styles.filesList}>
			{files.map((file, idx) => (
				<li key={`${file.name}-${idx}`}>
					{removeBtn && (
						<button className={styles.removeBtn} type='button' onClick={() => removeHandler?.(idx)}>
							{removeBtn}
						</button>
					)}
					<img
						src={file.preview}
						alt={file.name}
						onLoad={() => {
							URL.revokeObjectURL(file.preview)
						}}
					/>
				</li>
			))}
		</ul>
	)
}
