import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, Video } from '../../redux/videos/actions';
import { StoreState } from '../../redux/index';

interface Props {
  videos: Video[];
  fetchVideos: Function;
}

const CollectionsOverview: React.FC<Props> = (props: Props) => {
  const { fetchVideos } = props;
  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  const renderList = (): JSX.Element[] => {
    return props.videos.map((video: Video) => {
      return (
        <a href="https://www.youtube.com/watch?v=DLX62G4lc44" key={video.etag}>
          <h1>{video.snippet.title}</h1>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </a>
      );
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
