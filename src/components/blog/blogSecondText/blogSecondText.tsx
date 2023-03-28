import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import styles from "./blogSecondText.module.css";

interface BlogProps {
  post_second_section_text: string;
}

const BlogSecondText = ({ post_second_section_text }: BlogProps) => {
  return (
    <div className={styles[""]}>
      <ParagraphsSmall dark={true}>
        Second section text: {post_second_section_text}
      </ParagraphsSmall>
    </div>
  );
};
export default BlogSecondText;
