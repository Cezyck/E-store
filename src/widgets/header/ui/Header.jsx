import { NavLink } from 'react-router-dom'
import { useFavorites } from '../../../features/favorite'
import { useThemeContext } from '../../../features/theme'
import './Header.css'

export default function Header({ searchTerm, setSearchTerm }) {
    const { count } = useFavorites()
    const { isLightMode, toggleTheme } = useThemeContext()

    return (
        <header className='header'>
            <div>
                <div className='header-left'>
                    <h1>E-Store</h1>
                    <input 
                        type="search" 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                        placeholder='поиск'
                        className='search-bar'
                    />
                </div>
                
                <nav className='nav'>
                    <ul>
                        <li><NavLink to='/'>Главная</NavLink></li>
                        <li><NavLink to='/catalog'>Каталог</NavLink></li>
                        <li><NavLink to='/about'>О нас</NavLink></li>
                        <li><NavLink to='/contact'>Контакты</NavLink></li>
                    </ul>
                </nav>

                <div className='header-right'>
                    <button className='theme-toggle' onClick={toggleTheme}>
                        {isLightMode ? (
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