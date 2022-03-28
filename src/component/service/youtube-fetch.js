class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async getPopular() {
        try {
            let response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,player,id&chart=mostPopular&maxResults=25&regionCode=kr&key=${this.key}`,
                this.getRequestOptions
            );
            let result = await response.json();
            return result.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    async searching(quary) {
        try {
            let response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${quary}&type=video&key=${this.key}`,
                this.getRequestOptions
            );
            let result = await response.json();
            return result.items.map(item => ({...item, id: item.id.videoId}));
        } catch (error) {
            return console.log('error', error);
        }
    }
}

export default Youtube;