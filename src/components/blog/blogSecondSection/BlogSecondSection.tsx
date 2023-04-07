import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogSecondText.module.css";
import BlogSecondText from "./blogSecondText/BlogSecondText";

interface BlogProps {
  post_second_section_text: string;
  secondSection: SecondSection[];
}
interface SecondSection {
  post_second_section_heading: string;
  post_second_section_texts: SecondSectionText[];
}

interface SecondSectionText {
  post_second_section_text: string;
}

const BlogSecondSection = ({ secondSection }: BlogProps) => {
  return (
    <>
      <BlogSecondSectionHeading heading={heading} />
      {secondSection.post_second_section_texts.map((text) => (
        <BlogSecondText
          key={text.post_second_section_text.slice(0, 20) + Math.random()}
          post_second_section_text={text.post_second_section_text}
        />
      ))}
    </>
  );
};
export default BlogSecondSection;
