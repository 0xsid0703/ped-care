"use client";

import Footer from "./components/landing/Footer";
import Hero from "./components/landing/Hero";
import LearnMore from "./components/landing/LearnMore";
import Review from "./components/landing/Review";
import Summary from "./components/landing/Summary";
import Video from "./components/landing/Video";
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Summary />
      <LearnMore />
      <Review />
      <Video />
      <Footer />
    </div>
  );
}
