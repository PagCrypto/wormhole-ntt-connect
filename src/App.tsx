import WormholeConnect, {
    WormholeConnectConfig,
    nttRoutes,
    WormholeConnectTheme,
  } from '@wormhole-foundation/wormhole-connect';
  
  const wormholeConfig: WormholeConnectConfig = {
    network: 'Mainnet',
    rpcs: {
      Solana: process.env.NEXT_PUBLIC_MAINNET_URL,
      Ethereum: `https://holy-side-feather.quiknode.pro/${process.env.NEXT_PUBLIC_QUICKNODE_TOKEN}`,
      Base: `https://holy-side-feather.base-mainnet.quiknode.pro/${process.env.NEXT_PUBLIC_QUICKNODE_TOKEN}`
    },
    chains: ['Solana', 'Ethereum', 'Base'],
    tokens: [],
    ui: {
      title: 'Wormhole Connector',
      defaultInputs: {
        fromChain: 'Ethereum',
        toChain: 'Solana',
      },
    }
  }
  
  function App() {
    const theme: WormholeConnectTheme = {
      mode: 'dark',
      primary: '#78c4b6',
    };

    return (
      <div>
        <WormholeConnect config={wormholeConfig} theme={theme} />
      </div>
    )
  }
  export default App
