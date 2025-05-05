"use client";

import { ITrendingReposCardProps } from "../../interfaces/trending.interface";
import { FaStar, FaBook } from 'react-icons/fa';
import { BsDatabase } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendingReposCard = ({ data }: ITrendingReposCardProps) => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data && data.map((repo: any, index: number) => (
          <div className="col" key={index}>
            <div className="card h-100 text-center">
              <div className="card-header">
                {repo.owner.login}
              </div>
              <div className="card-body">
                <img
                  src={repo.owner.avatar_url}
                  alt={`${repo.owner.login} avatar`}
                  className="rounded-circle mb-2"
                  width={64}
                  height={64}
                />
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text"><FaBook className="me-1" />{repo.description || 'No Description'}</p>
                <p className="card-text"><FaStar className="me-1" />{repo.stargazers_count}</p>
                <a href={repo.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
              </div>
              <div className="card-footer text-muted">
                <BsDatabase className="me-1" />{repo.language || 'Unknown'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingReposCard;