import React, {useEffect, useState} from 'react';
import ListItem from "./listItem";

const MainPageList = ({listData, onSerching, getPopularData}) => {
    useEffect(getPopularData, []);
    console.log(listData);

    return (
        <ul>
            {listData.map(item => {
                    return <ListItem
                        key={item.id}
                        imgSrc={item.snippet.thumbnails.high.url}
                        title={item.snippet.title}
                        channelName={item.snippet.channelTitle}
                    />
                }
            )}
        </ul>
    )
};

export default MainPageList;