import { useEffect, useRef } from "react";
import "../assets/styles/scroll-video.css";
import videoSrc from "../assets/transform.mp4";

export default function ScrollVideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const targetTime = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const progress =
          Math.abs(rect.top) / (rect.height - windowHeight);

        targetTime.current =
          video.duration * Math.min(Math.max(progress, 0), 1);
      }
    };

    const smoothUpdate = () => {
      if (video && video.duration) {
        video.currentTime +=
          (targetTime.current - video.currentTime) * 0.08;
      }
      requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(smoothUpdate);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="scroll-video-section">
      {/* LEFT TEXT */}
      <div className="video-left">
        <h2>How to Create a Scene</h2>
        <p>
          Scroll to see how a simple moment
          transforms into a cinematic scene.
        </p>
        <p>
          Lighting, mood and camera motion
          are enhanced automatically.
        </p>
      </div>

      {/* RIGHT VIDEO */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
