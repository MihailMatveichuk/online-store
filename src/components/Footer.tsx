import '../style.css';
import { Link } from 'react-router-dom';
import { LINKS_FOOTER } from '../footer_links/links'
import { FooterLogos } from './FooterLogos'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container footer__container--top">
      <Link to="/" title="Logo">
          <h1>Online store</h1>
        </Link>
        <div className="footer__links">
            <FooterLogos altClass='footer__logos' logos={LINKS_FOOTER} />
        </div>
      </div>
      <div className="container footer__container footer__container--bottom">
        <p className="footer__copyright">2023</p>
      </div>
    </footer>
  )
}
