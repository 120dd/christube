import React, {useEffect,} from 'react';
import ListItem from "./listItem";
import ItemDetail from "./itemDetail";
import styles from "./mainPageList.module.css";

const MainPageList = ({listData, onSerching, getPopularData, onSelect, selectedData,}) => {
    useEffect(getPopularData, []);

    return (
        <div className={selectedData && styles.container}>
            {selectedData &&
            <ItemDetail selectedData={selectedData}/>
            }
            <ul>
                {listData.map(item => {
                        return <ListItem
                            key={item.id}
                            imgSrc={item.snippet.thumbnails.high.url}
                            title={item.snippet.title}
                            channelName={item.snippet.channelTitle}
                            onSelect={onSelect}
                            item={item}
                        />
                    }
                )}
            </ul>
        </div>
    )
};

export default MainPageList;