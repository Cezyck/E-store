import './About.css'

function About() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1>О нас</h1>
                <p>Добро пожаловать в мир технологий и инноваций. Мы создаем будущее уже сегодня.</p>
            </section>

            <div className="about-content">
                <section className="about-story">
                    <div className="story-text">
                        <h2>Наша история</h2>
                        <p>
                            Добро пожаловать в наш интернет-сервис! Мы предлагаем широкий ассортимент 
                            товаров по доступным ценам. Наша цель - сделать ваши покупки удобными и приятными.
                        </p>
                        <p>
                            Мы работаем на рынке уже более 3 лет и за это время заслужили доверие 
                            тысяч клиентов. Наша команда профессионалов всегда готова помочь вам 
                            с выбором товара и ответить на все вопросы.
                        </p>
                        
                        <div className="story-stats">
                            <div className="stat-item">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Года на рынке</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">10K+</div>
                                <div className="stat-label">Довольных клиентов</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Товаров в каталоге</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-features">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">✓</div>
                            <h3>Качество</h3>
                            <p>
                                Мы тщательно тестируем каждый товар перед тем, как предложить его вам. 
                                Гарантия качества и долговечности.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💰</div>
                            <h3>Доступность</h3>
                            <p>
                                Предлагаем конкурентные цены без компромиссов в качестве. 
                                Регулярные акции и специальные предложения.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🛟</div>
                            <h3>Поддержка</h3>
                            <p>
                                Наша служба поддержки работает 24/7. Быстрое решение вопросов 
                                и профессиональные консультации.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About