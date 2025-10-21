import { useEffect, useMemo, useState } from 'react'
import { Product } from '../../../entities/product'
import { useOutletContext } from 'react-router-dom'
import { getProducts } from '../../../shared/api'
import './Catalog.css'

export default function Catalog() {
 const { debouncedSearchTerm = '', setLastViewed } = useOutletContext()
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState(false)

 useEffect(() => {
  const loadProducts = async () => {
   setLoading(true)
   try {
    const productsData = await getProducts()
    setProducts(productsData)
   } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
   } finally {
    setLoading(false)
   }
  }

  loadProducts()
 }, [])


 const filteredProducts = useMemo(() => {
  if (!products || !Array.isArray(products)) return []
  
  return products.filter(product => {
   if (!debouncedSearchTerm.trim()) return true
   
   const searchLower = debouncedSearchTerm.toLowerCase().trim()
    const getStatus = (inStock) => (inStock ? 'в наличии' : 'продан')
            
            // Получаем статус текущего товара
            const productStatus = getStatus(product.inStock).toLowerCase()

            return (
                product.name?.toLowerCase().includes(searchLower) ||
                product.description?.toLowerCase().includes(searchLower) ||
                productStatus.includes(searchLower)
            )
  })
 }, [debouncedSearchTerm, products])
 if (loading) {
  return <div className='loading'>Загрузка товаров...</div>
 }

 return (
  <main className="catalog">
   <ul className="products">
    {filteredProducts.map(product => (
     <Product 
      key={product.id || product.name} 
      item={product} 
      onView={setLastViewed} 
     />
    ))}
   </ul>
  </main>
 )
}