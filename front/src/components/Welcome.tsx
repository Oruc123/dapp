import { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { TransactionsContext } from "../context/TransactionsContext";

const Input = ({
  placeholder,
  type,
  name,
  handleChange,
}: {
  placeholder: string;
  name: string;
  handleChange: any;
  type: string;
}) => (
  <input
    type={type}
    onChange={(e) => handleChange(e, name)}
    name={name}
    placeholder={placeholder}
    className="w-full my-2 rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { getEthContract } = useContext(TransactionsContext);
  console.log(getEthContract);

  const connectToWallet = () => {};
  const handleChange = () => {};
  const handleSubmit = () => {};

  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row  flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send crypto <br /> across world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore crypto wolrd. By and sell cryptocurrencies on Krypto
          </p>
          <button
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] hover:bg-[#254652] p-3 rounded-full cursor-pointer text-white "
            type="button"
            onClick={connectToWallet}
          >
            Connect to Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low fess</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">0xsd00000.</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5  w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Adress to"
              name="adressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (eth)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2"></div>
            {false ? (
              <Loader />
            ) : (
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white  w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
