import React from "react";
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
  return (
    <>
      <div className={styles.card}>
        <div className={styles["image-wrapper"]}>
          <Image
            src={member_image}
            alt={member_name}
            className={styles.image}
            width={213}
            height={250}
          />
        </div>
        <div className={styles["card-text-wrapper"]}>
          <h2 className={styles.name}>{member_name}</h2>
          <h3 className={styles.role}>{member_role}</h3>
          <div className={styles.description}>
            <ParagraphsSmall>{member_description}</ParagraphsSmall>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewCard;
