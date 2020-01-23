import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Video } from '../../redux/videos/types';
import { fetchVideos } from '../../redux/videos/actions';
import { GlobalState } from '../../redux/types';

import CategoryCollection from '../category-collection/category-collection';

type Props = {
  videos: Video[];
  fetchVideos: () => void;
};

const CollectionsOverview: React.FC<Props> = (props: Props) => {
  const { fetchVideos, videos } = props;
  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  const renderList = (): JSX.Element[] => {
    return videos.map((video: Video) => {
      return <CategoryCollection video={video} />;
    });
  };

  return <div>{renderList()}</div>;
};

const mapStateToProps = (state: GlobalState) => {
  return {
    videos: state.videoList.videos
  };
};

export default connect(mapStateToProps, { fetchVideos })(CollectionsOverview);
