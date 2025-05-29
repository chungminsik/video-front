import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';

export default function LocaleDropdown() {
  const { t, i18n } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {t('language.select')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => i18n.changeLanguage('ko')}>🇰🇷 한국어</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>🇺🇸 English</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('ja')}>🇯🇵 日本語</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}