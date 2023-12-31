import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
const NFTDropPage = () => {
  //Auth
  const connectWithMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/*Left side*/}
      <div className=" bg-gradient-to-br from-cyan-800 to-blue-500 lg:col-span-4">
        <div className=" flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-2 text-center p-5">
            <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of papafam apes...
            </h2>
          </div>
        </div>
      </div>
      {/* This is the NFTDropPage */}
      {/*Right side*/}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* {Header} */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              PAPAFAM
            </span>{" "}
            NFT marketplace
          </h1>
          <button
            onClick={address ? disconnect : () => connectWithMetaMask()}
            className="rounded-full bg-blue-600 text-white px-4 py-2 lg:px-5 lg:py-3 lg:text-base">
            {address ? "Sign out" : "Sign in"}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You&aposre logged in with wallet {address?.substring(0, 5)}...
            {address?.substring(address.length - 4)}
          </p>
        )}
        {/* {content} */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The PAPAFAM Ape Coding CLub | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">12/21 NFTs claimed</p>
        </div>
        {/* {mint button} */}
        <button className="mt-10 h-16 w-full bg-blue-600 w-4 rounded-full font-bold text-white">
          Mint NFT (0.01ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
