import AboutUs from "../components/about/about.component";
import Contact from "../components/contact/contact.component";
import FAQ from "../components/faq/faq.component";
import Features from "../components/features/features.component";
import Hero from "../components/hero/hero.component";
import Pricing from "../components/pricing/pricing.component";
import Works from "../components/works/works.component";

import classes from './index.styles.module.scss';

export default function Home() {
  return (
    <div className={classes.main}>
      <Hero />
      <AboutUs />
      <Features />
      <Works />
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  )
}
