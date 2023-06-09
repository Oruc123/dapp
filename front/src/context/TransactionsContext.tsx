import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../utils/consts";

export const TransactionsContext = createContext<any>(null);
const { ethereum } = window;

const getEthContract = () => {
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log({ provider, signer, transactionContract });
};
export const TransactionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <TransactionsContext.Provider value={{ getEthContract }}>
    {children}
  </TransactionsContext.Provider>
);
