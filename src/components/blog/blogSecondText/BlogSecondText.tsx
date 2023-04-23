import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";

interface BlogProps {
  post_second_section_text: string;
}

const BlogSecondText = ({ post_second_section_text }: BlogProps) => {
  return (
    <>
      {post_second_section_text && (
        <ParagraphsBig>{post_second_section_text}</ParagraphsBig>
      )}
    </>
  );
};
export default BlogSecondText;
