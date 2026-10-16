import './App.css'
import Navbar from './components/Navbar';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <section id="hem" className="content-section">
          <h1>Hem</h1>
        </section>
        
        <section id="om-mig" className="content-section">
          <h2>Om mig</h2>
        </section>
        
        <section id="projekt" className="content-section">
          <h2>Projekt</h2>
        </section>
        
        <section id="kontakt" className="content-section">
          <h2>Kontakt</h2>
        </section>
      </main>
    </div>
  );
}