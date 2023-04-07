import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogFirstSection.module.css";

interface BlogProps {
  id: number;
  post_first_section_text: string;
  post_first_section_heading: string;
  modified: string;
}

const BlogFirstSection = ({
  id,
  post_first_section_text,
  post_first_section_heading,
  modified,
}: BlogProps) => {
  return (
    <>
      <div key={id} className={styles["blog-first-section-wrapper"]}>
        <ParagraphsSmall>{modified.replace("T", " ")}</ParagraphsSmall>
        <ParagraphsBig>{post_first_section_heading}</ParagraphsBig>
        <ParagraphsSmall>{post_first_section_text}</ParagraphsSmall>
      </div>
    </>
  );
};
export default BlogFirstSection;
