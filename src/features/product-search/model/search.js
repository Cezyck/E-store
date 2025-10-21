import { useState, useEffect } from 'react'

function useDebounce(value, delay = 300) {
	const [debounced, setDebounced] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(handler)
	}, [value, delay])

	return debounced
}

export const useProductSearchModel = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 500)
	return { searchTerm, setSearchTerm, debouncedSearchTerm }
}
