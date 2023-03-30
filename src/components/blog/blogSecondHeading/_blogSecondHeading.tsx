import HeadingThree from "@/components/typography/headings/headingThree";
import styles from "./blogSecondHeading.module.css";

interface BlogProps {
  post_second_section_heading: string;
}

const BlogSecondHeading = ({ post_second_section_heading }: BlogProps) => {
  return (
    <div className={styles["blog-id-second-heading"]}>
      <HeadingThree>
        Second section heading: {post_second_section_heading}
      </HeadingThree>
    </div>
  );
};

export default BlogSecondHeading;
