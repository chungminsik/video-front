export async function fetchVideos(){
    try {
        const res = await fetch('/api/videos');
        if (!res.ok){
            throw new Error(`http error! status ${res.status}`);
        }

        return await res.json();

    } catch (err){
        console.error('動画習得エラー', err);
        return [];
    }
}