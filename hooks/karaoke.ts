import { useLocalStorageValue } from "@react-hookz/web";

export function useKaraokeState() {
  
  const { value: playlist, set: setPlaylist } = useLocalStorageValue(
    "playlist",
    { defaultValue: [] }
  );

  const { value: drivePlaylist, set: setDrivePlaylist } = useLocalStorageValue(
    "drivePlaylist",
    { defaultValue: [] }
  );

  const { value: curVideoId, set: setCurVideoId } = useLocalStorageValue(
    "videoId",
    { defaultValue: "" }
  ); // TODO: make a video instruction and put it as a initial here

  const { value: curVideo, set: setCurVideo } = useLocalStorageValue(
    "playNowVideo",
    { defaultValue: [] }
  ); // TODO: make a video instruction and put it as a initial here

  const { value: searchTerm, set: setSearchTerm } = useLocalStorageValue(
    "searchTerm",
    { defaultValue: "" }
  );

  const { value: isKaraoke, set: setIsKaraoke } = useLocalStorageValue(
    "isKaraoke",
    { defaultValue: true }
  );

  const { value: activeIndex, set: setActiveIndex } = useLocalStorageValue(
    "bottomNavActiveIndex",
    { defaultValue: 0 }
  );

  return {
    playlist,
    curVideoId,
    curVideo,
    searchTerm,
    isKaraoke,
    activeIndex,
    drivePlaylist,
    setPlaylist,
    setCurVideoId,
    setCurVideo,
    setSearchTerm,
    setIsKaraoke,
    setActiveIndex,
    setDrivePlaylist,
  };
}
