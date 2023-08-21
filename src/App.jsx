import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import JobFinderDemo  from './pages/JobFinderDemo'

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Toaster />
    </div>
  )
}

const JobFinder = () => {
  return (
    <div className="bg-primary w-full min-h-screen">
      <JobFinderDemo />
    </div>
  )

}


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/react-native-job-finder" element={<JobFinder />} />
        </Routes>        
      </BrowserRouter>
  )
}

export default App
