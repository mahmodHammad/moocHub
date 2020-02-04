export default function (pdfsrc) {
    const displayPdf = `https://drive.google.com/file/d/${pdfsrc}/preview`;
    const downloadPdf = `https://drive.google.com/uc?authuser=0&id=${pdfsrc}&export=download`;
    return {displayPdf ,downloadPdf};
  }