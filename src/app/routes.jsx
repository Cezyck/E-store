import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Catalog } from '../pages/catalog'
import { RecentlyViewed } from '../widgets/recently-viewed'
import { Header } from '../widgets/header'
import { AboutPage } from '../pages/about'
import { ContactPage } from '../pages/contact'
import { FavoriteProvider } from '../features/favorite'
import { Footer } from '../widgets/footer'
import { useProductSearchModel } from '../features/product-search/model/search'
import { ThemeProvider, useThemeContext } from '../features/theme'

function Root() {
    const [lastViewed, setLastViewed] = useState([])
    const location = useLocation()
    const hideRecentlyViewed = ['/about', '/contact'].includes(location.pathname)
    const searchModel = useProductSearchModel()

    return (
        <FavoriteProvider>
            <ThemeProvider>
                <ThemeContent 
                    lastViewed={lastViewed}
                    setLastViewed={setLastViewed}
                    hideRecentlyViewed={hideRecentlyViewed}
                    searchModel={searchModel}
                />
            </ThemeProvider>
        </FavoriteProvider>
    )
}

function ThemeContent({ lastViewed, setLastViewed, hideRecentlyViewed, searchModel }) {
    const { isLightMode } = useThemeContext()

    return (
        <div className={isLightMode ? 'light-mode' : 'dark-mode'}>
            <div className='container'>
                <Header 
                    searchTerm={searchModel.searchTerm}
                    setSearchTerm={searchModel.setSearchTerm}
                />
                <Outlet context={{
                    lastViewed,
                    setLastViewed,
                    debouncedSearchTerm: searchModel.debouncedSearchTerm
                }} />

                {!hideRecentlyViewed && <RecentlyViewed lastViewed={lastViewed} />}
                <Footer />
            </div>
        </div>
    )
}

export const createMainRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { index: true, element: <Catalog /> },
                { path: 'catalog', element: <Catalog /> },
                { path: 'about', element: <AboutPage /> },
                { path: 'contact', element: <ContactPage /> },
            ],
        },
    ])