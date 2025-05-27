import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import '/src/index.css';
import {useNavigate} from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();
    const {t} = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try{
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                },
                credentials : 'include',
                body: new URLSearchParams({
                    username: email,
                    password: password
                })
            });
            if (res.ok){
                navigate('/home');
            } else{
                setError('ログインに失敗しました');
            }
        } catch (err){
            console.log(err);
            setError('通信エラー0')
        }
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <h1 className="mb-4 fw-bold">{t('page.heading')}</h1>
            <div className="card p-4 shadow" style={{maxWidth: '400px', width: '100%'}}>
                <h3 className="text-center mb-4">{t('page.title')}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">{t('login.email.label')}</label>
                        <input
                            type="email"
                            id="email"
                            name="username"
                            className="form-control"
                            required
                            placeholder={t('login.email.placeholder')}
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">パスワード</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            required
                            placeholder={t('login.password.placeholder')}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    {/*ログインに失敗すると出る文字*/}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100">{t('login.button')}</button>
                    <div className="text-center mt-3">
                        <a href="/register" className="text-decosration-none">
                            {t('register.link')}
                        </a>
                    </div>
                </form>
            </div>
            <div style={{ position: 'fixed', bottom: 20, left: 20, zIndex: 1000}}>
                <div className="dropdown d-inline-block">
                    <button
                        className="btn btn-outline-dark dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        言語選択
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="?lang=ko">
                                🇰🇷 한국어
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="?lang=en">
                                🇺🇸 English
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="?lang=ja">
                                🇯🇵 日本語
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}