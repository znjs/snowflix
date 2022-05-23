const videoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VIDEO":
      return {
        ...state,
        videos: [...action.payload.videoList],
        default: [...action.payload.videoList],
      };
    case "UPDATE_FILTER":
      let filteredVideos = state.default.filter(
        (video) => video.category === action.payload.filter,
      );
      if (action.payload.filter === "All") filteredVideos = state.default;
      return { ...state, videos: filteredVideos, filter: action.payload.filter };
    case "SEARCH_VIDEO":
      if (!!action.payload.searchText) {
        return {
          ...state,
          videos: state.default.filter((video) =>
            video.title.toLowerCase().includes(action.payload.searchText.toLowerCase()),
          ),
        };
      } else {
        return {
          ...state,
          videos: [...state.default],
        };
      }
    default:
      return state;
  }
};

export { videoReducer };
