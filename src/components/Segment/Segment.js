import React from 'react';

import placeholderImg from './assets/thumbnail-top10-h.jpg'
import styles from './Segment.module.css';

function Segment({ title }) {
    return (
        <div>
            <p className={styles.title}>{title}</p>
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
            <img src={placeholderImg} alt="" />
        </div>
    );
}

export default Segment;
