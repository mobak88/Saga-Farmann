import { GetStaticPaths, GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogInfo from "@/components/blog/blogInfo/blogInfo";
import BlogImageSlider from "@/components/blog/blogImageSlider/blogImageSlider";
import Header from "@/components/header/header";
import BlogSecondText from "@/components/blog/blogSecondText/blogSecondText";
import BlogSecondHeading from "@/components/blog/blogSecondHeading/blogSecondHeading";
import styles from "./blog.module.css";

// Hele greia
interface Props {
  post: Post;
}

//posts
export interface Post extends Props {
  id: number;
  modified: string;
  title: { rendered: string };
  acf: {
    post_first_section: PostFirstSection;
    post_second_section: PostSecondSection[];
    post_description: string;
    blog_place: string;
  };
}

//posts.acf.post_first_section
interface PostFirstSection {
  post_images: PostImages[];
  post_first_heading: string;
  post_first_text: string;
}

//posts.acf.post_first_section.post_images
interface PostImages {
  post_image: string;
}

//posts.acf.post_second_section
interface PostSecondSection {
  post_second_section_heading: string;
  post_second_section_texts: PostSecondSectionTexts[];
}

//post.acf.post_second_section.post_second_section_texts
interface PostSecondSectionTexts {
  post_second_section_text: string;
}

const BlogDetails = ({ post }: Props) => {
  return (
    <>
      <Header header={"Blog"} />
      <div className={styles["blog-id-container"]}>
        <div className={styles["grid-wrap"]}>
          <BlogImageSlider
            images={post.acf.post_first_section.post_images}
            alt={"Blog Image"}
            id={post.id + Math.random()}
          />
        </div>
        <div className={styles["blog-id-first-section"]}>
          <BlogInfo
            id={post.id}
            modified={post.modified}
            title={post.title.rendered}
            post_description={post.acf.post_description}
          />
        </div>
        <div className={styles["blog-id-second-section"]}>
          {post.acf.post_second_section.map((secondSection) => (
            <div
              key={secondSection.post_second_section_heading + Math.random()}
            >
              <BlogSecondHeading
                post_second_section_heading={
                  secondSection.post_second_section_heading
                }
              />
              {secondSection.post_second_section_texts.map((text) => (
                <BlogSecondText
                  key={
                    text.post_second_section_text.slice(0, 20) + Math.random()
                  }
                  post_second_section_text={text.post_second_section_text}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(API_ENDPOINTS.blogPosts);
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = Number(params?.id);
  const res = await fetch(API_ENDPOINTS.post(id));
  const post: Post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default BlogDetails;
