# testdoge-mining-pool
A local mining pool for dogecoin testnet to test the miners.

# Usage
`npm start`  

# Motivation
I wanted to test my [stratum-miner](https://github.com/Vikasg7/stratum-miner). As there is no public testnet mining pools were available, so I had to came up with my own.

# How I setup a miner?
I used [node-stratum-pool](https://github.com/zone117x/node-stratum-pool) with very basic configuration. Make sure you have node-gyp and [OpenSSL-Win64 1.0.2u](https://www.filehorse.com/download-openssl-64/old-versions/) installed to install node-startum-pool via npm. I had to install github repo version as npm version of startum-pool is not updated. Also, it was very hard to find the right version of OpenSSL as the original website don't provide the windows installers for old versions but I found one from [filehorse](https://www.filehorse.com/download-openssl-64/old-versions/).
