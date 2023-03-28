import styles from "./blogImages.module.css";

interface ImageProps {
  image: string;
  alt: string;
  id: number;
}

const BlogImage = ({ image, alt, id }: ImageProps) => {
  return (
    <li>
      <img src={image} alt={alt} className={styles["blog-id-image" + id]} />
    </li>
  );
};
export default BlogImage;
