const devConfig = {
    MONGO_URL: process.env.MONGO_DEV
};
const testConfig = {
    MONGO_URL: process.env.MONGO_TEST
};
const prodConfig = {
    MONGO_URL: process.env.MONGO_PROD
};

function envConfig(env) {
    switch (env) {
        case 'development':
        return devConfig;
        case 'test':
        return testConfig;
        default:
        return prodConfig;
    }
}
  
  module.exports = envConfig(process.env.NODE_ENV)