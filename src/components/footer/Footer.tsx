import './Footer.scss';
import NavLinkTemplate from '../layout/button/NavLinkTemplate';

const Footer= () => {
    return (
        <footer>
            <li><NavLinkTemplate content={'Contact us'} to={'/ContactUs'}></NavLinkTemplate></li>
            <li><NavLinkTemplate content={'Terms of Use'} to={'/TermsOfUse'}></NavLinkTemplate></li>
            <li><NavLinkTemplate content={'Privacy Policy'} to={'/PrivacyPolicy'}></NavLinkTemplate></li>
        </footer>
    )
}

export default Footer;

