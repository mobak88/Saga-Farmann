import React from "react";
import styles from "./crew-card.module.css";

interface CardProps {
  imageSrc: string;
  name: string;
  role: string;
  about: string;
}

const CrewCard = ({ imageSrc, name, role, about }: CardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div></div>
      </div>
    </>
  );
};

export default CrewCard;
