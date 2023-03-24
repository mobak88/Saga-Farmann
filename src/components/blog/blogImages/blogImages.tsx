interface ImageProps {
  image: string;
  alt: string;
}

const BlogImage = ({ image, alt }: ImageProps) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
};
export default BlogImage;
