import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


export default function Register(){

    const {t} = useTranslation();
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState(null);


    const handleSubmit = async e => {
        e.preventDefault();

        const register = {userName, email, password};

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(register)
            });

            const data = await res.json();

            if (res.ok){
                navigate('/login?registerd=true');
            } else{
                setError(data.error || '登録失敗');
            }
        }catch (err){
            console.error(err);
            setError('通信エラー')
        }


    }

    return (
        <body className="bg-light">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4 fw-bold">動画フラットフォーム</h1>

                <div className="card p-4 shadow">
                    <h3 className="text-center mb-4">会員登録</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label ">名前</label>
                            <input
                                type="userName"
                                id="userName"
                                name="userName"
                                className="form-control"
                                required
                                placeholder="名前を入力してください"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}/>
                        </div>
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
                        <button type="submit" className="btn btn-success w-100">登録</button>
                        <div className="text-center mt-3">
                            <a href="/login" className="text-decoration-none">すでに会員ですか？ ログインはこちら</a>
                        </div>
                    </form>
                </div>
            </div>
        </body>

    );
}