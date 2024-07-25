import axios, { AxiosResponse } from "axios";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getPost = async (params: string): Promise<Post> => {
    const result: AxiosResponse<Post> = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params}`
    );
    return result.data;
};

export const getPosts = async (): Promise<Post[]> => {
    const result: AxiosResponse<Post[]> = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/`
    );
    return result.data;
};
