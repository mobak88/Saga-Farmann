import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./crewCard.module.css";
import ParagraphsSmall from "../../typography/paragraphs/paragraphsSmall";
import ParagraphsBig from "@/components/typography/paragraphs/paragraphsBig";
import HeadingTwo from "@/components/typography/headings/headingTwo";

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
          <img src={member_image} alt={member_name} className={styles.image} />
        </div>
        <div className={styles["card-text-wrapper"]}>
          <HeadingTwo>{member_name}</HeadingTwo>
          <ParagraphsBig>{member_role}</ParagraphsBig>
          <ParagraphsSmall>{member_description}</ParagraphsSmall>
        </div>
      </div>
    </>
  );
};

export default CrewCard;
