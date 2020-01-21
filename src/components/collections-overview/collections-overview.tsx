import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Video } from '../../redux/videos/types';
import { fetchVideos } from '../../redux/videos/actions';
import { GlobalState } from '../../redux/types';

interface Props {
  videos: Video[];
  fetchVideos: () => void;
}

const CollectionsOverview: React.FC<Props> = (props: Props) => {
  const { fetchVideos, videos } = props;
  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  const renderList = (): JSX.Element[] => {
    return videos.map((video: Video) => {
      return (
        //https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
        <a href="https://www.youtube.com/watch?v=DLX62G4lc44" key={video.id}>
          <h1>{video.title}</h1>
          {video.items.map(item => {
            return <img key={item.etag} src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />;
          })}
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

const mapStateToProps = (state: GlobalState) => {
  return {
    videos: state.videoList.videos
  };
};

export default connect(mapStateToProps, { fetchVideos })(CollectionsOverview);
