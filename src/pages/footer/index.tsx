export function Footer() {
  return (
    <footer className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
          giovana raphaelli.
        </span>
        <span className="font-mono text-xs text-light-secondary/50 dark:text-dark-secondary/50">
          © {new Date().getFullYear()} · todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}
