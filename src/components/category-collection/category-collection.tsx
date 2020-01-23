import React, { useEffect } from 'react';
import { Video } from '../../redux/videos/types';
import Swiper from 'swiper';

import './category-collection.css';

interface Props {
  video: Video;
}

const CategoryCollection: React.FC<Props> = ({ video }) => {
  useEffect(() => {
    // eslint-disable-next-line
    setTimeout(() => {
      new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10
      });
    }, 500);
  }, []);
  return (
    <section className="category-collection" key={video.id}>
      <h1>{video.title}</h1>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {video.items.map(item => {
            return (
              <a className="swiper-slide" href="https://www.youtube.com/watch?v=DLX62G4lc44" key={item.id}>
                <img src={item.url} alt={item.id} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCollection;
