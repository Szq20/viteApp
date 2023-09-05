const env = {
    dev: 'http://bjdd-ivip-lts-v100-02.bjdd.baidu.com:8051',
};

export default {
    proxy: {
        '/promptflow': {
            target: env.dev,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/promptflow/, ''),
        }
    },
};
