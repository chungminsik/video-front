import './App.css'
import VideoList from "./components/VideoList.jsx";

function App() {

    const dummyVideos = [
        { id: 1, title: 'サンプル動画 1' },
        { id: 2, title: 'サンプル動画 2' },
        { id: 3, title: 'サンプル動画 3' },
    ];

    return (
    <div style={{textAlign: 'center', marginTop: '2rem'}}>
        <h1>Hello, Video! 🎬</h1>
        <VideoList videos={dummyVideos}/>
    </div>
  )
}

export default App
