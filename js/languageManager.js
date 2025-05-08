import { translations } from './translations.js';

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('preferredLanguage') || 'ne';
    this.translations = translations;
    this.observers = [];
  }

  init() {
    if (!localStorage.getItem('preferredLanguage')) {
      this.showLanguageModal();
    }
    this.updateContent();
  }

  showLanguageModal() {
    const modal = document.createElement('div');
    modal.className = 'language-modal-overlay';
    modal.innerHTML = `
      <div class="language-modal">
        <h2 class="language-modal-title">भाषा छान्नुहोस् / Choose Your Language</h2>
        <div class="language-options">
          <div class="language-option" data-lang="ne">
            <div class="language-flag">🇳🇵</div>
            <div class="language-name">नेपाली</div>
          </div>
          <div class="language-option" data-lang="en">
            <div class="language-flag">🇬🇧</div>
            <div class="language-name">English</div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        this.setLanguage(lang);
        modal.remove();
      });
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    this.updateContent();
  }

  updateContent() {
    document.documentElement.setAttribute('lang', this.currentLang);
    this.observers.forEach(callback => callback(this.currentLang));
    this.translatePage();
  }

  translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.dataset.translate;
      const translation = this.translate(key);
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  unsubscribe(callback) {
    this.observers = this.observers.filter(cb => cb !== callback);
  }

  translate(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }
    
    return value;
  }

  getLanguage() {
    return this.currentLang;
  }
}

export const languageManager = new LanguageManager();