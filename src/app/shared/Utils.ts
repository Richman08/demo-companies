export class Utils {
    static isMissing(value: any): boolean {
      return value === null || typeof value === "undefined";
    }
  }