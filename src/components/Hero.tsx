import './Hero.css';
import LightRays from './LightRays.tsx';
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const el = document.querySelector(".decrypt") as HTMLElement;
    if (!el) return;

    const finalText = el.dataset.text || "";
    let iteration = 0;

    const interval = setInterval(() => {
      el.innerText = finalText
        .split("")
        .map((_char, index) => {
          if (index < iteration) return finalText[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 0.18;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero" data-scroll-section>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
       

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#f7f3f3"
    raysSpeed={1.1}
    lightSpread={0.5}
    rayLength={1.5}
    followMouse={true}
    mouseInfluence={0.4}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={2}
    saturation={2}
/>
</div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-scroll data-scroll-speed="1">
            <div className="hero-greeting">👋 Hey there!</div>

            <h2 className="hero-name decrypt" data-text="Saad Malik">
              Saad Malik
            </h2>

            <h1 className="hero-title">Full Stack<br/>Web Developer</h1>

            <p className="hero-subtitle">
              NERD | Student at BUIC'28 | Passionate about building innovative web solutions and turning ideas into reality.
            </p>
          </div>

          <div className="hero-images" data-scroll data-scroll-speed="2">
           <div className="hero-image hero-profile-card">
  <div className="hero-image hero-profile-card">
  <div className="profile-card">
    <div className="profile-card-image">
      <img src="https://www.saadmalik.tech/images/about-photo.jpg " alt="Saad Malik" />
    </div>
    
  </div>
</div>

</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
