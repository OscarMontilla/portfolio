
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
  style={{
    backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/common-bg.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
  }}
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
