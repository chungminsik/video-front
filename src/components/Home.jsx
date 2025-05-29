import {useEffect, useState} from "react";
import Navigation from './navigation';
import Footer from './Footer';
import {Link} from "react-router-dom";
import LocaleDropdown from './LocaleDropdown';
import { useTranslation } from 'react-i18next';

export default function Home(){
    const { t } = useTranslation();
    const [videos, setVideos] = useState([]);

    useEffect(() => {

    }, []);

    const toggleLike = (videoId, isLiked, idx) => {

    }

    return (
        <div>
            <Navigation />
            {/* Video Grid */}
            <div className="container mt-4">

            </div>
            <Footer />
        </div>
    );
}