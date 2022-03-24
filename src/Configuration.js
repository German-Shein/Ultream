const API_Key = process.env.API_Key;
const API_URL = 'https://api.themoviedb.org/3/';
const Image_URL = 'http://image.tmdb.org/t/p/';
const Language = 'en-US';
const Login_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_Key}`;
const Popular_Movies_URL = `${API_URL}movie/popular?api_key=${API_Key}&language=${Language}`;
const Request_Token_URL = `${API_URL}authentication/token/new?api_key=${API_Key}`;
const Search_URL = `${API_URL}search/movie?api_key=${API_Key}&language=${Language}&query=`;
const Session_ID_URL = `${API_URL}authentication/session/new?api_key=${API_Key}`;

export {
	API_Key,
	API_URL,
	Image_URL,
	Language,
	Login_URL,
	Popular_Movies_URL,
	Request_Token_URL,
	Search_URL,
	Session_ID_URL,
};