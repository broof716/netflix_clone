import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './Instagram';

import styles from './SocialLinks.module.css';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';

function SocialLinks() {
    return (
        <div className={styles.box}>
            <div className={styles.iconLink}>
                <FacebookIcon />
            </div>
            <div className={styles.iconLink}>
                <InstagramIcon />
            </div>
            <div className={styles.iconLink}>
                <TwitterIcon />
            </div>
            <div className={styles.iconLink}>
                <YoutubeIcon />
            </div>
        </div>
    );
}

export default SocialLinks;
