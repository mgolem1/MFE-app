//** Merge two different webpack configs*/
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig={
    mode:'development',
    devServer:{
        port:8080,
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                bill: 'bill@http://localhost:8083/remoteEntry.js',
                store: 'store@http://localhost:8082/remoteEntry.js'
            },
            shared: packageJson.dependencies,
        }),

    ]
}

module.exports=merge(commonConfig,devConfig);