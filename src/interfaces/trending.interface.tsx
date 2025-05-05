export interface ITrendingParamData {
    page: number;
    pageSize: number;
}

export interface ITrendingReposItemData {
    id: number;
    owner: ITrendingReposItemOwnerData;
    name : string;
    full_name: string;
    description: string | null;
    stargazers_count: number;
}

export interface ITrendingReposItemOwnerData {
    login: string;
    avatar_url: string;
}

export interface ITrendingReposData {
    total_count: number,
    incomplete_results: boolean;
    items: ITrendingReposItemData[];
}


export interface ITrendingReposCardProps {
    data?: ITrendingReposItemData[];
}