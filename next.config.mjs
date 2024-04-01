/** @type {import('next').NextConfig} */

const apiKey =
  "5505674c332ec62b68f01ede9a05cb934e82b518a7a86315e91490db9a2a62ad";
const targetUrl = `https://apiv3.apifootball.com/?APIkey=${apiKey}`;

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
      {
        source: "/football-api/:action/teams/:league",
        destination: `${targetUrl}&action=:action&league_id=:league`,
      },
    ];
  },
};

export default nextConfig;
