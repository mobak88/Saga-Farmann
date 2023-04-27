export interface Props {
  post: Post;
  images: ImageProps[];
}

export interface ImageProps {
  image: string;
}

export interface Post {
  id: number;
  date: string;
  title: { rendered: string };
  acf: {
    post_first_section: PostFirstSection;
    post_second_section: PostSecondSection[];
    post_description: string;
    blog_place: string;
  };
}

export interface PostFirstSection {
  post_images: PostImages[];
  post_first_heading: string;
  post_first_text: string;
}

export interface PostImages {
  post_image: { url: string; alt: string };
}

export interface PostSecondSection {
  post_second_section_heading: string;
  post_second_section_texts: PostSecondSectionTexts[];
}

export interface PostSecondSectionTexts {
  post_second_section_text: string;
}
