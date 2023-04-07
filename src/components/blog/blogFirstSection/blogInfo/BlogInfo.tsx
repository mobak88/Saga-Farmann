import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogInfo.module.css";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";

interface BlogProps {
  id: number;
  modified: string;
  title: string;
}

const BlogInfo = ({ id, modified, title }: BlogProps) => {
  return (
    <>
      <div key={id} className={styles["blog-id-info-wrapper"]}>
        <ParagraphsSmall>{modified.replace("T", " ")}</ParagraphsSmall>
        <ParagraphsBig>{title}</ParagraphsBig>
      </div>
    </>
  );
};
export default BlogInfo;
