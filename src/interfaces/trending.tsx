export interface ITrendingParamData {
    createdAfter:string;
    sort: string;
    order: 'asc' | 'desc';
    page: number;
    pageSize: number;
}

export interface ITrendingReposItemData {
    id: number;
    name : string;
    full_name: string;
    description: string | null;
    stargazers_count: number;
}

export interface ITrendingReposData {
    total_count: number,
    incomplete_results: boolean;
    items: ITrendingReposItemData[];
}