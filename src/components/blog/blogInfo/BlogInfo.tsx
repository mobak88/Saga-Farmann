import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogInfo.module.css";

interface BlogProps {
  id: number;
  date: string;
  title: string;
  post_description: string;
}

const BlogInfo = ({ id, date, title, post_description }: BlogProps) => {
  return (
    <div key={id} className={styles["blog-id-info-wrapper"]}>
      <div className={styles["blog-card-date"]}>
        {date && <ParagraphsSmall>{date.split("T")[0]}</ParagraphsSmall>}
        {date && (
          <ParagraphsSmall>{date.split("T")[1].slice(0, -3)}</ParagraphsSmall>
        )}
      </div>
      {title && <HeadingTwo>{title}</HeadingTwo>}
      {post_description && (
        <ParagraphsSmall>{post_description}</ParagraphsSmall>
      )}
    </div>
  );
};
export default BlogInfo;
