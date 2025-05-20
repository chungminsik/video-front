import './App.css'
import VideoList from "./components/VideoList.jsx";
import React, {useEffect, useState} from "react";
import {fetchVideos} from "./api/video.js";

function App() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load(){
            const data = await fetchVideos();
            setVideos(data);
            setLoading(false);
        }
        load()
    }, []);

    return (
        <div style={{padding : '2rem'}}>
            <h1>Video List</h1>

            {loading ? (
                <p>読み込み中・・・</p>
            ) : (
                <VideoList videos={videos}/>
            )}
        </div>
    );
}

export default App
