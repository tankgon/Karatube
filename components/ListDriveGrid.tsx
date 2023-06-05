import Image from "next/image";
import { Fragment } from "react";
import { RecommendedVideo, SearchResult } from "../types/invidious";
import { useKaraokeState } from "../hooks/karaoke";

export default function ListDriveGrid({
  onClick = () => {},
}: {
  onClick?: (video: SearchResult | RecommendedVideo) => void;
}) {
  const { drivePlaylist, setDrivePlaylist } = useKaraokeState();

  function onDeleteVideoDrive(indexVideo: any) {
    setDrivePlaylist(drivePlaylist.filter((_, index) => index !== indexVideo));
  }

  return (
    <>
      {drivePlaylist?.map((rcm, rcmIndex) => {
        return !rcm ? null : (
          <Fragment key={rcm.videoId}>
            {/* The button to open modal */}
            <label htmlFor="modal-video" onClick={() => onClick(rcm)}>
              <div className="card overflow-hidden bg-white shadow hover:shadow-md cursor-pointer flex-auto">
                <figure className="relative w-full aspect-video">
                  <Image
                    unoptimized
                    src={`https://invidious.io.lol/vi/${rcm.videoId}/mqdefault.jpg`}
                    priority
                    alt={rcm.title}
                    layout="fill"
                    className="bg-gray-400"
                  />
                </figure>
                <div className="card-body p-2">
                  <h2 className="font-semibold text-sm 2xl:text-2xl line-clamp-2 h-[2.7em]">
                    {rcm.title}
                  </h2>
                  <div className="flex">
                    <p className="text-xs 2xl:text-xl truncate m-auto">
                      {rcm.author}
                    </p>
                    <button
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-red-700 border-white hover:border-transparent hover:text-white hover:bg-primary lg:mt-0"
                      onClick={(_) => onDeleteVideoDrive(rcmIndex)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </label>
          </Fragment>
        );
      })}
    </>
  );
}
