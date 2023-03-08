import React from "react";
import styles from "./crew-card.module.css";
import imageSrc from "../../../public/assets/BjornVik1.jpeg";

interface CardProps {
  imageSrc: string;
  name: string;
  role: string;
  about: string;
}

const CrewCard: React.FC<CardProps> = ({ imageSrc, name, role, about }) => {
  return (
    <div className={styles.card}>
      <div></div>
    </div>
  );
};

export default CrewCard;
