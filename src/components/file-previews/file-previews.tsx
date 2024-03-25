import { type FC, type ReactNode } from 'react'
import { type FileWithPreview } from 'src/types/files'

import { ImagesFormat } from 'src/helpers/consts'
import { defineFileFormat } from 'src/helpers/utils'
import styles from './index.module.scss'

type FilePreviewsProps = {
	files: FileWithPreview[]
	removeBtn?: ReactNode
	removeHandler?: (idx: number) => void
}
export const FilePreviews: FC<FilePreviewsProps> = ({ files, removeBtn, removeHandler }) => {
	if (!files.length) return null
	return (
		<ul className={styles.filesList}>
			{files.map((file, idx) => (
				<li key={file.preview}>
					{removeBtn && (
						<button className={styles.removeBtn} type='button' onClick={() => removeHandler?.(idx)}>
							{removeBtn}
						</button>
					)}
					{ImagesFormat.includes(defineFileFormat(file.name)) ? (
						<img
							src={file.preview}
							alt={file.name}
							onLoad={() => {
								URL.revokeObjectURL(file.preview)
							}}
						/>
					) : (
						<div className={styles.textFile}>
							<span></span>
							<a href={file.path} download>
								{file.name}
							</a>
						</div>
					)}
				</li>
			))}
		</ul>
	)
}
