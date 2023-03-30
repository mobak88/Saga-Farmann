import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogSecondText.module.css";

interface BlogProps {
  post_second_section_text: string;
}

const BlogSecondText = ({ post_second_section_text }: BlogProps) => {
  return (
    <div className={styles[""]}>
      <ParagraphsSmall>
        Second section text: {post_second_section_text}
      </ParagraphsSmall>
    </div>
  );
};
export default BlogSecondText;
