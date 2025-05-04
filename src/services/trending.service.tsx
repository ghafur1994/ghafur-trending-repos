import axios from 'axios';
import { ITrendingParamData } from '../interfaces/trending';

const BASE_URL = 'https://api.github.com/search/repositories';


const fetchTrendingRepos = async ({
  createdAfter,
  sort,
  order,
  page,
  pageSize
}: ITrendingParamData) => {
  try {

    console.log(`Debugs: ${createdAfter} - ${sort} - ${order} - ${page} - ${pageSize}`)
    const response = await axios.get(BASE_URL, {
      params: {
        q: `created:>${createdAfter}`,
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