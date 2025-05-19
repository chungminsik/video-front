import React from "react";

export default function VideoList({ videos }){
    return (
      <ul>
          {videos.map(video => (
              <li key={video.id}>
                  <h3>{video.title}</h3>
                  <video src={`/api/videos/${video.id}/stream`} controls width={320} />
              </li>
          ))}
      </ul>
    );
}