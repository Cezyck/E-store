import { useEffect, useRef, useState } from 'react'
import './Product.css' 
import { FavoriteButton } from '../../../shared/favoriteButton'

export default function Product({ item, onView }) {
	const { 
		name = 'Неизвестный товар', 
		price = 0, 
		description = 'Нет описания', 
		images = '', 
		inStock = false, 
		currency = 'Rub' 
	} = item || {}
	
	const [expanded, setExpanded] = useState(false)
	const cardRef = useRef(null)

	useEffect(() => {
		if (expanded && cardRef.current) {
			cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
			const timer = setTimeout(() => {
				setExpanded(false)
			}, 10_000)
			return () => clearTimeout(timer)
		}
	}, [expanded])
	
	const toggle = () => {
		if (!inStock) return
		const next = !expanded
		setExpanded(next)
		if (next) onView(item)
	}

	return (
		<li
			ref={cardRef}
			className={`product ${expanded ? 'expanded' : ''} ${!inStock ? 'sold-out' : ''}`}
			onClick={toggle}
		>
			<img src={images} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
				<span>{price} {currency}</span>
				<p className={`product-status ${inStock ? 'status-available' : 'status-sold'}`}>
    			Статус: {inStock ? 'В наличии' : 'Продан'}
 				</p>
				<FavoriteButton product={item}/>
			</div>
		</li>
	)
}