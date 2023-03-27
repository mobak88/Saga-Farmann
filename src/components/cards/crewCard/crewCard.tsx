import React from "react";
import Image from "next/image";
import styles from "./crewCard.module.css";
import ParagraphsSmall from "../../typography/paragraphs/paragraphsSmall";
import ParagraphsBig from "@/components/typography/paragraphs/paragraphsBig";
import HeadingThree from "@/components/typography/headings/headingThree";

interface MemberProps {
  member_image: string;
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
            width={400}
            height={300}
          />
        </div>
        <div className={styles["card-text-wrapper"]}>
          <ParagraphsBig>{member_name}</ParagraphsBig>
          <ParagraphsBig>{member_role}</ParagraphsBig>
          <ParagraphsSmall>{member_description}</ParagraphsSmall>
        </div>
      </div>
    </>
  );
};

export default CrewCard;
