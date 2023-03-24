import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import styles from "./blogCard.module.css";
import Link from "next/link";

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
    <Link key={id} href={`/blog/${id}`}>
      <div className={styles[""]}>
        <div className={styles[""]}>
          <img src={post_image} alt={title} className={styles[""]} />
        </div>
        <div className={styles[""]}>
          <ParagraphsSmall dark={true}>Posted: {modified}</ParagraphsSmall>
          <HeadingTwo dark={true}>Title: {title}</HeadingTwo>
          <ParagraphsSmall dark={true}>
            Description: {post_description}
          </ParagraphsSmall>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
