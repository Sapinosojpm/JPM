import React from 'react'

const Contact = ({ handleFormSubmit, scrollToSection }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="https://mail.google.com/mail/u/0/#inbox" className="contact-link">sapinosojohnpaulmille@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+1234567890" className="contact-link">+639682832173</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-text">Camarines Sur, Philippines</span>
              </div>
              {/* <div className="contact-item">
                <span className="contact-label">Web3 ID:</span>
                <span className="contact-text">763acd72-d6a8-4af2-b2cc-78bc08602ef5</span>
              </div> */}
            </div>
            <div className="social-links">
              <a href="https://github.com/Sapinosojpm" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/john-paul-mille-sapinoso-474a0b276/" className="social-link">LinkedIn</a>
              <a href="https://www.facebook.com/johnpaulmille.sapinoso.7" className="social-link">Facebook</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input type="hidden" name="access_key" value="763acd72-d6a8-4af2-b2cc-78bc08602ef5" />
            <input type="hidden" name="subject" value="New Portfolio Contact" />
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" className="form-input" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 