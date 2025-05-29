import LocaleDropdown from './LocaleDropdown';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-dark pt-4 pb-2" style={{ backgroundColor: '#FFCC2F' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <LocaleDropdown />
          </div>
          <div className="text-center mt-4 w-100">
            <h5 className="fw-bold">😊 VideoProject</h5>
            <p>{t('footer.tagline')}</p>
          </div>
        </div>
        <hr className="border-dark" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 VideoProject. {t('footer.rights')} 😊</p>
        </div>
      </div>
    </footer>
  );
} 