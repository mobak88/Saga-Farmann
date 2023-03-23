import { GetStaticPaths, GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";

//posts
type Post = {
  id: number;
  modified: string;
  title: { rendered: string };
  acf: {
    post_first_section: PostFirstSection[];
    post_second_section: PostSecondSection[];
  };
  post_description: string;
};

//posts.acf.post_first_section.post_images
type PostImages = {
  post_image: string;
};

//posts.acf.post_first_section
type PostFirstSection = {
  post_images: PostImages[];
  post_first_heading: string;
  post_first_text: string;
};

//posts.acf.post_second_section
type PostSecondSection = {
  post_second_section_headings: PostSecondSectionHeading[];
  post_second_section_texts: PostSecondSectionTexts[];
};

//post.acf.post_second_section.post_second_section_headings
type PostSecondSectionHeading = {
  post_second_section_heading: string;
};

//post.acf.post_second_section.post_second_section_texts
type PostSecondSectionTexts = {
  post_second_section_text: string;
};

// Hele greia
type Props = {
  post: Post;
};

const BlogDetails = ({ post }: Props) => {
  return (
    <div>
      <h1>Details Page</h1>
      {post.title.rendered}
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
