"use client"

import { useEffect, useState } from "react";
import trendingService from "../../services/trending.service";
import { ITrendingReposItemData } from "../../interfaces/trending.interface";
import CircularProgress from '@mui/material/CircularProgress';
import ResponsivePaginationComponent from "react-responsive-pagination";
import TrendingReposCard from "../cards/trending.card";
import '../../styles/pagination.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const [totalCount, setTotalCount] = useState<number>(0);
  const [trendingData, setTrendingData] = useState<ITrendingReposItemData[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [maxWidth, setMaxWidth] = useState(5);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await trendingService.fetchTrendingRepos({ page, pageSize });
      setTrendingData(data.items);
      setTotalCount(data.total_count)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  const pageCount = Math.ceil(totalCount/pageSize) 


  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(()=>{
    fetchData();
    const updateMaxWidth = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setMaxWidth(3);
      } else if (width < 768) {
        setMaxWidth(5);
      } else {
        setMaxWidth(7);
      }
    };

    updateMaxWidth();
    window.addEventListener('resize', updateMaxWidth);
    return () => window.removeEventListener('resize', updateMaxWidth);
  },[])

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="container">
          <TrendingReposCard
            data={trendingData}
          />
          <nav className="mt-4">
            <ResponsivePaginationComponent 
              current={page}
              total={pageCount}
              maxWidth={maxWidth}
              onPageChange={setPage}
              className="pagination"
            />
          </nav>
          
          
        </div>
        
      )}
    </div>
  );
};

export default Page;
