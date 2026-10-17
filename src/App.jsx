import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/images/morya-logo.png";

import farm1 from "./assets/images/farm-1.jpeg";
import farm2 from "./assets/images/farm-2.jpeg";
import farm3 from "./assets/images/farm-3.jpeg";
import farm4 from "./assets/images/farm-4.jpeg";
import farm5 from "./assets/images/farm-5.jpeg";
import farm6 from "./assets/images/farm-6.jpeg";

import video1 from "./assets/videos/video-1.mp4";
import video2 from "./assets/videos/video-2.mp4";
import video3 from "./assets/videos/video-3.mp4";
import video4 from "./assets/videos/video-4.mp4";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const elements = document.querySelectorAll(
    ".farm-card, .about-image-wrapper, .about-content, " +
    ".stat, .gallery-item, .video-card, " +
    ".instagram-content, .instagram-visual, .contact-links"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px",
    }
  );

  elements.forEach((element, index) => {
    element.classList.add("reveal-ready");
    element.style.setProperty(
      "--reveal-delay",
      `${(index % 3) * 90}ms`
    );
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);




  const instagramUrl =
    "https://www.instagram.com/morya_dairy_farm_?stkn=MXFxaGhqaG4wcGV0Zg==";

  const youtubeUrl =
    "https://www.youtube.com/@MoryaDairyFarmAlephata";

  const mapsUrl =
    "https://maps.app.goo.gl/WPmTRjoK6CWoriae6";


    // Scroll reveal animations
useEffect(() => {
  const elements = document.querySelectorAll(
    [
      ".section-heading",
      ".farm-card",
      ".about-image-wrapper",
      ".about-content",
      ".stat",
      ".gallery-heading",
      ".gallery-item",
      ".videos-heading",
      ".video-card",
      ".instagram-content",
      ".instagram-visual",
      ".contact-grid > div",
    ].join(", ")
  );

  // Keep animations disabled when the user prefers reduced motion.
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px",
    }
  );

  elements.forEach((element) => {
    element.classList.add("scroll-reveal");
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);


  return (
    <div className="app">


      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="navbar">

        <div className="nav-container">

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
          >

            <img
              src={logo}
              alt="Morya Dairy Farms"
              className="brand-logo"
            />

            <div className="brand-text">
              <span className="brand-name">
                MORYA
              </span>

              <span className="brand-subtitle">
                DAIRY FARMS
              </span>
            </div>

          </a>


          {/* Desktop Navigation */}

          <nav className="desktop-nav">

            <a href="#home">Home</a>

            <a href="#farm">Our Farm</a>

            <a href="#about">About</a>

            <a href="#gallery">Gallery</a>

            <a href="#videos">Videos</a>

            <a href="#contact">Contact</a>

          </nav>


          {/* Mobile Menu Button */}

          <button
            className={`menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>


        {/* Mobile Navigation */}

        <nav
          className={`mobile-nav ${
            menuOpen ? "open" : ""
          }`}
        >

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#farm"
            onClick={closeMenu}
          >
            Our Farm
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#gallery"
            onClick={closeMenu}
          >
            Gallery
          </a>

          <a
            href="#videos"
            onClick={closeMenu}
          >
            Videos
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>

      </header>



      {/* =========================================
          HERO
      ========================================= */}

      <main>


        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `url(${farm1})`
          }}
        >

          <div className="hero-overlay"></div>


          <div className="hero-content">

            <p className="hero-label">
              PURE • FRESH • NATURAL
            </p>

            <h1>
              Morya
              <br />
              <em>Dairy Farms</em>
            </h1>

            <p className="hero-description">
              Where quality dairy meets
              responsible farming.
            </p>


            <div className="hero-buttons">

              <a
                href="#about"
                className="button button-primary"
              >
                Discover More
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                Follow Us ↗
              </a>

            </div>

          </div>


          <div className="hero-bottom">

            <span>
              ALEPHATA • PUNE
            </span>

            <span>
              SCROLL TO EXPLORE ↓
            </span>

          </div>

        </section>



        {/* =========================================
            OUR FARM
        ========================================= */}

        <section
          id="farm"
          className="farm-section section-light"
        >

          <div className="section-container">


            <div className="section-heading">

              <div className="section-label">
                01 — OUR FARM
              </div>

              <h2>
                Built on
                <br />
                <em>good practices.</em>
              </h2>

            </div>


            <div className="farm-grid">


              <div className="farm-card">

                <div className="farm-number">
                  01
                </div>

                <h3>
                  Quality
                </h3>

                <p>
                  Maintaining high standards
                  throughout our dairy operations
                  to deliver quality products.
                </p>

              </div>


              <div className="farm-card">

                <div className="farm-number">
                  02
                </div>

                <h3>
                  Care
                </h3>

                <p>
                  Responsible cattle care and
                  attention to everyday farm
                  practices.
                </p>

              </div>


              <div className="farm-card">

                <div className="farm-number">
                  03
                </div>

                <h3>
                  Consistency
                </h3>

                <p>
                  Focused on maintaining reliable
                  processes and quality every day.
                </p>

              </div>


            </div>

          </div>

        </section>



        {/* =========================================
            ABOUT
        ========================================= */}

        <section
          id="about"
          className="about-section"
        >

          <div className="section-container about-grid">


            <div className="about-image-wrapper">

              <img
                src={farm1}
                alt="Morya Dairy Farms"
                className="about-image"
              />

              <div className="image-caption">
                MORYA DAIRY FARMS
              </div>

            </div>


            <div className="about-content">

              <div className="section-label dark">
                02 — ABOUT
              </div>

              <p className="eyebrow">
                FARMING WITH PURPOSE
              </p>

              <h2>
                Simple practices.
                <br />
                <em>Better results.</em>
              </h2>

              <p>
                Morya Dairy Farms focuses on
                maintaining a clean, organized
                and responsible dairy environment.
              </p>

              <p>
                From daily cattle care to farm
                management, every part of the
                operation is handled with
                consistency and attention.
              </p>


              <a
                href="#contact"
                className="text-link"
              >
                Visit & Connect
                <span>→</span>
              </a>

            </div>

          </div>

        </section>



        {/* =========================================
            STATS
        ========================================= */}

        <section className="stats-section">

          <div className="section-container stats-grid">


            <div className="stat">

              <strong>
                01
              </strong>

              <span>
                QUALITY
              </span>

            </div>


            <div className="stat">

              <strong>
                02
              </strong>

              <span>
                CARE
              </span>

            </div>


            <div className="stat">

              <strong>
                03
              </strong>

              <span>
                CONSISTENCY
              </span>

            </div>


            <div className="stat">

              <strong>
                04
              </strong>

              <span>
                TRUST
              </span>

            </div>


          </div>

        </section>



        {/* =========================================
            GALLERY
        ========================================= */}

        <section
          id="gallery"
          className="gallery-section section-light"
        >

          <div className="section-container">


            <div className="gallery-heading">

              <div>

                <div className="section-label">
                  03 — GALLERY
                </div>

                <h2>
                  Life at
                  <br />
                  <em>Morya.</em>
                </h2>

              </div>

              <p>
                A glimpse into our farm,
                everyday work and the
                environment around us.
              </p>

            </div>


            <div className="gallery-grid">


              <div className="gallery-item">

                <img
                  src={farm1}
                  alt="Morya Dairy Farms"
                  className="gallery-image"
                />

              </div>


              <div className="gallery-item">

                <img
                  src={farm2}
                  alt="Morya Dairy Farms"
                  className="gallery-image"
                />

              </div>


              <div className="gallery-item">

                <img
                  src={farm3}
                  alt="Morya Dairy Farms"
                  className="gallery-image"
                />

              </div>


              <div className="gallery-item">

                <img
                  src={farm4}
                  alt="Morya Dairy Farms"
                  className="gallery-image"
                />

              </div>


              <div className="gallery-item">

                <img
                  src={farm5}
                  alt="Morya Dairy Farms"
                  className="gallery-image"
                />

              </div>


              <div className="gallery-item">

                <img
                  src={farm6}
                  alt="Morya Dairy Farms"
                  className="gallery-image"
                />

              </div>


            </div>

          </div>

        </section>



        {/* =========================================
            VIDEOS
        ========================================= */}

        <section
          id="videos"
          className="videos-section"
        >

          <div className="section-container">


            <div className="videos-heading">

              <div>

                <div className="section-label dark">
                  04 — VIDEOS
                </div>

                <h2>
                  See the farm
                  <br />
                  <em>in motion.</em>
                </h2>

              </div>

              <p>
                Watch real moments from
                Morya Dairy Farms.
              </p>

            </div>


            <div className="video-grid">


              <div className="video-card">

                <video
                  src={video1}
                  controls
                  preload="metadata"
                  playsInline
                />

                <span>
                  FARM MOMENT 01
                </span>

              </div>


              <div className="video-card">

                <video
                  src={video2}
                  controls
                  preload="metadata"
                  playsInline
                />

                <span>
                  FARM MOMENT 02
                </span>

              </div>


              <div className="video-card">

                <video
                  src={video3}
                  controls
                  preload="metadata"
                  playsInline
                />

                <span>
                  FARM MOMENT 03
                </span>

              </div>


              <div className="video-card">

                <video
                  src={video4}
                  controls
                  preload="metadata"
                  playsInline
                />

                <span>
                  FARM MOMENT 04
                </span>

              </div>


            </div>

          </div>

        </section>



        {/* =========================================
            INSTAGRAM
        ========================================= */}

        <section className="instagram-section">

          <div className="section-container instagram-grid">


            <div className="instagram-content">

              <div className="section-label dark">
                05 — INSTAGRAM
              </div>

              <p className="eyebrow">
                FOLLOW THE JOURNEY
              </p>

              <h2>
                More moments.
                <br />
                <em>Every day.</em>
              </h2>

              <p>
                Follow Morya Dairy Farms for
                farm updates, cattle videos,
                daily routines and more.
              </p>


              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="instagram-main-button"
              >

                <span className="instagram-small-icon">
                  ◎
                </span>

                <span>
                  Follow on Instagram
                </span>

                <span>
                  ↗
                </span>

              </a>

            </div>



            <div className="instagram-visual">

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="instagram-logo-link"
              >

                <div className="instagram-logo-box">

                  <div className="instagram-logo">

                    <span className="instagram-camera">
                    </span>

                  </div>

                </div>


                <span className="instagram-handle">
                  @morya_dairy_farm_
                </span>


                <span className="instagram-follow">
                  FOLLOW ON INSTAGRAM ↗
                </span>

              </a>

            </div>


          </div>

        </section>



        {/* =========================================
            CONTACT
        ========================================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="section-container contact-grid">


            <div>

              <div className="section-label dark">
                06 — CONTACT
              </div>

              <h2>
                Come
                <br />
                <em>connect.</em>
              </h2>

              <p>
                Follow our journey online or
                visit us at Alephata, Pune.
              </p>

            </div>



            <div className="contact-links">


              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >

                <span>
                  Instagram
                </span>

                <span>
                  ↗
                </span>

              </a>


              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >

                <span>
                  YouTube
                </span>

                <span>
                  ↗
                </span>

              </a>


              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >

                <span>
                  Google Maps
                </span>

                <span>
                  ↗
                </span>

              </a>


            </div>

          </div>

        </section>

      </main>



        {/* Floating WhatsApp Enquiry Button */}
      <a
       href="https://wa.me/918983741022?text=Hello%20Morya%20Dairy%20Farms!%20I%20am%20interested%20in%20your%20dairy%20products.%20Could%20you%20please%20share%20more%20details%3F"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Morya Dairy Farms on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
          />
        </svg>

        <span>Enquire on WhatsApp</span>
      </a>



      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="footer">
  <div className="footer-inner">
    <div className="footer-brand">
      <img src={logo} alt="Morya Dairy Farms" />
      <p>Morya Dairy Farms</p>
    </div>

    <div className="footer-credit">
      <p>
        © 2026 Morya Dairy Farms · Designed & Developed by{" "}
        <a
          href="https://github.com/chaitanyapingaleAC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chaitanya Pingale
        </a>
      </p>
    </div>
  </div>
</footer>


    </div>
  );
}


export default App;