import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import styles from "./blogCard.module.css";

interface BlogProps {
  post_image: string;
  modified: string;

  title: string;
  post_description: string;
}

const BlogCard = ({
  post_image,
  modified,

  title,
  post_description,
}: BlogProps) => {
  return (
    <>
      <div className={styles[""]}>
        <div className={styles[""]}>
          <img src={post_image} alt={title} className={styles[""]} />
        </div>
        <div className={styles[""]}>
          <ParagraphsSmall dark={true}>{modified}</ParagraphsSmall>
          <HeadingTwo dark={true}>{title}</HeadingTwo>
          <ParagraphsSmall dark={true}>{post_description}</ParagraphsSmall>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
