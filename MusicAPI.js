import axios from 'axios';

const MusicAPI=()=>{
    const data = new FormData();

    const options = {
    method: 'POST',
    url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist',
    headers: {
        'x-rapidapi-key': 'b16692397amsh25d1094e8b9b8ebp19c2aejsn26e0452c7a9b',
        'x-rapidapi-host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
    },
    data: data
    };

    try {
        const response = axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    console.log(data)

    return (
        <>

        </>
    )
}

export default MusicAPI