import React, { useEffect, useState } from "react";

export const SectionOne = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <section className="section one">
            <div className="nav">
                <div className="left-content">
                    <h1>SODA</h1>
                </div>
                <div className="right-content">
                    <div className="linksone" >
                      <a href="https://twitter.com/L7XICZ" target="_blank">
                        <i className="fa-solid fa-link"></i>
                      </a>
                    </div>
                    <div className="links">
                            <h1>RAINER AHI</h1>
                    </div>
                </div>
            </div  >
            <h1 className="title" >BEST SODA</h1>
            <h1 className="front" >FOR YOU</h1>
            <div className="center" >
              <div
                className="scroll"
                style={{
                opacity: hideScrollText ? 0 : 1,
                transition: "opacity 0.3s ease-in-out", // Smooth transition effect
                pointerEvents: hideScrollText ? "none" : "auto", // Disable pointer events when hidden
                }}
              >
                <h1>
                   PLEASE <br /> SCROLL
                </h1>
              </div>
              </div>
        </section>
    )
}