import React from "react";
import { Fade } from "react-awesome-reveal";

interface Props {}

function Video(props: Props) {
  const {} = props;

  return (
    <section className="max-w-7xl mx-auto mb-12 flex flex-col">
        <p className="font-extrabold font-anton md:text-6xl text-xl mb-12 text-center">Watch Video</p>
      <Fade direction="up" triggerOnce>
        <iframe
            width="100%"
            height="600"
            className="rounded-md hover:scale-[102%] cursor-pointer ease-in-out active:scale-95 transition-all duration-300"
            src="https://www.youtube.com/embed/gSCYsCzOoMs?si=19xijhuXnVnRDetm"
            allow="gyroscope; accelerometer; encrypted-media; picture-in-picture"
        ></iframe>
      </Fade>
    </section>
  );
}

export default Video;
