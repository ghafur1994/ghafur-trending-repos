"use client"

import { useEffect, useState } from "react";
import trendingService from "../../services/trending.service";
import { ITrendingReposItemData } from "../../interfaces/trending.interface";
import CircularProgress from '@mui/material/CircularProgress';

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [trendingData, setTrendingData] = useState<ITrendingReposItemData[]>();
  const [loading, setLoading] = useState<boolean>(true); // Use lowercase 'boolean' instead of 'Boolean'

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await trendingService.fetchTrendingRepos({ page, pageSize });
      setTrendingData(data); // Store the fetched data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <h2>Trending Repositories</h2>
          {JSON.stringify(trendingData)}
          {/* {trendingData.map((repo, index) => (
            <div key={index}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
            </div>
          ))}  */}
        </div>
      )}
    </div>
  );
};

export default Page;
