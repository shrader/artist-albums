import axios from 'axios';

class Api {
  static async getAlbums(artistName) {
    const ITUNES_API = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album`;
    const resp = await axios.get(ITUNES_API);
    return resp.data;
  }
}

export default Api;
