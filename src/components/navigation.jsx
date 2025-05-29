import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          {t('page.heading')}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/mypage">
                {t('page.nav.mypage')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                {t('page.nav.logout')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}