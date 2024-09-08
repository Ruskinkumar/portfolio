import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector('.return-to-top');
      if (window.scrollY > 600) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>© copyright Ruskin Kumar. Designed and developed by Ruskin Kumar</p>
        </div>
      </div>
      <div id="scroll-Top">
        <div className="return-to-top" style={{ display: 'none' }} onClick={scrollToTop}>
          <i className="fa fa-angle-up" id="scroll-top" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
