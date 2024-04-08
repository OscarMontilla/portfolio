
import './App.css'
import { Header } from './componentes/header'
import { AboutMe } from './componentes/aboutme'
import { Contact } from './componentes/contact'
import { Footer } from './componentes/footer'
import { Home } from './componentes/home'
import { Projects } from './componentes/projects'


function App() {
  

  return (
    <>
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Projects />
      </div>
      <div
  
>
        <Contact></Contact>
      </div>
      <div>
        <Footer />
      </div>
        
    </div>
    </>
    
    
  )
}

export default App
