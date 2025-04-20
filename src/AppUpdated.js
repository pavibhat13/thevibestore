import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#fragrance">Fragrance</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-link">Instagram</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="section">
          <h1>Welcome to The Vibe Store</h1>
          <p>Your destination for handmade candles crafted from natural and sustainable ingredients.</p>
          <img src="home-image.jpg" alt="Handmade Candles" />
        </section>
        <section id="works" className="section">
          <h2>Our Works</h2>
          <p>Explore our unique collection of candles and bottle art.</p>
          <img src="works-image.jpg" alt="Candle Collection" />
        </section>
        <section id="about" className="section">
          <h2>About Us</h2>
          <p>We are dedicated to creating beautiful, sustainable products that bring joy to your home.</p>
          <img src="about-image.jpg" alt="Artisans at Work" />
        </section>
        <section id="fragrance" className="section">
          <h2>Fragrance Collection</h2>
          <p>Discover our range of delightful fragrances.</p>
          <img src="fragrance-image.jpg" alt="Fragrance Options" />
        </section>
        <section id="testimonials" className="section">
          <h2>What Our Customers Say</h2>
          <p>"These candles are amazing! The scents are so refreshing!" - Happy Customer</p>
          <img src="testimonial-image.jpg" alt="Customer with Candle" />
        </section>
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>For inquiries, reach us at: info@thevibestore.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
