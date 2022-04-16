import API from '../API';
import { useEffect, useState } from 'react';

export const useMovieRetrival = () =>
{
	const [Error, Set_Error] = useState (false);
	const [Loading_Status, Set_Loading_Status] = useState (false);
	const [State, Set_State] = useState ({page: 0, results: [], total_pages: 0, total_results: 0});
	const [Search_Term, Set_Search_Term] = useState ('');

	const Get_the_Movies = async (Page, Search_Term = '') =>
	{
		try
		{
			const Movies = await API.Get_the_Movies (Page, Search_Term);
			Set_Error (false);
			Set_Loading_Status (true);
			Set_State (prev => ({...Movies, results: Page > 1 ? [...prev.results, ...Movies.results] : [...Movies.results]}));
		}
		catch
		{
			Set_Error (true);
		}
		finally
		{
			Set_Loading_Status (false)
		}
	}

	return {Error, Loading_Status, Search_Term, Set_Search_Term, State}
}