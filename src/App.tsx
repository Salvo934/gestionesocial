import './App.css'
import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { ProblemSolutionSection } from './components/ProblemSolutionSection'
import { CommunicateSection } from './components/CommunicateSection'
import { PackagesSection } from './components/PackagesSection'
import { ExtrasSection } from './components/ExtrasSection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <div className="pkg-page">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <CommunicateSection />
        <PackagesSection />
        <ExtrasSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
