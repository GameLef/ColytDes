interface Window {
  versions: Versions;
}

interface Versions {
  invoke: (channel: string, ...args: any[]) => Promise<any>;
  [key: string]: any;
}
