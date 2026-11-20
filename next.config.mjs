/** @type {import('next').NextConfig} */
const nextConfig = {
  // The sandbox preview proxies the dev server through a host like
  // https://<port>-<sandbox-id>.e2b.app. Next 15 blocks cross-origin dev
  // requests (including /_next assets and HMR) unless the proxy host is allowed.
  allowedDevOrigins: [
    "*.e2b.app",
    "*.arena.ai",
    "*.usercontent.goog",
    "localhost:3001",
    "127.0.0.1:3001",
  ],
};

export default nextConfig;
