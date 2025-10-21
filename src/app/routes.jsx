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

function Root() {
	const [lightMode, setLightMode] = useState(false)
	const [lastViewed, setLastViewed] = useState([])
	const location = useLocation()
	const hideRecentlyViewed = ['/about', '/contact'].includes(location.pathname)
	const searchModel = useProductSearchModel()

	return (
		<FavoriteProvider>
			<div className={lightMode ? 'light-mode' : 'dark-mode'}>
				<div className='container'>
					<Header 
						lightMode={lightMode}
						setLightMode={setLightMode}
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
		</FavoriteProvider>
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
