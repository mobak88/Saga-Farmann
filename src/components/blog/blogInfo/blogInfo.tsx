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
    <div key={id} className={styles["blog-id-info-wrapper"]}>
      <ParagraphsSmall>Posted: {modified}</ParagraphsSmall>
      <HeadingTwo>Title: {title}</HeadingTwo>
      <ParagraphsSmall>Description: {post_description}</ParagraphsSmall>
    </div>
  );
};
export default BlogInfo;
