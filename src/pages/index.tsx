import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [link, setLink] = useState("");
  const handleWebAssembly = (e: string) => {
    setLink(e);
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
          <p className="text-2xl font-bold">
            Coloque o seu video logo a baixo!
          </p>
          <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <input
              onChange={(e) => handleWebAssembly(e.target.value)}
              type="text"
              className="border-2 border-white rounded-md p-3 border-gray-300 bg-slate-300 w-10"
              placeholder="Coloque o seu video aqui"
            />
            <button className="p-2 bg-blue-400">
              <AiOutlineSend />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
