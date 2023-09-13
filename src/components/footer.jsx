import React from 'react';
import './Styles.css';

function Footer() {
  return (
    <>
    <div>
      <footer className="footer">
        <section>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-youtube"></a>
          </div>

          <div className="credit">
            &copy; copyright @ 2023 by <span>Shubhodeep Banerjee</span> | all
            rights reserved!
          </div>
        </section>
      </footer>
    </div>
    </>
  );
}

export default Footer;
