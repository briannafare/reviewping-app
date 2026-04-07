/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure server-only packages (twilio, stripe) are not bundled into client JS
  // This is required for packages that use Node.js built-ins
  serverExternalPackages: ["twilio", "stripe"],
};

export default nextConfig;
