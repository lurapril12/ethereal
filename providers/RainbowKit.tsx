"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useMemo } from "react";
import { mainnet, sepolia, polygon, optimism, arbitrum, base } from "wagmi/chains";

// Configuration Wagmi with RainbowKit
const wagmiConfig = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "34fa8cba3a6af9058cb1439917977411", // Replace with your actual WalletConnect Project ID
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  ssr: true,
});

export function RainbowKit({ children }: { children: ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}