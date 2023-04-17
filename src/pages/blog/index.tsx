import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogCard from "../../components/cards/blogCard/BlogCard";
import Header from "@/components/header/Header";
import styles from "./blog.module.css";
import { Post } from "../../components/blog/interfaces";
import CardSkeleton from "@/components/skeletons/card/CardSkeleton";

interface Posts {
  posts: Post[];
}

const BlogPage = ({ posts }: Posts) => {
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
      <Header header={"Blog"} />
      <div className={styles["blog-page-wrapper"]}>
        <div className={styles["blog-page-container"]}>
          {posts.map((post: Post) => (
            <BlogCard
              id={post.id}
              key={post.id}
              post_image={
                post.acf.post_first_section.post_images[0].post_image.url
              }
              modified={post.modified}
              title={post.title.rendered}
              post_description={post.acf.post_description}
              blog_place={post.acf.blog_place}
            />
          ))}
        </div>
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
    revalidate: 1,
  };
};

export default BlogPage;
