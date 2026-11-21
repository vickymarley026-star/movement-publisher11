import React from "react";
import LandingNav from "@/components/landing/LandingNav";
import Hero from "@/components/landing/Hero";
import FeaturedThisWeek from "@/components/landing/FeaturedThisWeek";
import TeamSnippet from "@/components/landing/TeamSnippet";
import About from "@/components/landing/About";
import WhyUs from "@/components/landing/WhyUs";
import WhyTrustUs from "@/components/landing/WhyTrustUs";
import Portfolio from "@/components/landing/Portfolio";
import Testimonials from "@/components/landing/Testimonials";
import VideoReviews from "@/components/landing/VideoReviews";
import ResourcesCTA from "@/components/landing/ResourcesCTA";
import NewsletterSignup from "@/components/landing/NewsletterSignup";
import LandingFooter from "@/components/landing/LandingFooter";
import NewsletterPopup from "@/components/landing/NewsletterPopup";
export default function Landing() {
  return (<div className="min-h-screen bg-white">
    <LandingNav /><Hero /><FeaturedThisWeek /><TeamSnippet /><About /><WhyUs /><WhyTrustUs />
    <Portfolio /><Testimonials /><VideoReviews /><ResourcesCTA /><NewsletterSignup />
    <LandingFooter /><NewsletterPopup />
  </div>);
}
