// next.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');

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
        route: "/en/business/home",
        page: "/[lang]/business/home",
        query: {lang: "en"}
    },
    {
        route: "/ar/business/home",
        page: "/[lang]/business/home",
        query: {lang: "ar"}
    },
]

const nextConfig = {
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
    redirects: async () => {
        return [
            {
                source: '/en',
                destination: '/en/business',
                permanent: true,
            },
            {
                source: '/ar',
                destination: '/ar/business',
                permanent: true,
            },
        ]
    },
    webpack: config => {
        config.plugins = config.plugins || [];

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
