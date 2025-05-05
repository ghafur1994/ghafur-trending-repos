"use client";

import { ITrendingReposCardProps } from "../../interfaces/trending.interface";

const TrendingReposCard = ({ data }: ITrendingReposCardProps) => {
  return (
    <div>
      <h2>Trending Repositories</h2>
      <ul>
        {data && data.map((repo: any, index: number) => (
          <li key={index}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingReposCard;
