import LinkTo from "@/components/links/LinkTo";
import React from "react";
import styles from "./ModalLinks.module.css";

interface ModalLinksProps {
  blogId: string;
  destinationId: string | undefined;
  crewId: string | undefined;
  isDestination: boolean;
}

const ModalLinks = ({
  blogId,
  destinationId,
  crewId,
  isDestination,
}: ModalLinksProps) => {
  return (
    <div
      className={
        isDestination
          ? styles["links-container"]
          : `${styles["links-container"]} ${styles["links-container-stage"]}`
      }
    >
      <LinkTo url={`/posts/${blogId}`}>Blog</LinkTo>
      <LinkTo url={`crew_members/${crewId}`}>Crew</LinkTo>
      {isDestination && (
        <LinkTo url={`/destinations/${destinationId}`}>Destination</LinkTo>
      )}
    </div>
  );
};

export default ModalLinks;
