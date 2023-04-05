import { GetStaticPaths, GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogInfo from "@/components/blog/blogInfo/BlogInfo";
import BlogImageSlider from "@/components/blog/blogImageSlider/BlogImageSlider";
import Header from "@/components/header/Header";
import BlogSecondText from "@/components/blog/blogSecondText/BlogSecondText";
import BlogSecondHeading from "@/components/blog/blogSecondHeading/BlogSecondHeading";
import styles from "./blog.module.css";
import { Props, Post } from "./interfaces";

const BlogDetails = ({ post, images }: Props) => {
  return (
    <>
      <Header header={"Blog"} />
      <div className={styles["blog-id-wrapper"]}>
        <div className={styles["blog-id-container"]}>
          <div className={styles["grid-wrap"]}>
            <BlogImageSlider
              images={images}
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
  const { post_images } = post.acf.post_first_section;

  const images = post_images.map((image) => {
    return { image: image.post_image };
  });

  return {
    props: {
      post,
      images,
    },
  };
};

export default BlogDetails;
