export interface SinglePostProps {
  id: number;
  title: { rendered: string };
  acf: {
    post_first_section: {
      post_images: [{ post_image: { url: string; alt: string } }];
    };
    post_description: string;
  };
}

export interface PostsProps {
  posts: SinglePostProps[];
}

export interface LatestNewsProps extends PostsProps {
  postHeading: string;
  postText: string;
}

export interface LatestNewsHomeProps {
  posts: SinglePostProps[];
  latestNewsText: {
    latest_news_heading: string;
    latest_news_short_description: string;
  };
}
