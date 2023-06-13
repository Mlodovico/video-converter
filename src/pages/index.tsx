import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [link, setLink] = useState("");

  const handleLink = (e: string) => {
    setLink(e);
  };

  const handleWebAssembly = () => {
    console.log(link);
  };

  return (
    <>
      <Head>
        <title>Video Converter</title>
        <meta name="description" content="Video converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p className="text-2xl font-bold text-zinc-500">
            Coloque o seu video logo a baixo!
          </p>
          <div className="grid grid-cols-3 justify-items-stretch">
            <input
              onChange={(e) => handleLink(e.target.value)}
              type="text"
              className="border-2 rounded-md p-3 border-gray-300 bg-slate-300 md:w-2/3"
              placeholder="Coloque o seu video aqui"
            />
            <button
              onClick={handleWebAssembly}
              className="h-full p-3 bg-blue-400 rounded-md md:w-1/3"
            >
              <AiOutlineSend />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
