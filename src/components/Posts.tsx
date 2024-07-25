import { getPost, Post } from "@/service/get-data";
import React, { useCallback, useState } from "react";

interface PostsProps {
    param: number;
}
const Posts: React.FC<PostsProps> = ({ param }) => {
    const [post, setPost] = useState<Post>();
    const handleSubmit = useCallback(async (params: string) => {
        const result = await getPost(params);
        setPost(result);
    }, []);
    return (
        <>
            <ul>
                <li>{post?.userId}</li>
                <li>{post?.id}</li>
                <li>{post?.title}</li>
                <li>{post?.body}</li>
            </ul>
            <button onClick={() => handleSubmit(param.toString())}>
                クリック
            </button>
        </>
    );
};

export default Posts;
