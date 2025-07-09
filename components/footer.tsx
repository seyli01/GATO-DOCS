export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center justify-center h-full text-muted-foreground text-sm flex-wrap py-0 px-4">
        © {new Date().getFullYear()} Gato bot Documentation.
      </div>
    </footer>
  );
}
