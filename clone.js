import { defineChain } from '../..utis/chain/defineChain.js' ;
export const Klon = /*#__PURE__*/ defineChain({
    id:88_888,
    name: 'Klon chain'
    network: 'klin-chain'
    nativeCurrency: {
        decimals: 18,
        name: 'klon',
        symbol: 'KLN',
    },
    rpcUrls: { 
        default: {
            http: [
                'https://rpc.ankr.com/klon',
                'http://klon-rpc.publicnode.com'
            ],
            
        },
    },
    blockExplorers: {
        default: {
            name: 'klon Explorer',
            url: 'https://scan.klon.com',
            apiUrl: 'https://scan.klon.com/api',
        },
    },
});
//# sourceMappingURL=klon.js.map