import { Configuration } from "./Configuration";

const API = 
{
	Get_the_Movies: async (Page, Search_Term) => 
	{
		return await (await fetch (searchTerm ? `${Configuration.Search_URL}${Search_Term}&page=${Page}` : `${Configuration.Popular_Movies_URL}&page=${Page}`)).json ();
	},
	Get_a_Movie: async Movie_ID =>
	{
		return await (await fetch (`${Configuration.API_URL}/movie/${Movie_ID}?api_key=${Configuration.API_Key}`)).json ();
	},
	Get_Credits: async Movie_ID =>
	{
		return await (await fetch (`${Configuration.API_URL}/movie/${Movie_ID}/credits?api_key=${Configuration.API_Key}`)).json ();
	}
};

export default API;