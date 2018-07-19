declare var document;

export const copyToClipboard = (url: string) => {
  document.addEventListener('copy', (e: ClipboardEvent) => {
    e.clipboardData.setData('text/plain', url);
    e.preventDefault();
    document.removeEventListener('copy', () => {});
  });
  document.execCommand('copy');
};
