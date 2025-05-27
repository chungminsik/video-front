import {useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router-dom";


export default function PrivateRoute(){

    const [checking, setChecking] = useState(true);
    const [authed, setAuthed] = useState(false);


    //承認状態をチェックするAPIを呼ぶ
    useEffect(() => {

        async function check(){
            try{
                const res = await fetch('/auth/state', {
                    credentials : "include"
                });
                setAuthed(res.ok);
            }catch {
                setAuthed(false);
            } finally {
                setChecking(false);
            }
        }
        check();
    }, []);

    if (checking){
        return <div>承認チェック中、、</div>;
    }

    return authed ? <Outlet/> : <Navigate to="/login"/>;

}