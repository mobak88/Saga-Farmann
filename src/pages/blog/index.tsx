import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogCard from "../../components/cards/blogCard/blogCard";
import Header from "@/components/header/header";
import styles from "./blog.module.css";

interface Props {
  posts: Posts[];
}

interface Posts extends Props {
  id: number;
  modified: string;
  title: { rendered: string };
  acf: {
    post_first_section: PostFirstSection[];
    post_second_section: PostSecondSection;
    post_description: string;
  };
}

interface PostImages extends PostFirstSection {
  post_image: string;
}

interface PostFirstSection extends Posts {
  post_images: PostImages[];
  post_first_heading: string;
  post_first_text: string;
}

interface PostSecondSection extends Posts {
  post_second_section_headings: PostSecondSectionHeading[];
  post_second_section_texts: PostSecondSectionTexts[];
}

interface PostSecondSectionHeading extends PostSecondSection {
  post_second_section_heading: string;
}

interface PostSecondSectionTexts extends PostSecondSection {
  post_second_section_text: string;
}

// Key index eller post.id?
// Legg til locations

const BlogPage = ({ posts }: Props) => {
  return (
    <>
      <Header header={"Blog"} />
      <div className={styles["blog-page-wrapper"]}>
        {posts.map((post) => (
          <BlogCard
            id={post.id}
            post_image={
              post.acf.post_first_section[0].post_images[0].post_image
            }
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
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(API_ENDPOINTS.blogPosts);
  const posts: Posts[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};
export default BlogPage;
