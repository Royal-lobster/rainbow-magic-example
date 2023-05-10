import type { AppProps } from "next/app";
import "../styles/globals.css";

import {
	RainbowKitProvider,
	connectorsForWallets,
	darkTheme,
	getDefaultWallets
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
	arbitrum,
	goerli,
	hardhat,
	mainnet,
	optimism,
	polygon,
} from "@wagmi/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { rainbowMagicConnector } from "../lib/RainbowMagicConnector";

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[mainnet, goerli, polygon, optimism, arbitrum, hardhat],
	[
		// alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
		publicProvider(),
	],
);

const connectors = connectorsForWallets([
	{
		groupName: "Recommended",
		wallets: [rainbowMagicConnector({ chains })],
	},
	...getDefaultWallets({
		chains,
		appName: "Wagmi",
	}).wallets,
]);

const wagmiClient = createConfig({
	autoConnect: false,
	connectors,
	publicClient,
	webSocketPublicClient
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig config={wagmiClient}>
			<RainbowKitProvider theme={darkTheme()} chains={chains}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
