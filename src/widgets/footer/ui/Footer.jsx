import './Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer(){
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>О компании</h3>
                    <p>Мы создаем качественные продукты с 2025 года</p>
                </div>
                
                <div className="footer-section">
                    <h3>Контакты</h3>
                    <p>Email: makskir2007@yandex.ru</p>
                    <p>Телефон: +7 (966) 276-12-84</p>
                </div>
                
                <div className="footer-section">
                    <h3>Ссылки</h3>
                    <ul>
                        <li><NavLink to='/about'>О нас</NavLink></li>
                        <li><NavLink to='/contact'>Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 Все права защищены.</p>
            </div>
        </footer>
    )
}