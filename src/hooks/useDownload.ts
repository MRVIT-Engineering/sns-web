export const useDownload = (path: string) => {
  const download = () => {
    const pdfUrl = path;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'adeziune.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { download };
};
