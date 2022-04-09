import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import classes from './post-content.module.css';

function PostContent({ post }) {
  console.log(post.title);
  console.log(post.date);
  console.log(post.content);
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
