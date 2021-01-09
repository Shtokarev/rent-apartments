/* eslint-disable @typescript-eslint/explicit-function-return-type */
const dotEnv = require('dotenv').config();

const HOST = process.env.HOST || 'localhost';
const isDevelopment = process.env.NODE_ENV !== 'production';

console.table(dotEnv.parsed);

let customWebpackConfig = {
    trailingSlash: true,
    env: {
        NEXT_TELEMETRY_DISABLED: 1,
    },
    // compress should be disabled if there is a Nginx proxy or similar in front.
    // https://nextjs.org/docs/api-reference/next.config.js/compression
    compress: false,
    poweredByHeader: false,
    // serverRuntimeConfig: {
    //     PORT: process.env.PORT || '3000',
    // },
    // publicRuntimeConfig: {
    //     IS_DEVELOPMENT: isDevelopment,
    // },
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    // },
    // images: {
    //     deviceSizes: [192, 256, 384, 640, 750, 828, 1080, 1200],
    //     imageSizes: [16, 32, 48, 64, 96, 128],
    //     domains: [SSR_URI.replace(/(https?:\/\/)?(www.)?/i, '')],
    // },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // config.plugins.push(
        //     new webpack.NormalModuleReplacementPlugin(/-ENVNAME|-BRANDNAME/, function (resource) {
        //         resource.request = resource.request
        //             .replace(/-BRANDNAME/, `-${BRANDNAME}`)
        //             .replace(/-ENVNAME/, `-${ENVNAME}`);
        //     })
        // );

        // config.module.rules.push({
        //     test: /\.svg$/,
        //     issuer: {
        //         test: /\.(js|ts)x?$/,
        //     },
        //     use: ['@svgr/webpack'],
        // });
        return config;
    },
};

if (isDevelopment) {
    const withSourceMaps = require('@zeit/next-source-maps');
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
    });

    customWebpackConfig = withSourceMaps(customWebpackConfig);
    customWebpackConfig = withBundleAnalyzer(customWebpackConfig);
}

module.exports = customWebpackConfig;
