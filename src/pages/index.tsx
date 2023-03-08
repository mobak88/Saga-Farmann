import Head from "next/head";
import CrewCard from "@/components/cards/crew-card/crew-card";
import SliderCard from "@/components/cards/slider-card/slider-card";
import DestinationCard from "@/components/cards/destination-card/destination-card";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saga Farman Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <h1>Saga</h1>
          <CrewCard imageSrc="test" name="test" role="test" about="test" />
          <DestinationCard />
          <SliderCard />
        </>
      </main>
    </>
  );
}
