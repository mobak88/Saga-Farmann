import { useState } from "react";
import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogCard from "../../components/cards/blogCard/BlogCard";
import Header from "@/components/header/Header";
import styles from "./blog.module.css";
import { Post } from "../../components/blog/interfaces";
import Head from "next/head";
import CardSkeleton from "@/components/skeletons/card/CardSkeleton";

interface Posts {
  posts: Post[];
}

const BlogPage = ({ posts }: Posts) => {
  const [visibleCount, setVisibleCount] = useState(12);

  if (!posts)
    return (
      <>
        <Header header={"Blog"} />
        <div className={styles["blog-skeleton-wrapper"]}>
          <CardSkeleton />
        </div>
      </>
    );
  return (
    <>
      <Head>
        <title>Saga Farmann blog</title>
        <meta name="description" content="Saga Farman blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={"Blog"} />
      <div className={styles["blog-page-wrapper"]}>
        <div className={styles["blog-page-container"]}>
          {posts.slice(0, visibleCount).map((post: Post) => (
            <BlogCard
              id={post.id}
              key={post.id}
              post_image={
                post.acf.post_first_section.post_images[0].post_image.url
              }
              alt={post.acf.post_first_section.post_images[0].post_image.alt}
              date={post.date}
              title={post.title.rendered}
              post_description={post.acf.post_description}
              blog_place={post.acf.blog_place}
            />
          ))}
        </div>
        {visibleCount < posts.length && (
          <button
            className={styles["show-more-btn"]}
            onClick={() => setVisibleCount((prev) => prev + 12)}
          >
            Show more posts
          </button>
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Posts> = async () => {
  const res = await fetch(API_ENDPOINTS.blogPosts);

  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
