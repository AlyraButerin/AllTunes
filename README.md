<!-- # ALLTUNES -->

<p align="center"><img width="100%" src="./images/image.png" alt="AllFunding Header"></p>

## Introduction:

(missing time see comment in ISRCRegistry for AllTunes dapp):

- @notice this contract is intended to serve as a registry of listening rights to any sound when an ISRC is bound
- @notice thus any music player can broadcast music to a user according to his rights
- @notice any dapp can connect and a user has a 'universal' right to listen to whatever the player
- @notice 2 possible mode for user : PRIVATE or PRO
- @notice a private user can buy a lifetime rights (as if he'd bought a song in a store) or pay a subscription for a short time (rent)
-
- @notice NOT YET ADDED TO THE POC (due to loss of time with bridge project on allfeat) :
- @notice a pro user should fund a subscription vault giving access to a limited time to play use the song
- @notice a way to pay in usd equivalent token. The bridge will allow this
- @notice an oracle and dex to swap tokens and be abble to accept more tokens to pay
- @notice an oracle to fetch ISRC data from ISRC agency database to validate a code
-
- @notice IMPORTANT think about storage => huge amount of song and user can increase a lot the storage
- @notice test and study needs
- @notice a solution could be to have a main resolver contract allowing to have a "pagination" mechanism with child storage contract

following the first hackathon we see the need of a bridge for the crowdfunding dapp.
We decide to make it functionnal for this hackathon dapp as we need stablecoin to pay.

## Team:

Igor BOURNAZEL - Développeur (bridge & AllTunes contracts)
Yoann RADENAC - Développeur (dapp AllTunes)
Arnaud SENE - Développeur (bridge server & dapp AllTunes)

## Hackathon links:

AllTunes dapp:

- presentation: https://app.pitch.com/app/presentation/
- AllTunes contracts: https://github.com/AlyraButerin/AllTunes-contracts/tree/main
- AllTunes front: https://github.com/AlyraButerin/AllTunes
- Bridge POC contracts: https://github.com/AlyraButerin/Allfeat-EVM-bridge-POC
- Bridge relayer (off chain): https://github.com/AlyraButerin/bridge-relay-poc

- last deployment addresses (Harmony testnet) :

  - ISRCRegistry: 0xb615089f5e0ACd56Fb48FC83045cada9b97F2f92
  - (bridged ETH used from bridge: 0xB6A475AE1495E938410B1f9D81b121a80B562428)

- Bridge last deployment addresses (Harmony testnet) :

  - BridgeBase: 0x833d53Aa4C849eb271793E462d6E6E4FFAFda292
  - RelayerBase: 0x9609CeF4e2B2BeC75EC1FE347a5ACaF5CAE979EE
  - Vault: 0xD02219BCDCB585f44e4e6a53ED4507eceDaa840D
  - TokenFactory: 0x208a9D967D4ed6601276049926f15606B376e2DF
  - Storage: 0xc71d59F214fD156E4373F35882ed84a0aE9001F0
  - abDAI token: 0x7bA03DaC5A469be70cfc52Fb6A0dC3933891BcA9
  - abETH token: 0xB6A475AE1495E938410B1f9D81b121a80B562428

- Bridge last deployment addresses (Sepolia testnet) :
  - BridgeBase: 0x6E89E67b41fBa8d4a854dd536695CD141eED75eA
  - RelayerBase: 0xda0a222eA8342F501080BE030Bc4b990FcC85623
  - Vault: 0xeCA818dd9C2cDbA50604C169149Ef929F39c76de
  - TokenFactory: 0x40E2E4b2Cc295AAEC66C37a10Fc832b88d948037
  - Storage: 0xE734061D82acBe5746B8c75aAA99e4Ad60cc5197
  - mocked DAI token: 0xb523d5CA3A67ACf317D8bC1a26089393394c8f6a
  - abAFT token: 0x2508e886C24612aC089dC899368A165519d04e05

## Stack:

Blockchain:

- solidity / Hardhat
- testnet Harmony & Sepolia

Front:

- Next.js
- wagmi
- raimbow kit

Server: