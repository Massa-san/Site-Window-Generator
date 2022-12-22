export default interface Api{
  launch:(data: string) => void;
  getDocumentById:(data: string) => void;
  getDocumentByClassName:(data: string) => void;
  click:(data: string) => void;
}
declare global {
  interface Window {
    api: Api;
  }
}