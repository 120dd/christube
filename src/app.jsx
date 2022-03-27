import './app.css';
import Header from "./component/header";
import MainPageList from "./component/mainPageList";
import {useEffect, useState} from "react";

function App({youtube}) {
    const [listData, setListData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    const getPopularData = () => {
        youtube.getPopular()
            .then(result => setListData(result))
        setSelectedData(null);
    }

    const handleSearching = (quary) => {
        youtube.searching(quary)
            .then(result => setListData(result))
    }

    const handleSelect = (video) => {
        setSelectedData(video);
    }

    return (
        <>
            <Header
                onSerch={handleSearching}
                getPopularData={getPopularData}
            />
            <MainPageList
                listData={listData}
                getPopularData={getPopularData}
                onSerching={handleSearching}
                onSelect={handleSelect}
                selectedData={selectedData}
            />
        </>
    );
}

export default App;
