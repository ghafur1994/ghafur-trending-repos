import axios from 'axios';
import { ITrendingParamData } from '../interfaces/trending.interface';
import { getDateNDaysAgo } from '../utils/date.utility';

const BASE_URL = 'https://api.github.com/search/repositories';


const fetchTrendingRepos = async ({
  page,
  pageSize
}: ITrendingParamData) => {
  try {

    const sort = 'stars';
    const order = 'desc';

    console.log(`Debugs:  ${sort} - ${order} - ${page} - ${pageSize}`)
    const response = await axios.get(BASE_URL, {
      params: {
        q: `created:>${getDateNDaysAgo(10)}`,
        sort: sort,
        order: order,
        page: page,
        per_page: pageSize
      },
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching trending repos:', error);
    throw error;
  }
};

const trendingService = {
    fetchTrendingRepos,
};
  
export default trendingService;