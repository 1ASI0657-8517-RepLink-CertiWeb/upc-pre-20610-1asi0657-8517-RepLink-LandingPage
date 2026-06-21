document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#registro') {
            window.location.href = 'https://ejemplo.com/registro';
            return;
        }
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ----- Language Switcher -----
const langSwitchButton = document.getElementById('lang-switch-btn');
const langSwitchButtonTextSpan = langSwitchButton.querySelector('span:last-child');
const translatableElements = document.querySelectorAll('[data-lang-es], [data-lang-placeholder-es]');
let currentLang = 'es';

function updateLanguage(lang) {
    translatableElements.forEach(el => {
        const text = el.getAttribute(`data-lang-${lang}`);
        const placeholder = el.getAttribute(`data-lang-placeholder-${lang}`);

        if (text !== null && !(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.textContent = text;
        }

        if (placeholder !== null && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.placeholder = placeholder;
        }
    });
}

langSwitchButton.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langSwitchButtonTextSpan.textContent = currentLang === 'es' ? 'English' : 'Español';
    updateLanguage(currentLang);
});

// Initialize placeholders on page load
document.addEventListener('DOMContentLoaded', () => {
    translatableElements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const initialPlaceholder = el.getAttribute(`data-lang-placeholder-${currentLang}`);
            if (initialPlaceholder !== null) {
                el.placeholder = initialPlaceholder;
            }
        }
    });
});