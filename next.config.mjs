/** @type {import('next').NextConfig} */

const targetUrl =
  "https://apiv3.apifootball.com/?APIkey=4dd0f7d3c60a0269c8d224a582d58bf945c52959e384e52d3e4d8c1101015836";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/football-api/:action",
        destination: `${targetUrl}&action=:action`,
      },
      {
        source: "/football-api/:action/country/:country",
        destination: `${targetUrl}&action=:action&country_id=:country`,
      },
    ];
  },
};

export default nextConfig;
