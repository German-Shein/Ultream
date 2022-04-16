export const Configuration =
{
	API_Key: process.env.API_Key,
	API_URL: 'https://api.themoviedb.org/3',
	Image_URL: 'http://image.tmdb.org/t/p',
	Language: 'en-US',
	Popular_Movies_URL: `${API_URL}/movie/popular?api_key=${API_Key}&language=${Language}`,
	Search_URL: `${API_URL}/search/movie?api_key=${API_Key}&language=${Language}&query=`
};