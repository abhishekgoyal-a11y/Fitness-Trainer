import { CtaBanner } from './components/CtaBanner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Membership } from './components/Membership'
import { Programs } from './components/Programs'
import { StickyHeader } from './components/StickyHeader'
import { Testimonials } from './components/Testimonials'
import { Trainers } from './components/Trainers'
import { Transformation } from './components/Transformation'
import { WhyChooseUs } from './components/WhyChooseUs'

function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-20 z-[60] -translate-y-24 rounded bg-white px-3 py-2 text-sm font-semibold text-surface opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Skip to content
      </a>
      <StickyHeader />
      <main id="main" className="scroll-mt-24">
        <Hero />
        <Programs />
        <Transformation />
        <Membership />
        <Trainers />
        <WhyChooseUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
