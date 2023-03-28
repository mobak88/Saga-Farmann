import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogCard from "../../components/cards/blogCard/blogCard";
import Header from "@/components/header/header";
import styles from "./blog.module.css";
import { Post } from "./[id]";

interface Posts {
  posts: Post[];
}

const BlogPage = ({ posts }: Posts) => {
  return (
    <>
      <Header header={"Blog"} />
      <div className={styles["blog-page-wrapper"]}>
        {posts.map((post: Post) => (
          <BlogCard
            id={post.id}
            key={post.id}
            post_image={post.acf.post_first_section.post_images[0].post_image}
            modified={post.modified}
            title={post.title.rendered}
            post_description={post.acf.post_description}
          />
        ))}
      </div>
    </>
  );
  //  NOT WORKING ???? Se error melding når dato brukes post_image={post.acf.post_first_section.post_images.post_image}
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
