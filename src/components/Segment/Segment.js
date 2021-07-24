import React from 'react';

import placeholderImg from './assets/thumbnail-top10-h.jpg'
import styles from './Segment.module.css';

function Segment({ title }) {
    return (
        <div className={styles.segment}>
            <p className={styles.title}>{title}</p>
            <div className={styles.row}>
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            </div>
        </div>
    );
}

export default Segment;
