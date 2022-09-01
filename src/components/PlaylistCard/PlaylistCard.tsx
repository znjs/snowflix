import { useNavigate } from "react-router-dom";
import { PlaylistCardType } from "types/component-types";
import { useVideo } from "../../context";
import { deletePlaylist } from "../../utils";

const PlaylistCard: PlaylistCardType = ({ playlist, setFetchPlaylistFlag }) => {
  const navigate = useNavigate();
  const { setDisplayLoader } = useVideo();
  return (
    <div className="mg-1 bg-clr-gray-900 pd-1 brd-sm w-16 fx fx-jc-sb fx-ai-center">
      <h3
        className="cr-pt"
        onClick={() => {
          navigate(`/playlist/${playlist._id}`);
          setDisplayLoader(true);
        }}>
        {playlist.title}
      </h3>
      <i
        className="fa-solid fa-xmark clr-red-600 cr-pt"
        onClick={() => {
          deletePlaylist(playlist);
          setFetchPlaylistFlag((prev: Boolean) => !prev);
        }}></i>
    </div>
  );
};

export { PlaylistCard };
