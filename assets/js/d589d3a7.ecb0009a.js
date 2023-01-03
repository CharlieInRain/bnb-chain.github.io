"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99390:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Getting Started"},i="Getting Started",s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"This document serve as a starting point for new users to the BNB Chain ecosystem. General knowledge of cryptocurrency is assumed, and in particular familiarity with the Ethereum ecosystem. If you don't understand something right away, that's OK. Search for an answer online, and if you don't find it, ask on our Discord.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/getting-started.md",tags:[],version:"current",frontMatter:{sidebar_label:"Getting Started"},sidebar:"bscSideBar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Introduction",permalink:"/docs/learn/intro"}},l=[{value:"What can users do with BNB Smart Chain (BSC)?",id:"what-can-users-do-with-bnb-smart-chain-bsc",children:[{value:"Tokenization",id:"tokenization",children:[],level:3},{value:"BNB Token and Fees",id:"bnb-token-and-fees",children:[],level:3},{value:"How to Buy BNB Tokens",id:"how-to-buy-bnb-tokens",children:[],level:3},{value:"Extensive Support of Wallets",id:"extensive-support-of-wallets",children:[],level:3},{value:"Using Blockchain Explorers",id:"using-blockchain-explorers",children:[],level:3},{value:"Building dApps",id:"building-dapps",children:[],level:3},{value:"Migrate your dApps to BSC",id:"migrate-your-dapps-to-bsc",children:[],level:3},{value:"Node RPC",id:"node-rpc",children:[],level:3}],level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This document serve as a starting point for new users to the BNB Chain ecosystem. General knowledge of cryptocurrency is assumed, and in particular familiarity with the Ethereum ecosystem. If you don't understand something right away, that's OK. Search for an answer online, and if you don't find it, ask on our ",(0,r.kt)("a",{parentName:"p",href:"http://discord.com/invite/bnbchain"},"Discord"),". "),(0,r.kt)("h2",{id:"what-can-users-do-with-bnb-smart-chain-bsc"},"What can users do with BNB Smart Chain (BSC)?"),(0,r.kt)("p",null,"BNB Smart Chain (BSC) is the blockchain component of the BNB Chain ecosystem that is equipped with the smart contract functionality and compatibility with the Ethereum Virtual Machine (EVM) and is used for developing various kinds of decentralized applications. The design goal of BSC was to leave the high throughput of Beacon Chain intact while introducing smart contracts into the BNB Chain ecosystem. Being EVM-compatible, other than easy portability, BSC enjoys support of the rich universe of ",(0,r.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/what-is-ethereum"},"Ethereum")," tools and dApps"),(0,r.kt)("h3",{id:"tokenization"},"Tokenization"),(0,r.kt)("p",null,"On the BNB Smart Chain, users can: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send and receive ",(0,r.kt)("a",{parentName:"li",href:"/docs/binance#transfer-testnet-bnb-from-bsc-to-bc"},"BNB"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/wallet/binance#swap-testnet-bep2-token-to-its-bep20-equivalent"},"BEP2 tokens")," and other supported token standards cross-chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/wallet/staking"},"Stake your BNB")," to earn some block rewards."),(0,r.kt)("li",{parentName:"ul"},"Issue Fungible tokens like ",(0,r.kt)("a",{parentName:"li",href:"/docs/BEP20"},"BEP20 Tokens")," to digitalize assets."),(0,r.kt)("li",{parentName:"ul"},"Issue ",(0,r.kt)("a",{parentName:"li",href:"/docs/ERC721"},"Non-Fungible Tokens (NFTs)"),"."),(0,r.kt)("li",{parentName:"ul"},"Extensive support of ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn/cross-chain-bridges"},"Cross-Chain Bridges")," for cross-chain transfers of tokens.")),(0,r.kt)("h3",{id:"bnb-token-and-fees"},"BNB Token and Fees"),(0,r.kt)("p",null,"BNB is the cryptocurrency coin that powers the BNB Chain ecosystem. As one of the world's most popular utility tokens, not only can you trade BNB like any other cryptocurrency, you can also use BNB in a wide range of applications and use cases. "),(0,r.kt)("p",null,"Although initially based on the Ethereum network, the ERC-20 BNB tokens were later swapped with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP2.md"},"BEP-2")," BNB at a 1:1 ratio. The BEP-2 BNB is the native coin of the Beacon Chain, and the mainnet."),(0,r.kt)("p",null,"In 2020, the BNB Smart Chain (BSC) was launched. BSC is a blockchain network that runs in parallel with the BNB Beacon Chain. This means that BNB can be found in three different forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BNB BEP-2 on the BNB Beacon Chain."),(0,r.kt)("li",{parentName:"ul"},"BNB BEP-20 on the BNB Smart Chain."),(0,r.kt)("li",{parentName:"ul"},"BNB ERC-20 on the Ethereum network.")),(0,r.kt)("h3",{id:"how-to-buy-bnb-tokens"},"How to Buy BNB Tokens"),(0,r.kt)("p",null,"As all fees on BNB Chain are paid in BNB, therefore, in order to interact with the BNB Smart Chain network you will need to have some BNB tokens. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BNB tokens can also be received for usage on testnet through the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://testnet.binance.org/faucet-smart"},"Testnet Faucet")),"."),(0,r.kt)("li",{parentName:"ul"},"Refer ",(0,r.kt)("a",{parentName:"li",href:"wallets/wallet-tutorial-overview"},"here")," for tutorials on different wallets for use with BNB Chain to send/receive/purchase BNB Tokens.")),(0,r.kt)("h3",{id:"extensive-support-of-wallets"},"Extensive Support of Wallets"),(0,r.kt)("p",null,"For a list of tutorials on how to use other supported wallets with BNB Smart Chain, refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets/wallet-tutorial-overview"},"here"),"."),(0,r.kt)("h3",{id:"using-blockchain-explorers"},"Using Blockchain Explorers"),(0,r.kt)("p",null,"Explore the transaction history, blocks on the chain check different asset types, the distribution of their ownerships, and owners' transactions, etc. via the use of explorers. Refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/BSCexplorers"},"here")," for a complete list."),(0,r.kt)("h3",{id:"building-dapps"},"Building dApps"),(0,r.kt)("p",null,"BSC empowers developers to build dApps of different kinds. Below is a list of tutorials on how to develop smart contracts using IDEs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/chainide"},"ChainIDE"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/remix-new"},"RemixIDE"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/truffle-new"},"Truffle"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/hardhat-new"},"HardHat"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/replit"},"Replit"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify Your Smart Contract using ",(0,r.kt)("a",{parentName:"p",href:"/docs/verify"},"BscScan"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/wallet/wallet_api"},"Develop wallets")," and tools to help users use DApps."))),(0,r.kt)("h3",{id:"migrate-your-dapps-to-bsc"},"Migrate your dApps to BSC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrate your existing dApps from other blockchains to BSC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"From ",(0,r.kt)("a",{parentName:"li",href:"/docs/migration/non-evm-chains/solana/architecture-comparison"},"Solana"),"."),(0,r.kt)("li",{parentName:"ul"},"From ",(0,r.kt)("a",{parentName:"li",href:"/docs/migration/evm-chains/chain-comparison"},"Polygon"))))),(0,r.kt)("h3",{id:"node-rpc"},"Node RPC"),(0,r.kt)("p",null,"There are data seed nodes in the network which allow users to perform low-level operations like executing ABCI queries, viewing network/consensus state or broadcasting a transaction.\nIf you run a full node by yourself, you can also use RPC functions. For a list of all the Node RPC services for Beacon Chain refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/api-reference/node-rpc"},"here")," and for BNB Smart Chain refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/rpc"},"here"),"."))}p.isMDXComponent=!0}}]);