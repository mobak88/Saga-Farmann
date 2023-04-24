import HeadingThree from "@/components/typography/headings/HeadingThree";
import styles from "./BlogSecondHeading.module.css";

interface BlogProps {
  post_second_section_heading: string;
}

const BlogSecondHeading = ({ post_second_section_heading }: BlogProps) => {
  return (
    <div className={styles["blog-id-second-heading"]}>
      {post_second_section_heading && (
        <HeadingThree>{post_second_section_heading}</HeadingThree>
      )}
    </div>
  );
};

export default BlogSecondHeading;
