const Stratum = require("stratum-pool")
const { log } = require("console")

const doge = { 
   "name": "Dogecoin",
   "symbol": "DOGE",
   "algorithm": "scrypt"
}

const poolConfig = {
   "coin": doge,
   "address": "nhA6ENxa9fVGEqzqTJ7i4JZBk6RXDxGCZe",
   "blockRefreshInterval": 2000,
   "connectionTimeout": 600,
   "emitInvalidBlockHashes": false,
   "tcpProxyProtocol": false,
   "banning": {
      "enabled": false,
      "time": 600,
      "invalidPercent": 50,
      "checkThreshold": 500,
      "purgeInterval": 300
   },
   "ports": {
      "3032": {
         "diff": 0.0002441
      }
   },
   "daemons": [
      {  
         "host": "127.0.0.1",
         "port": 44555,
         "user": "vikas",
         "password": "V!k@$"
      }
   ]
}

const pool = Stratum.createPool(poolConfig, (ip, port, workerName, password, callback) => {
   log("Authorize " + workerName + ":" + password + "@" + ip)
   callback({
      error: null,
      authorized: true,
      disconnect: false
   })
})

// pool.on('log', (severity, logKey, logText) => {
//    log(severity + ': ' + '[' + logKey + '] ' + logText)
// })

pool.on('share', (isValidShare, isValidBlock, data) => {
   isValidBlock     ? log('Block found') :
   isValidShare     ? log('Valid share submitted') :
   (data.blockHash) ? log('We thought a block was found but it was rejected by the daemon')
                    : log('Invalid share submitted')
   log('share data: ', data)
})

pool.start()