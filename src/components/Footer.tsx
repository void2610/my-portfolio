export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} void2610. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}