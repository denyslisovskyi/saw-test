export default function Header() {
  return (
    <header className="w-full py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Vash Vybir</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-black">
            Про нас
          </a>
          <a href="#help" className="text-gray-700 hover:text-black">
            Як допомогти
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black">
            Контакти
          </a>
        </nav>
      </div>
    </header>
  );
}
