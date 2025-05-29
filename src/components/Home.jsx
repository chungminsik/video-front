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
              <div className="row">
                {videos && videos.length > 0 ? (
                  videos.map((video, idx) => (
                    <div className="col-md-4 mb-4" key={video.id}>
                      <div className="card">
                        <img
                          src={video.thumbnailUrl}
                          className="card-img-top"
                          alt="thumbnail"
                          style={{ height: 200, objectFit: 'cover' }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={`/videos/${video.id}`}>{video.title}</Link>
                          </h5>
                          <p className="card-text">
                            <small className="text-muted">👤 {video.user.userName}</small><br />
                            <small className="text-muted">📅 {new Date(video.uploadDate).toLocaleString()}</small><br />
                            <small className="text-muted">👁️‍ {video.views}</small>
                          </p>
                          <button
                            className="like-btn btn btn-light"
                            type="button"
                            onClick={() => toggleLike(video.id, video.likedByCurrentUser, idx)}
                          >
                            {video.likedByCurrentUser ? '❤️' : '🖤'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <p className="text-muted fs-4">{t('video.none')}</p>
                  </div>
                )}
              </div>
            </div>
            <Footer />
        </div>
    );
}