//https://eth-ropsten.alchemyapi.io/v2/ivAL5XEQtwIdteiGoy3hiLzXlXounNTH
require('@nomiclabs/hardhat-waffle');

   module.exports = {

          solidity:'0.8.0',
            networks: { hardhat: {
                          },
              ropsten: {
                url:'https://eth-ropsten.alchemyapi.io/v2/ivAL5XEQtwIdteiGoy3hiLzXlXounNTH',
                     accounts: ['5ca6fdfa3776ac3d02e94327b40f3a976dca62b2579d5876e00cda32183a7ab0']
              }
            }
          }
