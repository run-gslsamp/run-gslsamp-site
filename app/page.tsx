// Images
import Image from "next/legacy/image";
import AllianceGrid from "../src/components/AllianceGrid";
import LandingAbout from "../src/components/LandingAbout";
import CtaBlock from "../src/components/CtaBlock";
import heroPicture from "../public/hero/hero.jpg";

// Hero Images Version 1
import image1 from "../public/hero/Hero_Carousel1.jpg";
import image2 from "../public/hero/Hero_Carousel2.jpg";
import image3 from "../public/hero/Hero_Carousel3.jpg";
import image4 from "../public/hero/Hero_Carousel4.jpg";
import image5 from "../public/hero/Hero_Carousel5.jpg";

// Hero Images Version 2 8/9/2024
import image11 from "../public/hero/Hero_Carousel1v2FIX.jpg"; //We should delete the original 2
import image22 from "../public/hero/Hero_Carousel2v2FIX.jpg";
import image33 from "../public/hero/Hero_Carousel3v2.jpg";
import image44 from "../public/hero/Hero_Carousel4v2.jpg";

// Components
import CarouselHero from "../src/components/CarouselHero";

export default function Home() {
 
  // Array of images for CarouselHero
  const heroImages = [image22, image11, image33, image44]; //image1 vs. image11 with different dimensions

  return (
    <>
      {/**Title components*/}

      {/**<Title title={"Index Page"} />*/}  
      <main className="landing-hero-container">
       
        {/* Hero Gallery */}
        <figure
          className="lg:h-96 xl:h-[35rem] md:h-72 h-44 overflow-hidden" //38rem originally, height of hero on website
          style={{
            marginTop: '-0.99rem', // Horizontal of Hero image?
            width: '100%' // Width of Hero
          }}
        >
          <CarouselHero images={heroImages} /> {/* Use CarouselHero */}
        </figure>
        <CtaBlock />
      </main>


      {/* Youtube Video */}
      <section className="flex justify-center my-8 md:my-16 md:mx-8">
        <iframe
          className="w-5/6 sm:w-2/3 h-72 md:h-96 lg:h-[28rem]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t2HxIdkXPDw?si=_Oo1PBaC7GjsO_95M"
          title="YouTube video player"
          /* frameborder="0" */
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </section>


      {/* About */}
      <LandingAbout />
      <section id="lsamp-alliance-container">
        <div className="section-header">
          <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
          <hr className="section-horizontal-line" />
        </div>
        <AllianceGrid />
      </section>
    </>
  );
}
