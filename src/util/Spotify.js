const clientId = '12149a66ee094593afb87824562f886b';
const redirectUri = 'http//:localhost:3000/';

let accessToken; 

const Spotify = {


    getAccessToken() {
        if (accessToken) {
            // wenn es einen gibt, soll dieser zurückgegeben werden 
            return accessToken;
        } 
        // prüfen, ob es einen access token gibt:
        //reguläre Ausdrücke, nach denen man in der URL suchen kann und somit den access Token und die Länge der Gülitgkeit extrahieren kann 
        const accessTokenMatch = window.location.href.match( /accessToken= ([^&]*) /);
        const expiresInMatch = window.location.href.match( /expires_in=([^&]*) /);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000 );
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }

    },

    search(searchTerm) {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
          }).then(response => {
              response.json();
          }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            } return jsonResponse.tracks.items.map( track => ({
                id: track.id,
                name: track.name,
                artist: track.artist[0].name,
                album: track.album.name, 
                uri: track.uri
                
            }))
        });
    },

    savePlaylist (name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        } 
        // accessToken Variable entspricht dem Access Token des jeweiligen Users
        const accessToken = Spotify.getAccessToken();
        // headers Variable entspricht dem headers Objekt für die fetch Methode s.u. 
        const headers = {Authorization: `Bearer ${accessToken}`}
        // wird die fetch Methode gebraucht --> jsonResponse.id wird gleich der userId gesetzt
        let UserId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
            response.json();
        }).then(jsonResponse => {
            UserId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${UserId}/playlists`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({name: name})
            }).then(response => response.json()).then(
                jsonResponse => {
                    const playlistId = jsonResponse.id;
                }
            )
        })
        
    }
};

export default Spotify;