import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import BlogCard from "../../components/cards/blogCard/blogCard";

//posts
type Posts = {
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
  posts: Posts[];
};

// Key index eller post.id?
// Legg til locations

const BlogPage = ({ posts }: Props) => {
  return (
    <>
      <div>
        <ParagraphsSmall dark={true}>BOOM</ParagraphsSmall>
        <div>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post_image={post.modified}
              modified={post.modified}
              title={post.title.rendered}
              post_description={post.post_description}
            />
          ))}
        </div>
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
