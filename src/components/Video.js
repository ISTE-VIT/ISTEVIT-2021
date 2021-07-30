import React from 'react';

export const Video = props => (
        <div className="videos__item">
            <div className="video__image">
                <a target="_blank" href={props.video.link}>
                    <img src={`https://i4.ytimg.com/vi/${props.video.guid.split(':')[2]}/mqdefault.jpg`} />
                </a>
            </div>
            <div className="video__footer">
                <p>{props.video.title}</p>
            </div>
        </div>
);