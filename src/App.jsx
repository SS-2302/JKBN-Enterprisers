import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './app/components/Header';
import { Footer } from './app/components/Footer';
import { HomePage } from './app/pages/HomePage';
import {AllProjectsPage} from './app/pages/AllprojectsPage';
import {AboutPage} from './app/pages/Aboutpage'
import { ServicesPage } from './app/pages/ServicesPage';
import {ConsultationPage} from './app/pages/ConsultationPage'
import { Toaster } from "react-hot-toast";
import { ContactPage } from './app/pages/ContactPage';
import { ScrollToTop } from './app/components/ScrollTop';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Toaster position="top-right" richColors />
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />}/>
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path='/contact' element={<ContactPage />}/>
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}