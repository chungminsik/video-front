import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import ja from './locales/translation_ja.json';
import ko from './locales/translation_ko.json';
import en from './locales/translation_en.json';

const params = new URLSearchParams(window.location.search);
const locale = params.get('lang') || 'ja';

i18next
    .use(initReactI18next)
    .init({
        lng: locale,
        fallbackLng: 'ja',
        resources: {
            ja: {translation: ja},
            en: {translation: en},
            ko: {translation: ko}
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;