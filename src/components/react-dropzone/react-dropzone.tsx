import React, { type FC, type ReactNode, useEffect, useState } from 'react'
import { type Accept, useDropzone } from 'react-dropzone'
import { type FileWithPreview } from 'src/types/files'

import { useFormContext } from 'react-hook-form'

import { FilePreviews } from 'src/components/file-previews/file-previews'
import { DropzoneBgSvg } from 'src/UI/icons/dropzoneBgSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'
import cn from 'classnames'
import { RemovePhotoSvg } from 'src/UI/icons/removePhotoSVG'

type ReactDropzoneProps = {
	name: string
	accept?: Accept
	multiple?: boolean
	maxFiles?: number
	prompt?: string
	className?: string
	dzAreaClassName?: string
	label?: string
	removeIcon?: ReactNode
	customUploadBtn?: ReactNode
}
export const ReactDropzone: FC<ReactDropzoneProps> = ({
	className,
	dzAreaClassName,
	removeIcon,
	name,
	accept,
	multiple = false,
	maxFiles = 1,
	customUploadBtn,
	prompt,
	label,
}) => {
	const [currentFiles, setCurrentFiles] = useState<FileWithPreview[]>([])

	const { register, setValue } = useFormContext()

	const onDrop = (acceptedFiles: File[]) => {
		const newFiles = [...currentFiles, ...acceptedFiles].map((file: File) => {
			return Object.assign(file, {
				preview: URL.createObjectURL(file),
			})
		})
		setCurrentFiles(() => {
			setValue(name, newFiles)
			return newFiles
		})
	}

	const removeFile = (index: number) => {
		setCurrentFiles((prevState) => {
			const newFiles = prevState.toSpliced(index, 1)
			setValue(name, newFiles)
			return newFiles
		})
	}

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		accept,
		multiple,
		maxFiles,
	})

	useEffect(() => {
		return () => {
			currentFiles?.forEach((file) => URL.revokeObjectURL(file.preview))
		}
	}, [])

	return (
		<div className={cn(styles.reactDropzone, className)}>
			{label && <label>{label}</label>}
			<FilePreviews
				files={currentFiles}
				removeBtn={removeIcon ?? <RemovePhotoSvg />}
				removeHandler={removeFile}
			/>
			{currentFiles.length < maxFiles && (
				<div className={styles.dropzoneWrapper}>
					<div
						className={cn(styles.dropzoneArea, dzAreaClassName, {
							[styles.activeArea]: isDragActive,
						})}
						{...getRootProps()}
					>
						<input {...register(name)} {...getInputProps()} />
						<DropzoneBgSvg />
						<p>{prompt ?? 'Перетащите файл на это поле'}</p>
					</div>

					<div className={styles.dropzoneController} onClick={open}>
						{customUploadBtn ?? (
							<>
								<p>Файл еще не загружен Перетащите его на поле слева или нажмите на ссылку</p>
								<AdminButton as='button' type='button' $padding='9.5px 0' $outlined>
									Загрузить
								</AdminButton>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}
