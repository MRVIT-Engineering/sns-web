import Link from 'next/link';

export default function WorkInProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-gray-100 p-4">
      <div className="p-8 rounded-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Pagină în lucru</h1>
        <p className="text-gray-600 mb-6">
          Această pagină este în curs de dezvoltare. Vă rugăm să reveniți mai târziu.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
}
