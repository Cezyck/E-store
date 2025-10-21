export const PRODUCT_URL =
  import.meta.env.VITE_PRODUCT_URL ||
  "https://raw.githubusercontent.com/Cezyck/estrore-data/refs/heads/main/data/product.json"

export const getProducts = async () => {
  try {
    const response = await fetch(PRODUCT_URL)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error(`Ошибка при загрузке product.json:`, error)
    return []
  }
}