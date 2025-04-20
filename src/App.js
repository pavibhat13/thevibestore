import './App.css';
import { useEffect, useState, useRef } from 'react';
// Import EmailJS when you install the package
// import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Prevent multiple submissions
    setIsSubmitting(true);

    // When you install EmailJS, uncomment this code and replace with your actual service, template, and user IDs
    /*
    emailjs.sendForm(
      'YOUR_SERVICE_ID',  // Create a service on EmailJS dashboard and use its ID
      'YOUR_TEMPLATE_ID', // Create an email template and use its ID
      form.current,
      'YOUR_PUBLIC_KEY'   // Your EmailJS public key
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! Your email has been sent to pavithravbhat113@gmail.com'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error.text);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error sending your message. Please try again later.'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    });
    */

    // This is temporary until you set up EmailJS
    // Remove this code block when you uncomment the EmailJS code above
    setTimeout(() => {
      console.log(`Sending email to pavithravbhat113@gmail.com with the following data:`, formData);
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! Your email has been sent to pavithravbhat113@gmail.com'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setIsSubmitting(false);

      // Reset status message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1500); // Simulate network delay
  };

  useEffect(() => {
    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
          }
        });
      },
      { threshold: 0.6 } // Adjusted threshold for better accuracy
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll function for navigation links
  const scrollToSection = (e) => {
    if (e.target.hash) {
      e.preventDefault();
      const targetSection = document.querySelector(e.target.hash);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="App">
      <header>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} `}>
        
          <button className="toggle-navbar" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={scrollToSection}><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#works" onClick={scrollToSection}><i className="fas fa-fire"></i> Works</a></li>
            <li><a href="#about" onClick={scrollToSection}><i className="fas fa-info-circle"></i> About</a></li>
            <li><a href="#fragrance" onClick={scrollToSection}><i className="fas fa-leaf"></i> Fragrance</a></li>
            <li><a href="#testimonials" onClick={scrollToSection}><i className="fas fa-comment"></i> Testimonials</a></li>
            <li><a href="#contact" onClick={scrollToSection}><i className="fas fa-envelope"></i> Contact</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-link"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="section">
          <div className="section-content">
            <h1>Welcome to The Vibe Store</h1>
            <p>Your destination for handmade candles crafted from natural and sustainable ingredients.</p>
            <div className="home-features">
              <div className="feature">
                <i className="fas fa-leaf"></i>
                <span>Natural Ingredients</span>
              </div>
              <div className="feature">
                <i className="fas fa-recycle"></i>
                <span>Eco-Friendly</span>
              </div>
              <div className="feature">
                <i className="fas fa-hand-holding-heart"></i>
                <span>Handcrafted</span>
              </div>
            </div>
            <a href="#works" className="btn" onClick={scrollToSection}>Explore Our Collection</a>
          </div>
        </section>

        <section id="works" className="section">
          <div className="section-content">
            <h2>Our Works</h2>
            <p>Explore our unique collection of candles and bottle art, each piece carefully crafted to bring warmth and ambiance to your space.</p>

            <div className="product-grid">
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Lavender Candle" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Lavender Dreams</h3>
                  <p className="product-description">Soothing lavender scent in a handcrafted soy wax candle.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1602523961358-f9f03dd557db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Vanilla Candle" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Vanilla Comfort</h3>
                  <p className="product-description">Warm vanilla notes in a recycled glass container.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1596433809252-d6a10e9ffea7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Bottle Art" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Ocean Bottle Art</h3>
                  <p className="product-description">Upcycled bottle transformed into a decorative piece.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-content">
            <h2>About Us</h2>
            <div className="about-content">
              <div className="about-text">
                <p>At The Vibe Store, we are passionate about creating beautiful, sustainable products that bring joy and tranquility to your home. Our journey began with a simple love for crafting and a commitment to environmental consciousness.</p>
                <p>Each of our candles is handcrafted using only natural soy wax, cotton wicks, and premium essential oils. We believe in sustainable practices, which is why we use recycled glass containers and eco-friendly packaging.</p>
                <p>Our bottle art collection gives new life to discarded glass, transforming it into unique decorative pieces that tell a story and add character to any space.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Artisans at Work" className="about-image" />
            </div>
          </div>
        </section>

        <section id="fragrance" className="section">
          <div className="section-content">
            <h2>Fragrance Collection</h2>
            <p>Discover our range of delightful fragrances, each carefully selected to create a unique atmosphere in your space.</p>

            <div className="product-grid">
              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Citrus Blend" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Citrus Sunshine</h3>
                  <p className="product-description">Energizing blend of orange, lemon, and grapefruit.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sandalwood" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Sandalwood Serenity</h3>
                  <p className="product-description">Rich, woody aroma with hints of vanilla and amber.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Eucalyptus Mint" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Eucalyptus Mint</h3>
                  <p className="product-description">Refreshing blend that clears the mind and invigorates the senses.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Rose Garden" className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">Rose Garden</h3>
                  <p className="product-description">Delicate floral scent that brings the garden indoors.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="section-content">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-container">
              <div className="testimonial-card">
                <p className="testimonial-text">"These candles are amazing! The scents are so refreshing and natural, not overwhelming like commercial brands. I love how they're made with sustainable materials too."</p>
                <p className="testimonial-author">- Sarah Johnson</p>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-text">"I received the Ocean Bottle Art as a gift and was blown away by the craftsmanship. It's now the centerpiece of my living room and I've since ordered several candles as well."</p>
                <p className="testimonial-author">- Michael Torres</p>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-text">"The Eucalyptus Mint candle has become my go-to for relaxing after a long day. Burns evenly and the scent is perfect - subtle but noticeable. Will definitely be ordering more!"</p>
                <p className="testimonial-author">- Emma Wilson</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-content">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have questions about our products, custom orders, or wholesale inquiries, reach out to us.</p>

            {/* <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  className="form-control" 
                  rows="5" 
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <input type="hidden" name="to_email" value="pavithravbhat113@gmail.com" />
              
              {formStatus.message && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              <button 
                type="submit" 
                className="btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <p className="form-note">Your message will be sent directly to pavithravbhat113@gmail.com</p>
            </form> */}

            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> Email: <a href="mailto:pavithravbhat113@gmail.com" className="email-link">pavithravbhat113@gmail.com</a></p>
              <p><i className="fas fa-phone"></i> Phone: (555) 123-4567</p>
              <p><i className="fas fa-map-marker-alt"></i> Address: 123 Candle Lane, Fragrance City, FC 12345</p>
              <p><i className="fas fa-heart"></i> Follow us on <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-link"><i className="fab fa-instagram"></i> Instagram</a> for updates and special offers!</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} The Vibe Store. All rights reserved.</p>
        <p>Handcrafted with love and sustainable materials.</p>
      </footer>
    </div>
  );
}

export default App;
