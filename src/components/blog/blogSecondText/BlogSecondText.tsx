import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";

interface BlogProps {
  post_second_section_text: string;
}

const BlogSecondText = ({ post_second_section_text }: BlogProps) => {
  return <ParagraphsSmall>{post_second_section_text}</ParagraphsSmall>;
};
export default BlogSecondText;
