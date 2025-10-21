import { NavLink } from 'react-router-dom'
import { useFavorites } from '../../../features/favorite' // Импорт через Public API
import './Header.css' 
import { useProductSearchModel } from '../../../features/product-search'

export default function Header({ lightMode, setLightMode, searchTerm, setSearchTerm}) {
	const { count } = useFavorites()
	const toggleTheme = () => {
		setLightMode(!lightMode)
	}

	return (
		<header className='header'>
			<div>
				{/* Левый блок */}
				<div className='header-left'>
					<h1>E-Store</h1>
					<input type="search" value={searchTerm} onChange={e => {
						setSearchTerm(e.target.value)
					}} 
					placeholder='поиск'
					className='search-bar'
					/>
				</div>
				{/* Центральный блок - навигация */}
				<nav className='nav'>
					<ul>
						<li>
							<NavLink to='/'>Главная</NavLink>
						</li>
						<li>
							<NavLink to='/catalog'>Каталог</NavLink>
						</li>
						<li>
							<NavLink to='/about'>О нас</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Контакты</NavLink>
						</li>
					</ul>
				</nav>

				{/* Правый блок */}
				<div className='header-right'>
					<button className='theme-toggle' onClick={toggleTheme}>
						{lightMode ? (
							<img src='./sun.svg' alt='light mode' />
						) : (
							<img src='./moon.svg' alt='dark mode' />
						)}
					</button>
						<span className='favorites'> ❤️{count}</span>
				</div>
			</div>
		</header>
	)
}