import fetch from 'node-fetch';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// id一覧を取得
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// idから個別データを取得
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}`));
  const post = await res.json();

  return {
    post,
  };
}
