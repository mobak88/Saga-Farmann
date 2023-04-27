import { GetStaticPaths, GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogInfo from "@/components/blog/blogInfo/BlogInfo";
import BlogImageSlider from "@/components/thumbSlider/ThumbSlider";
import Header from "@/components/header/Header";
import BlogSecondText from "@/components/blog/blogSecondText/BlogSecondText";
import BlogSecondHeading from "@/components/blog/blogSecondHeading/BlogSecondHeading";
import styles from "./blog.module.css";
import { Props, Post } from "../../components/blog/interfaces";
import Head from "next/head";
import TextSkeleton from "@/components/skeletons/text/TextSkeleton";

const BlogDetails = ({ post, images }: Props) => {
  if (!post)
    return (
      <div className={styles["blog-id-skeleton-wrapper"]}>
        <TextSkeleton />
      </div>
    );

  const headText = `Saga Farmann post ${post.title.rendered}`;

  return (
    <>
      <Head>
        <title>{headText}</title>
        <meta
          name="description"
          content={`Saga Farmann post ${post.title.rendered}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={"Blog"} />
      <div className={styles["blog-id-wrapper"]}>
        <div className={styles["blog-id-container"]}>
          <div className={styles["grid-wrap"]}>
            <BlogImageSlider
              images={images}
              alt={"Image swiper"}
              id={post.id + Math.random()}
            />
          </div>
          <div className={styles["blog-id-first-section"]}>
            <BlogInfo
              id={post.id}
              date={post.date}
              title={post.title.rendered}
              post_description={post.acf.post_description}
            />
            {post.acf.post_first_section.post_first_heading && (
              <BlogSecondHeading
                post_second_section_heading={
                  post.acf.post_first_section.post_first_heading
                }
              />
            )}
            {post.acf.post_first_section.post_first_text && (
              <BlogSecondText
                post_second_section_text={
                  post.acf.post_first_section.post_first_text
                }
              />
            )}
          </div>
          <div className={styles["blog-id-second-section"]}>
            {post.acf.post_second_section &&
              post.acf.post_second_section.map((secondSection) => (
                <div
                  key={
                    secondSection.post_second_section_heading + Math.random()
                  }
                >
                  <BlogSecondHeading
                    post_second_section_heading={
                      secondSection.post_second_section_heading
                    }
                  />
                  <div className={styles["second-section-text-container"]}>
                    {secondSection.post_second_section_texts.map((text) => (
                      <BlogSecondText
                        key={
                          text.post_second_section_text.slice(0, 20) +
                          Math.random()
                        }
                        post_second_section_text={text.post_second_section_text}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

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

  if (!post.id) {
    return {
      redirect: {
        destination: "/posts",
        permanent: false,
      },
    };
  }
  const { post_images } = post.acf?.post_first_section;
  const images = post_images.map((image) => {
    return { image: image.post_image.url };
  });

  return {
    props: {
      post,
      images,
    },
  };
};

export default BlogDetails;
