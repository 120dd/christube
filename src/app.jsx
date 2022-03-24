import './app.css';
import Header from "./component/header";
import MainPageList from "./component/mainPageList";
import {useState} from "react";

function App() {
    const [listData, setListData] = useState([]);

    const getPopularData = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,player,id&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyBX10sxcM8ai2bPF7pkrJH8dGu0P3yH4kY", requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => {
                return setListData(result.items)
            })
            .catch(error => console.log('error', error))
    }

    const handleSearching = (quary) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${quary}&type=video&key=AIzaSyBX10sxcM8ai2bPF7pkrJH8dGu0P3yH4kY`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => {
                return setListData(result.items)
            })
            .catch(error => console.log('error', error));
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
            />
        </>
    );
}

export default App;
