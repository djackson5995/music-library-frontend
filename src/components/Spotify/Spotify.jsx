const authEndpoint = "hhtp://accounts.spotify.com/authorize?";
const clientId = "4e66e01422104079af833e9a9d1ed8fd";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope${scopes.join(
  "%20"
)}&reponse_type=token$show_dialog=true`;
