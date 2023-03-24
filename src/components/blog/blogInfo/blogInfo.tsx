import HeadingThree from "@/components/typography/headings/headingThree";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import styles from "./blogInfo.module.css";

interface BlogProps {
  id: number;
  modified: string;
  title: string;
  post_description: string;
}

const BlogInfo = ({ id, modified, title, post_description }: BlogProps) => {
  return (
    <div key={id} className={styles[""]}>
      <div className={styles[""]}>
        <ParagraphsSmall dark={true}>Posted: {modified}</ParagraphsSmall>
        <HeadingTwo dark={true}>Title: {title}</HeadingTwo>
        <ParagraphsSmall dark={true}>
          Description: {post_description}
        </ParagraphsSmall>
      </div>
    </div>
  );
};
export default BlogInfo;
