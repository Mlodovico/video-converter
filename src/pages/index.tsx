import Head from "next/head";
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
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <div className="justify-itens-center">
            <p className="text-2xl font-bold text-zinc-500 justify-self-center">
              Put the video link right here!
            </p>
            <div className="justify-self-center">
              <input
                onChange={(e) => handleLink(e.target.value)}
                type="text"
                className="border-2 rounded-md p-3 border-gray-300 bg-slate-300 w-10"
                placeholder="Coloque o seu video aqui"
              />
              <button
                onClick={handleWebAssembly}
                className="h-full p-3 bg-blue-400 rounded-md"
              >
                <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
