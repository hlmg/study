import React from 'react';

async function getPost(postId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`, {next: {revalidate: 10}});

  if (!res.ok) {
    // 가장 가까운 error 파일이 실행됨
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

const PostDetailPage = async ({params}: any) => {
  const post = await getPost(params.id);
  return (
    <div>
      <h1>post/{post.id}</h1>
      <div>
        <h3>{post.title}</h3>
        <p>{post.created}</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
