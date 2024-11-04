import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Importing Page Components
const Home = lazy(() =>import('./pages/Home/Home')) 
const About = lazy(() =>import('./pages/About/About')) 
const Services = lazy(() =>import('./pages/Services/Services')) 
const News = lazy(() =>import('./pages/News/News')) 
const Contact = lazy(() =>import('./pages/Contact/Contact')) 
const NotFound = lazy(() =>import('./pages/NotFound/NotFound')) 


function App() {

  return (
   <Router>
    <div>
      <Navbar />
      
      <main>
        <Suspense fallback={<div>Loading...</div>}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            
            {/* 404 Page not Found Route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        
        </Suspense>
      </main>

      <Footer />
    </div>
   </Router>
  )
}

export default App
