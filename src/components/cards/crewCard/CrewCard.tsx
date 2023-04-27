import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./CrewCard.module.css";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";

interface MemberProps {
  member_image: string | StaticImageData;
  member_name: string;
  member_role: string;
  member_description: string;
}

const CrewCard = ({
  member_image,
  member_name,
  member_role,
  member_description,
}: MemberProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isImageStretched, setIsImageStretched] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsImageStretched(true);
  };

  return (
    <>
      <div className={styles.card} onClick={toggleExpand}>
        <div className={styles["image-wrapper"]}>
          {member_image && (
            <Image
              src={member_image}
              alt={`An image of one of the crew, ${member_name}`}
              className={`${styles.image} ${
                isImageStretched ? styles.stretched : styles.notStretched
              }`}
              width={250}
              height={250}
            />
          )}
        </div>
        <div className={styles["card-text-wrapper"]}>
          {member_name && <h2 className={styles.name}>{member_name}</h2>}
          {member_role && <h3 className={styles.role}>{member_role}</h3>}

          {member_description && isExpanded ? (
            <ParagraphsSmall>{member_description}</ParagraphsSmall>
          ) : (
            <div>
              <ParagraphsSmall>
                {isMobile
                  ? member_description.slice(0, 50) + "..."
                  : member_description.slice(0, 150) + "..."}
                <span className={styles.read}>
                  {isExpanded ? "Read less" : "Read more"}
                </span>
              </ParagraphsSmall>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CrewCard;
