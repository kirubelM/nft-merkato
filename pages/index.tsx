import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Merkato</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <h1 className="text-4xl text-red-500 font-bold ">
        Welcome to NFT Merkato Challange
      </h1>
    </div>
  );
};

export default Home;
