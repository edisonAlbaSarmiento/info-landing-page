/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	exportPathMap: async function () {
		return {
			'/src/': { page: '/' },
			'/src/pages/detail': { page: '/detail/[id]' },
		};
	},
};

module.exports = nextConfig;
