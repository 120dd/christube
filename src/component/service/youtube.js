import axios from "axios";

class Youtube {
    constructor(key) {
        this.youtube = axios.create(
            {
                baseURL: 'https://youtube.googleapis.com/youtube/v3',
                params:{ key: key},
            }
        )
    }

    async getPopular() {
        try {
            const response = await this.youtube.get('videos',{
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults: 25,
                    regionCode: 'kr',
                }
            })
            return response.data.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    async searching(quary) {
        try {
            const response = await this.youtube.get('search',{
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    quary: quary,

                }
            })
            return response.data.items.map(item => ({...item, id: item.id.videoId}));

        } catch (error) {
            return console.log('error', error);
        }
    }
}

export default Youtube;