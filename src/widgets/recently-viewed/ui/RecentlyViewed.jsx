import { useEffect, useState } from 'react'
import './RecentlyViewed.css'

export default function RecentlyViewed({ lastViewed }) {
    const [recentlyViewed, setRecentlyViewed] = useState([])
    const openHours = 19
    const closeHours = 21
    const [now, setNow] = useState(() => new Date())
    const hour = now.getHours()

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 60_000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        if (lastViewed && lastViewed.name) {
            setRecentlyViewed(prev => {
                const filtered = prev.filter(item => item.name !== lastViewed.name)
                return [lastViewed, ...filtered].slice(0, 10)
            })
        }
    }, [lastViewed])

    function removeHisoryProduct(removeItem) {
        setRecentlyViewed(prev => prev.filter(item => item.name !== removeItem.name))
    }

    const isOpen = hour >= openHours && hour < closeHours
    const hoursLeft = isOpen ? closeHours - hour : hour < openHours ? openHours - hour : 24 - hour + openHours

    const getStatusClass = (inStock) => {
        return inStock ? 'in-stock' : 'sold-out'
    }

    const getStatusText = (inStock) => {
        return inStock ? 'В наличии' : 'Продан'
    }

    return (
        <div className='recently-viewed-section'>
            {recentlyViewed.length > 0 ? (
                <>
                    <h3 className='recently-viewed-title'>Вы недавно смотрели</h3>
                    <div className='recently-viewed-container'>
                        {recentlyViewed.map((product, index) => (
                            <div key={`${product.name}-${index}`} className='recently-viewed-item'>
                                <img src={product.images} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p className='recently-viewed-price'>{product.price} {product.currency}</p>
                                <p className={`recently-viewed-status ${getStatusClass(product.inStock)}`}>
                                    {getStatusText(product.inStock)}
                                </p>
                                <button 
                                    className='recently-viewed-remove' 
                                    onClick={() => removeHisoryProduct(product)}
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='working-hours'>
                    {isOpen ? (
                        <p>Мы открыты! Закроемся через: {hoursLeft} ч.</p>
                    ) : (
                        <p>Мы закрыты! Откроемся через: {hoursLeft} ч.</p>
                    )}
                </div>
            )}
        </div>
    )
}