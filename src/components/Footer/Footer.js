import React from 'react';

import SocialLinks from '../SocialLinks';
import FooterLinks from '../FooterLinks';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <SocialLinks />
            <FooterLinks />
        </footer>
    );
}

export default Footer;
