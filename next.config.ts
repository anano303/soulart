import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `
      @import "./styles/mixins.scss"; 
    `,
  },
};

export default nextConfig;
