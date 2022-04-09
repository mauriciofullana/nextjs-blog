import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  const fileContent = fs.readFileSync(
    path.join(POSTS_DIRECTORY, fileName),
    'utf-8'
  );
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ''); // removes file extension
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(POSTS_DIRECTORY);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
