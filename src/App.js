import { Header, About, Work, Skills, Footer } from './containers'
import Navbar from './components/Navbar/Navbar.jsx' 

import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
