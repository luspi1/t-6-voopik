import { useState, useEffect } from 'react'

export const useDefineDisplay = (): number => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}
