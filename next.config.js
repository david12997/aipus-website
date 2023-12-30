/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname:'cms.aipus.co',
                pathname:'/aipus/assets/**'
            }
        ]
    },

}

module.exports = nextConfig