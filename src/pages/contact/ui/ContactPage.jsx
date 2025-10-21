import './Contact.css'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Обработка отправки формы
        alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
    }

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Контакты</h1>
                <p>Свяжитесь с нами - мы всегда рады помочь и ответить на ваши вопросы</p>
            </section>

            <div className="contact-content">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-header">
                                <div className="info-icon">📍</div>
                                <h3>Наш Магазин</h3>
                            </div>
                            <div className="info-content">
                                <p>Мы находимся в центре города, готовы принять вас в любое рабочее время</p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-item-icon">🏢</div>
                                        <div className="contact-item-text">
                                            <strong>Адрес</strong>
                                            <span>г. Владивосток, ул.Семеновская, тц. Клвер Хаус</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">🚇</div>
                                        <div className="contact-item-text">
                                            <strong>Метро</strong>
                                            <span>Тверская, Пушкинская, Чеховская</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-header">
                                <div className="info-icon">📞</div>
                                <h3>Телефоны</h3>
                            </div>
                            <div className="info-content">
                                <p>Наша служба поддержки работает круглосуточно</p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-item-icon">📱</div>
                                        <div className="contact-item-text">
                                            <strong>Основной</strong>
                                            <span>+7 (966) 276-12-84</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">📠</div>
                                        <div className="contact-item-text">
                                            <strong>Горячая линия</strong>
                                            <span>8-800-555-35-35</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-header">
                                <div className="info-icon">⏰</div>
                                <h3>Время работы</h3>
                            </div>
                            <div className="info-content">
                                <p>Мы всегда на связи и готовы помочь вам</p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-item-icon">🏪</div>
                                        <div className="contact-item-text">
                                            <strong>Магазин</strong>
                                            <span>Пн-Пт: 9:00-18:00</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">📞</div>
                                        <div className="contact-item-text">
                                            <strong>Телефонная поддержка</strong>
                                            <span>Круглосуточно</span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">💬</div>
                                        <div className="contact-item-text">
                                            <strong>Онлайн-чат</strong>
                                            <span>24/7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <div className="form-header">
                            <h2>Напишите нам</h2>
                            <p>Заполните форму и мы свяжемся с вами в течение часа</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Имя *</label>
                                    <input 
                                        type="text" 
                                        className="form-input" 
                                        placeholder="Ваше имя"
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Телефон *</label>
                                    <input 
                                        type="tel" 
                                        className="form-input" 
                                        placeholder="+7 (___) ___-__-__"
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email *</label>
                                <input 
                                    type="email" 
                                    className="form-input" 
                                    placeholder="your@email.com"
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Тема сообщения</label>
                                <input 
                                    type="text" 
                                    className="form-input" 
                                    placeholder="О чем вы хотите спросить?"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Сообщение *</label>
                                <textarea 
                                    className="form-textarea" 
                                    placeholder="Расскажите подробнее о вашем вопросе..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>

                <section className="map-section">
                    <h2>Мы на карте</h2>
                    <div className="map-container">
                        <div className="map-placeholder">
                            🗺️ Интерактивная карта будет здесь
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact