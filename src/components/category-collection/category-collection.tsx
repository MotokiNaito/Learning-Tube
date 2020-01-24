import React from 'react';
import { Video } from '../../redux/videos/types';
import Slider from 'react-slick';

import './category-collection.css';

interface Props {
  video: Video;
}

const CategoryCollection: React.FC<Props> = ({ video }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <section className="category-collection" key={video.id}>
      <h1>{video.title}</h1>
      <Slider {...settings}>
        {video.items.map(item => {
          return (
            <a href="https://www.youtube.com/watch?v=DLX62G4lc44" key={item.id}>
              <img src={item.url} alt={item.id} />
            </a>
          );
        })}
      </Slider>
    </section>
  );
};

export default CategoryCollection;
