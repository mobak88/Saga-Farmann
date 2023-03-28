import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import styles from "./blogCard.module.css";
import Link from "next/link";
import ParagraphsBig from "@/components/typography/paragraphs/paragraphsBig";

interface BlogProps {
  id: number;
  post_image: string;
  modified: string;
  title: string;
  post_description: string;
}

const BlogCard = ({
  id,
  post_image,
  modified,
  title,
  post_description,
}: BlogProps) => {
  return (
    <div key={id} className={styles["blog-page-card"]}>
      <Link style={{ textDecoration: "none" }} key={id} href={`/blog/${id}`}>
        <div className={styles["blog-card-image-wrapper"]}>
          <img
            src={post_image}
            alt={title}
            className={styles["blog-card-image"]}
          />
        </div>
        <div className={styles["blog-card-info"]}>
          <ParagraphsSmall dark={true}>Posted: {modified}</ParagraphsSmall>
          <ParagraphsBig dark={true}>Title: {title}</ParagraphsBig>
          <ParagraphsSmall dark={true}>
            Description: {post_description}
          </ParagraphsSmall>
          <div className={styles["blog-card-read-more"]}>
            <ParagraphsSmall dark={true}>Read more</ParagraphsSmall>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default BlogCard;
