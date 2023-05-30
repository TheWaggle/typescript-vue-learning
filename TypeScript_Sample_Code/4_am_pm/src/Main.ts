const TITLE: string = "TypeScript";

export function helloMessage(): void {
  console.log(`Hello,${TITLE}!`);
}

export class TsVersion {
  static getVersion(): string {
    return "4.9.5";
  }
}
