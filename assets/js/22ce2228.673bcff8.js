"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[935],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=n.createContext({}),d=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(h.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,h=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,b=p["".concat(h,".").concat(u)]||p[u]||l[u]||o;return a?n.createElement(b,r(r({ref:t},c),{},{components:a})):n.createElement(b,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},33533:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>r,metadata:()=>s,toc:()=>h,default:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_label:"BNB Sidechain FAQs",sidebar_position:2,hide_table_of_contents:!1},r="BNB Sidechain FAQs",s={unversionedId:"BNBSidechain/faqs-bas",id:"BNBSidechain/faqs-bas",isDocsHomePage:!1,title:"BNB Sidechain FAQs",description:"What is BNB Sidechain?",source:"@site/docs/BNBSidechain/faqs-bas.md",sourceDirName:"BNBSidechain",slug:"/BNBSidechain/faqs-bas",permalink:"/docs/BNBSidechain/faqs-bas",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BNBSidechain/faqs-bas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Sidechain FAQs",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Beacon Chain FAQ",permalink:"/docs/beaconchain/faq/faq"},next:{title:"How to Contribute",permalink:"/docs/contribute"}},h=[{value:"What is BNB Sidechain?",id:"what-is-bnb-sidechain",children:[],level:3},{value:"Do projects need permissions to set up BNB Sidechain?",id:"do-projects-need-permissions-to-set-up-bnb-sidechain",children:[],level:3},{value:"What is the consensus mechanism for BNB Sidechain?",id:"what-is-the-consensus-mechanism-for-bnb-sidechain",children:[],level:3},{value:"I&#39;ve heard about the hack on Ronin. How does BNB Sidechain protect me from something like this?",id:"ive-heard-about-the-hack-on-ronin-how-does-bnb-sidechain-protect-me-from-something-like-this",children:[],level:3},{value:"What is the cost for projects to adopt BNB Sidechain?",id:"what-is-the-cost-for-projects-to-adopt-bnb-sidechain",children:[],level:3},{value:"Will BNB Sidechain transactions and DAOs be counted towards BNB Chain? Should we account for these sidechain metrics and how?",id:"will-bnb-sidechain-transactions-and-daos-be-counted-towards-bnb-chain-should-we-account-for-these-sidechain-metrics-and-how",children:[],level:3},{value:"When can projects start deploying on BNB Sidechain?",id:"when-can-projects-start-deploying-on-bnb-sidechain",children:[],level:3},{value:"Where can we find more docs for BNB Sidechain for our developers to read through?",id:"where-can-we-find-more-docs-for-bnb-sidechain-for-our-developers-to-read-through",children:[],level:3},{value:"If developers have questions about BNB Sidechain deployment, where can they ask them?",id:"if-developers-have-questions-about-bnb-sidechain-deployment-where-can-they-ask-them",children:[],level:3},{value:"I have read the proposal and want to take the next step toward deployment. Whom can I talk to?",id:"i-have-read-the-proposal-and-want-to-take-the-next-step-toward-deployment-whom-can-i-talk-to",children:[],level:3},{value:"If a project already has its own private chain, what\u2019s the process to integrate it as a BNB Sidechain? And what does \u201cintegrate\u201d mean?",id:"if-a-project-already-has-its-own-private-chain-whats-the-process-to-integrate-it-as-a-bnb-sidechain-and-what-does-integrate-mean",children:[],level:3},{value:"What\u2019s the process to set up a BNB Sidechain? How long does it take?",id:"whats-the-process-to-set-up-a-bnb-sidechain-how-long-does-it-take",children:[],level:3},{value:"How is the validator set and rules decided? Can the application decide on all the validators?",id:"how-is-the-validator-set-and-rules-decided-can-the-application-decide-on-all-the-validators",children:[],level:3},{value:"Are there prerequisites for a token to be used as a BNB Sidechain sidechain token?",id:"are-there-prerequisites-for-a-token-to-be-used-as-a-bnb-sidechain-sidechain-token",children:[],level:3},{value:"What are the main differences, advantages, and disadvantages when we compare BNB Sidechain with Avalanche Subnets?",id:"what-are-the-main-differences-advantages-and-disadvantages-when-we-compare-bnb-sidechain-with-avalanche-subnets",children:[],level:3},{value:"What maintenance is required for BNB Sidechain operations? Do we maintain it or BNB Chain does it?",id:"what-maintenance-is-required-for-bnb-sidechain-operations-do-we-maintain-it-or-bnb-chain-does-it",children:[],level:3},{value:"What&#39;s the expected technological advancement here? In other words, what&#39;s the positive-sum net value for users and developers?",id:"whats-the-expected-technological-advancement-here-in-other-words-whats-the-positive-sum-net-value-for-users-and-developers",children:[],level:3}],d={toc:h};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bnb-sidechain-faqs"},"BNB Sidechain FAQs"),(0,i.kt)("h3",{id:"what-is-bnb-sidechain"},"What is BNB Sidechain?"),(0,i.kt)("p",null,"The BNB Sidechain is an infrastructure introduced to help developers and node operators build and run their own blockchain as their internal value system for a massive number of users while still maintaining a close connection with the BNB Chain. Any project developer will be able to deploy their own BNB Sidechain with its unique specifications and validator set. This validator set can run with fewer validators than BNB Chain, depending on the BNB Sidechain deployer. These validators can be run by the application owners or any community stakeholders, bringing more flexibility and decentralization to BNB Sidechain. The typical usage of BNB Sidechain is like the Ronin chain for the Axie Infinity."),(0,i.kt)("h3",{id:"do-projects-need-permissions-to-set-up-bnb-sidechain"},"Do projects need permissions to set up BNB Sidechain?"),(0,i.kt)("p",null,"No, BNB Sidechain is permissionless. We have 3\u20134 games in the test pilot stage right now. Nodereal and Ankr will help them build on BNB Sidechain."),(0,i.kt)("h3",{id:"what-is-the-consensus-mechanism-for-bnb-sidechain"},"What is the consensus mechanism for BNB Sidechain?"),(0,i.kt)("p",null,'TL;DR: Think of it as a "mini BSC".'),(0,i.kt)("p",null,"BNB Sidechain uses BSC's Parlia consensus. Parlia is a Proof-of-Staked Authority (PoSA) consensus algorithm for BSC. It incorporates elements from both Proof-of-Stake and Proof-of-Authority. It is a BFT-like consensus where only one validator produces a block and to be sure of the correctness of this operation we must wait for the confirmation time, usually its 2/3*N+1, where N is active validators (15 blocks for the current configuration)."),(0,i.kt)("p",null,"For more detail, read about Parlia on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/learn/consensus#consensus-protocol"},"BNB Chain docs"),"."),(0,i.kt)("h3",{id:"ive-heard-about-the-hack-on-ronin-how-does-bnb-sidechain-protect-me-from-something-like-this"},"I've heard about the hack on Ronin. How does BNB Sidechain protect me from something like this?"),(0,i.kt)("p",null,"The recent exploit discovered on Ronin illustrates the importance of having a diverse and decentralized group of validators and node operators serving the chain. Ankr will use its own token to help incentivize other node providers to support decentralization on BNB Sidechain."),(0,i.kt)("h3",{id:"what-is-the-cost-for-projects-to-adopt-bnb-sidechain"},"What is the cost for projects to adopt BNB Sidechain?"),(0,i.kt)("p",null,"Depends on whether the project wants to own its own BNB Sidechain, or wants it as a PaaS service. "),(0,i.kt)("p",null,"NodeReal or Ankr will provide it as PaaS, which includes validators, networks, tools, RPC service, and explorer. All that will be provided as a package, and there will be a quotation for this service."),(0,i.kt)("h3",{id:"will-bnb-sidechain-transactions-and-daos-be-counted-towards-bnb-chain-should-we-account-for-these-sidechain-metrics-and-how"},"Will BNB Sidechain transactions and DAOs be counted towards BNB Chain? Should we account for these sidechain metrics and how?"),(0,i.kt)("p",null,"They will not be counted. In the future, BSC should focus mainly on non-game metrics and liquidity, while games will be on BNB Sidechain."),(0,i.kt)("h3",{id:"when-can-projects-start-deploying-on-bnb-sidechain"},"When can projects start deploying on BNB Sidechain?"),(0,i.kt)("p",null,"You can jump start developing projects on BNB Sidechain rightway, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.bnbchainlist.org/"},"BNBChainList")," for connecting to different BNB Sidechain mainnets available."),(0,i.kt)("h3",{id:"where-can-we-find-more-docs-for-bnb-sidechain-for-our-developers-to-read-through"},"Where can we find more docs for BNB Sidechain for our developers to read through?"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/BNBSidechain/architecture/bs-arch"},"BNB Sidechain Architecture"),". "),(0,i.kt)("p",null,"Also, read ",(0,i.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en/blog/bsc-2022-build-and-build/"},"BNB Chain 2022: Build N\u2019 Build")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/132"},"BEP100 proposal for BNB Sidechain"),". "),(0,i.kt)("h3",{id:"if-developers-have-questions-about-bnb-sidechain-deployment-where-can-they-ask-them"},"If developers have questions about BNB Sidechain deployment, where can they ask them?"),(0,i.kt)("p",null,"We will soon set up a Discord channel for questions and organize a Twitter space to share more details.\nFor now, they can read ",(0,i.kt)("a",{parentName:"p",href:"https://www.ankr.com/docs/build-blockchain/bas/how-to-launch/launch-bas"},"How to Launch a BNB Sidechain"),"."),(0,i.kt)("h3",{id:"i-have-read-the-proposal-and-want-to-take-the-next-step-toward-deployment-whom-can-i-talk-to"},"I have read the proposal and want to take the next step toward deployment. Whom can I talk to?"),(0,i.kt)("p",null,"For now, read ",(0,i.kt)("a",{parentName:"p",href:"https://www.ankr.com/docs/build-blockchain/bas/how-to-launch/launch-bas/"},"How to Launch a BNB Sidechain"),". For other business and technical details, wait till the Discord channel for BNB Sidechain is set up. You'll be able to ask your questions there."),(0,i.kt)("h3",{id:"if-a-project-already-has-its-own-private-chain-whats-the-process-to-integrate-it-as-a-bnb-sidechain-and-what-does-integrate-mean"},"If a project already has its own private chain, what\u2019s the process to integrate it as a BNB Sidechain? And what does \u201cintegrate\u201d mean?"),(0,i.kt)("p",null,'Such a project will have to implement BNB Sidechain modules following our standards to align with our BNB Sidechain framework. "Integrate" means to become a BNB Sidechain-compatible blockchain that can use all the specter of BNB Sidechain products.'),(0,i.kt)("h3",{id:"whats-the-process-to-set-up-a-bnb-sidechain-how-long-does-it-take"},"What\u2019s the process to set up a BNB Sidechain? How long does it take?"),(0,i.kt)("p",null,"On average, it takes several hours to set up a BNB Sidechain."),(0,i.kt)("h3",{id:"how-is-the-validator-set-and-rules-decided-can-the-application-decide-on-all-the-validators"},"How is the validator set and rules decided? Can the application decide on all the validators?"),(0,i.kt)("p",null,"We propose a very flexible configuration, BNB Sidechained on the project parameters. The minimum is 3 validators."),(0,i.kt)("h3",{id:"are-there-prerequisites-for-a-token-to-be-used-as-a-bnb-sidechain-sidechain-token"},"Are there prerequisites for a token to be used as a BNB Sidechain sidechain token?"),(0,i.kt)("p",null,"There are no prerequisites. You can just issue a new token."),(0,i.kt)("p",null,"For example, Ankr will have its own BNB Sidechain and use its own token. "),(0,i.kt)("h3",{id:"what-are-the-main-differences-advantages-and-disadvantages-when-we-compare-bnb-sidechain-with-avalanche-subnets"},"What are the main differences, advantages, and disadvantages when we compare BNB Sidechain with Avalanche Subnets?"),(0,i.kt)("p",null,"They are very similar. Where they differ is the consensus rules. "),(0,i.kt)("h3",{id:"what-maintenance-is-required-for-bnb-sidechain-operations-do-we-maintain-it-or-bnb-chain-does-it"},"What maintenance is required for BNB Sidechain operations? Do we maintain it or BNB Chain does it?"),(0,i.kt)("p",null,"If you build your own BNB Sidechain, the maintenance is fully on you."),(0,i.kt)("p",null,"If you use it as a PaaS at Nodereal or Ankr, they will do the maintenance. They will also do all future upgrades, 24x7 SLA support, and so on."),(0,i.kt)("h3",{id:"whats-the-expected-technological-advancement-here-in-other-words-whats-the-positive-sum-net-value-for-users-and-developers"},"What's the expected technological advancement here? In other words, what's the positive-sum net value for users and developers?"),(0,i.kt)("p",null,"With BNB Sidechain, developers are able to set up and run a scalable blockchain solution, with smart contracts capability, in a very short time. They can also modify and upgrade their BNB Sidechain using different modules or writing their own modules. Effectively, it means faster and simpler monetization and easier user attraction."),(0,i.kt)("p",null,"With BNB Sidechain, users can gain access to new projects faster and use new exciting opportunities."))}c.isMDXComponent=!0}}]);