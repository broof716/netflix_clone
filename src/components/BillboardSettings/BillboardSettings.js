import React from 'react';

import styles from './BillboardSettings.module.css';
import SettingsIcon from './SettingsIcon';
function BillboardSettings() {
    return (
        <div className={styles.billboardSettings}>
            <SettingsIcon />
        </div>
    );
}

export default BillboardSettings;
