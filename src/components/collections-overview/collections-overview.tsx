import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, Video } from '../../redux/videos/actions';
import { StoreState } from '../../redux/index';

interface Props {
  videos: Video[];
  fetchVideos: Function;
}

const CollectionsOverview: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.fetchVideos();
  }, []);

  const renderList = (): JSX.Element[] => {
    return props.videos.map((video: Video) => {
      return <div key={video.id}>{video.title}</div>;
    });
  };

  return (
    <div>
      <h1>Collections Overview</h1>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ videos }: StoreState): { videos: Video[] } => {
  return { videos };
};

export default connect(mapStateToProps, { fetchVideos })(CollectionsOverview);
