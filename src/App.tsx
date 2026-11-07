import { Hero } from "./components/Hero"
import { KitSection } from "./components/KitSection"
import { PlansSection } from "./components/PlansSection"
import { Footer } from "./components/Footer"

function App() {
 
  return (

    <div className="min-h-screen bg-shape-background">
    
    <Hero/>
    <KitSection />
    <PlansSection />
    <Footer />
    </div>
    

  )
}

export default App
