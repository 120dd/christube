import React from 'react';
import styles from './listItem.module.css';

const ListItem = ({imgSrc, title, channelName, onSelect, item}) => {
    const onClick = () => {
        onSelect(item);
    }

    return (
        <>
            <li onClick={onClick} className={styles.listItem}>
                <div className={styles.thumbnail}>
                    <img src={imgSrc} alt=""/>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.channelName}>{channelName}</span>
                </div>
            </li>
        </>
    )
};

export default ListItem;