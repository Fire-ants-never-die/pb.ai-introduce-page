const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">PB.</span>
            <span className="text-2xl font-bold text-primary">ai</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <span
              onClick={(e) => e.preventDefault()}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              이용약관
            </span>
            <span
              onClick={(e) => e.preventDefault()}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              개인정보처리방침
            </span>
            <a
              href="https://forms.gle/7wYvkg6iB3KUtbjV6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              문의하기
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 BullAnts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
