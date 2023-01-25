import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <div className={styles.container}>
      <Head>
        <title>Magic RainbowKit</title>
        <meta
          name="description"
          content="Minimal example of RainbowKit with Magic, NextJS and TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.connectWrapper}>
        <div>
          <ConnectButton />
        </div>
        {isConnected ? (
          <p>Connected with the address: {address}</p>
        ) : (
          <p>No Wallet connected. click on the button above to connect</p>
        )}
      </div>
    </div>
  );
}
