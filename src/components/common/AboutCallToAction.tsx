'use client';

export const AboutCallToAction = () => {
  const handleDownload = () => {
    const pdfUrl = '/adeziune.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'adeziune.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl font-playfair font-semibold mb-4">Alătură-te Sindicatului Nostru</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Împreună suntem mai puternici. Devino membru al Sindicatului Național Solidaritatea și beneficiază de protecție
        și suport profesional.
      </p>
      <button
        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        onClick={handleDownload}
      >
        Devino Membru
      </button>
    </div>
  );
};
