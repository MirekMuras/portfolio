const env = process.env;
//export not-default object;
export const nodeEnv = env.NODE_ENV || 'development';

// export default abject with properties;
export default {
    port: env.PORT || 8080
};

//export functions;
export const logStars = function(message) {
    console.info('************');
    console.info(message);
    console.info('----------------');
};
