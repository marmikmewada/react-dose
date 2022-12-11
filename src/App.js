import React from 'react';
import './App.css';
import Subscription from './components/Subscription.js';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Subscription/>  
      </header>
      <section className="hero">
        <Hero/>
      </section>
      <section className="blog">
        <Blog/>
      </section>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
