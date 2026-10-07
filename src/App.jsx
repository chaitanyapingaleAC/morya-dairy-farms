import { useState } from "react";
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


  const instagramUrl =
    "https://www.instagram.com/morya_dairy_farm_?stkn=MXFxaGhqaG4wcGV0Zg==";

  const youtubeUrl =
    "https://www.youtube.com/@MoryaDairyFarmAlephata";

  const mapsUrl =
    "https://maps.app.goo.gl/WPmTRjoK6CWoriae6";


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



      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="footer">

        <div className="footer-container">


          <div className="footer-brand">

            <img
              src={logo}
              alt="Morya Dairy Farms"
            />

            <div>

              <strong>
                MORYA
              </strong>

              <span>
                DAIRY FARMS
              </span>

            </div>

          </div>


          <p>
            © 2026 Morya Dairy Farms.
            All rights reserved.
          </p>


          <a
            href="#home"
            className="back-top"
          >
            BACK TO TOP ↑
          </a>


        </div>

      </footer>


    </div>
  );
}


export default App;