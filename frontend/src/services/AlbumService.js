import axios from 'axios'; 

const ALBUM_API_BASE_URL = "https://crud.bielarski.org"; 

class AlbumService { 

    addAlbum(album) { // OKAY
        return axios.post(ALBUM_API_BASE_URL + '/addAlbum', album); 
    }

    getAlbumById(albumId) { 
        return axios.get(ALBUM_API_BASE_URL + '/getAlbum/' + albumId); 
    }

    getAllAlbums() { // OKAY
        return axios.get(ALBUM_API_BASE_URL + '/getAllAlbums'); 
    }

    deleteAlbum(album) {
        return axios.delete(ALBUM_API_BASE_URL + '/deleteAlbum', { data: album }); 
    }

    updateAlbum(album) { 
        return axios.put(ALBUM_API_BASE_URL + '/updateAlbum', album);  
    }

}

export default new AlbumService()