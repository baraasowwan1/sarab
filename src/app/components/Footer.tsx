export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl mb-1">سراب • SARAB</h3>
          <p className="text-gray-400">Reflecting Elegance in Every Space</p>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sarab Mirror Decor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
