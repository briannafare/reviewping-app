import { LogoFull } from "./Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <LogoFull className="[&_span]:text-white" />
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Built for home service businesses. Get more Google reviews with zero effort.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a href="mailto:support@reviewping.app" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ReviewPing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
