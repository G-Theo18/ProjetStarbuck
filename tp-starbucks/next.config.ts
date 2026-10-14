import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// v AJOUTER v
  serverExternalPackages: ["@electric-sql/pglite"],
};

export default nextConfig;

