document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#registro') {
            window.location.href = 'https://ejemplo.com/registro';
            return;
        }
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language Switch Logic
const langSwitchButton = document.getElementById('lang-switch-btn');
const langSwitchButtonTextSpan = langSwitchButton.querySelector('span:last-child');
const translatableElements = document.querySelectorAll('[data-lang-es], [data-lang-placeholder-es]');
let currentLang = 'es';

langSwitchButton.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langSwitchButtonTextSpan.textContent = currentLang === 'es' ? 'English' : 'Español';

    translatableElements.forEach(el => {
        const text = el.getAttribute(`data-lang-${currentLang}`);
        const placeholder = el.getAttribute(`data-lang-placeholder-${currentLang}`);

        if (text !== null && !(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.textContent = text;
        }

        if (placeholder !== null && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.placeholder = placeholder;
        }
    });
});

// Initialize placeholders on page load
translatableElements.forEach(el => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        const initialPlaceholder = el.getAttribute(`data-lang-placeholder-${currentLang}`);
        if (initialPlaceholder !== null) {
            el.placeholder = initialPlaceholder;
        }
    }
});