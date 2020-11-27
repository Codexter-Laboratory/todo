// next.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const pathList = [
    {
        route: "/",
        page: "/",
        query: {}
    },
    {
        route: "/en",
        page: "/[lang]",
        query: {lang: "en"}
    },
    {
        route: "/ar",
        page: "/[lang]",
        query: {lang: "ar"}
    },
    {
        route: "/en/business",
        page: "/[lang]/business",
        query: {lang: "en"}
    },
    {
        route: "/ar/business",
        page: "/[lang]/business",
        query: {lang: "ar"}
    },
    {
        route: "/en/business/privacy_policy",
        page: "/[lang]/business/privacy_policy",
        query: {lang: "en"}
    },
    {
        route: "/ar/business/privacy_policy",
        page: "/[lang]/business/privacy_policy",
        query: {lang: "ar"}
    },
    {
        route: "/en/consumer",
        page: "/[lang]/consumer",
        query: {lang: "en"}
    },
    {
        route: "/ar/consumer",
        page: "/[lang]/consumer",
        query: {lang: "ar"}
    },
    {
        route: "/en/consumer/privacy_policy",
        page: "/[lang]/consumer/privacy_policy",
        query: {lang: "en"}
    },
    {
        route: "/ar/consumer/privacy_policy",
        page: "/[lang]/consumer/privacy_policy",
        query: {lang: "ar"}
    },
    {
        route: "/en/consumer/careers",
        page: "/[lang]/consumer/careers",
        query: {lang: "en"}
    },
    {
        route: "/ar/consumer/careers",
        page: "/[lang]/consumer/careers",
        query: {lang: "ar"}
    },
    {
        route: "/en/our_story",
        page: "/[lang]/our_story",
        query: {lang: "en"}
    },
    {
        route: "/ar/our_story",
        page: "/[lang]/our_story",
        query: {lang: "ar"}
    },
    {
        route: "/en/press",
        page: "/[lang]/press",
        query: {lang: "en"}
    },
    {
        route: "/ar/press",
        page: "/[lang]/press",
        query: {lang: "ar"}
    },
]

const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    exportPathMap: async (
        defaultPathMap,
        {dev, dir, outDir, distDir, buildId}
    ) => {
        dev = false;
        const paths = {};
        pathList.map(p => {
            paths[p.route] = { page: p.page, query: p.query };
        });
        return paths;
    },

    webpack: config => {
        config.plugins = config.plugins || [];
        config.resolve.plugins = [new TsconfigPathsPlugin({configFile: './tsconfig.json'})];
        config.plugins = [
            ...config.plugins,

            new Dotenv({ // Config in .env file
                path: path.join(__dirname, '.env'),
                systemvars: true,
                development: false,
            }),
        ];

        return config;
    }
}

module.exports = {...nextConfig};
