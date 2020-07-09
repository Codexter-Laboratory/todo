// next.config.js

const path = require('path');

const pathList = [
    {
        route: "/",
        page: "/",
        query: {}
    }
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
}

module.exports = {...nextConfig};
