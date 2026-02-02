export const Footer = () => {
  return (
    <footer>
      <div className="footer-horizon">
        <div className="footer-start">
          <h6>Features</h6>
          <ul>
            <li><a href="#" target="_blank">Help Center</a></li>
            <li><a href="#" target="_blank">About</a></li>
            <li><a href="#" target="_blank">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-mid">
          <h6>Get to Know</h6>
          <ul>
            <li><a href="#" target="_blank">Services</a></li>
            <li><a href="#" target="_blank">Blog</a></li>
            <li><a href="#" target="_blank">Agency</a></li>
          </ul>
        </div>
        <div className="footer-end">
          <address>
            <h6>Main Software</h6>
            <p>
              baker street 123 #18-b
              <br />
              Ungland
            </p>
            <p>
              made by: {import.meta.env.VITE_AUTOR}
            </p>
            <p>
              Phone: <a href="tel:+573134917109">+1 (555) 5555555</a>
            </p>
            <p>
              Email:{""}
              <a href="mailto:contact@company.com">{import.meta.env.VITE_EMAIL_AUTOR}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved &copy;</p>
      </div>
    </footer>
  );
};
