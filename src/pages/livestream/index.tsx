import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Header from "@/components/header/Header";
import LivestreamVideo from "@/components/livestream/LivestreamVideo";
import React from "react";

const Livestream = () => {
  return (
    <>
      <Header header={"Livestream"} />
      <DarkContainer>
        <LivestreamVideo />
      </DarkContainer>
    </>
  );
};

export default Livestream;
