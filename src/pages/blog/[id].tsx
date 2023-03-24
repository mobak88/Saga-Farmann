import { GetStaticPaths, GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import BlogInfo from "@/components/blog/blogInfo/blogInfo";
import BlogImage from "@/components/blog/blogImages/blogImages";
import Header from "@/components/header/header";
import BlogSecondText from "@/components/blog/blogSecondText/blogSecondText";
import BlogSecondHeading from "@/components/blog/blogSecondHeading/blogSecondHeading";

// Hele greia
interface Props {
  post: Post;
}

//posts
interface Post extends Props {
  id: number;
  modified: string;
  title: { rendered: string };
  acf: {
    post_first_section: PostFirstSection[];
    post_second_section: PostSecondSection;
    post_description: string;
  };
}

//posts.acf.post_first_section.post_images
interface PostImages extends PostFirstSection {
  post_image: string;
}

//posts.acf.post_first_section
interface PostFirstSection extends Post {
  post_images: PostImages[];
  post_first_heading: string;
  post_first_text: string;
}

//posts.acf.post_second_section
interface PostSecondSection extends Post {
  post_second_section_headings: PostSecondSectionHeading[];
  post_second_section_texts: PostSecondSectionTexts[];
}

//post.acf.post_second_section.post_second_section_headings
interface PostSecondSectionHeading extends PostSecondSection {
  post_second_section_heading: string;
}

//post.acf.post_second_section.post_second_section_texts
interface PostSecondSectionTexts extends PostSecondSection {
  post_second_section_text: string;
}

const BlogDetails = ({ post }: Props) => {
  return (
    <div>
      <Header header={"Blog"} />
      {post.acf.post_first_section[0].post_images.map((image) => (
        <BlogImage image={image.post_image} alt={"Blog Image"} />
      ))}
      <BlogInfo
        id={post.id}
        modified={post.modified}
        title={post.title.rendered}
        post_description={post.acf.post_description}
      />
      {post.acf.post_second_section.post_second_section_headings.map(
        (heading) => (
          <BlogSecondHeading
            post_second_section_heading={heading.post_second_section_heading}
          />
        )
      )}
      {post.acf.post_second_section.post_second_section_texts.map((text) => (
        <BlogSecondText
          post_second_section_text={text.post_second_section_text}
        />
      ))}
    </div>
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
