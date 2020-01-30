import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Video } from '../../redux/videos/types';
import { fetchVideosStartAsync } from '../../redux/videos/actions';
import { GlobalState } from '../../redux/types';

import CategoryCollection from '../category-collection/category-collection';

type Props = {
  videos: Video[];
  isLoading: boolean;
  fetchVideosStartAsync: () => void;
};

const CollectionsOverview: React.FC<Props> = (props: Props) => {
  const { fetchVideosStartAsync, videos, isLoading } = props;
  useEffect(() => {
    fetchVideosStartAsync();
    // eslint-disable-next-line
  }, []);

  const renderList = (): JSX.Element[] => {
    return videos.map((video: Video) => {
      return <CategoryCollection video={video} />;
    });
  };

  return <div>{isLoading ? 'Loading Now' : renderList()}</div>;
};

const mapStateToProps = (state: GlobalState) => {
  return {
    videos: state.videoList.videos,
    isLoading: state.videoList.isLoading
  };
};

export default connect(mapStateToProps, { fetchVideosStartAsync })(CollectionsOverview);
