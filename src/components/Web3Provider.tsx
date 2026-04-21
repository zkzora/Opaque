"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, arbitrumSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

const config = createConfig({
  chains: [arbitrumSepolia, mainnet],
  transports: {
    [arbitrumSepolia.id]: http(),
    [mainnet.id]: http(),
  },
});

export function Web3Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
