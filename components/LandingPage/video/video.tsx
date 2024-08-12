import Image from "next/image";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import YouTube from 'react-youtube';

interface Props {}

function Video(props: Props) {
  const {} = props;
  const [playVideo, setPlayVideo] = useState(false);

  const opts = {
    height: '600px',
    width: '1200px',
    playerVars: {
      autoplay: 1,
    },
  };

  function toggleVideo() {
    setPlayVideo(!playVideo);
  }

  return (
    <section className="max-w-7xl mx-auto mb-12 flex flex-col items-center">
      <p className="font-extrabold font-anton md:text-6xl text-xl mb-12 text-center">Watch Video</p>
      <Fade direction="up" triggerOnce>
        <div className="videos rounded-md bg-contain cursor-pointer" onClick={toggleVideo}>
          {playVideo ? (
            <YouTube videoId="gSCYsCzOoMs" opts={opts} />
          ) : (
            <Image
              src="/images/ragging.png" 
              alt=""
              height={100}
              width={700}
              className="rounded-md hover:scale-[102%] ease-in-out active:scale-95 transition-all duration-300"
            />
          )}
        </div>
      </Fade>
    </section>
  );
}

export default Video;
