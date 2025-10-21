import './FavoriteButton.css'
import { useFavorites } from '../../../features/favorite'

export default function FavoriteButton({ product }) {
    const { favorites, toggleFavorites } = useFavorites()
    const isFavorites = favorites.some(p => p.name === product.name)

    return ( 
        <button
            className={`fav-btn ${isFavorites ? 'active' : ''}`}
            onClick={e => {
                e.stopPropagation() 
                toggleFavorites(product)
            }}
            disabled={!product.inStock} // Делаем кнопку неактивной для проданных товаров
        >
            {isFavorites ? '❤️' : '🤍'}
        </button>
    )
}