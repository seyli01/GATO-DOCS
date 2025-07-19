import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center justify-center h-full text-muted-foreground text-sm flex-wrap py-0 px-4 gap-4">
        © {new Date().getFullYear()} Gato bot Documentation.
        <Link href="/docs/terms-of-service" className="underline hover:text-primary transition-colors">Terms of Service</Link>
        <Link href="/docs/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
}
