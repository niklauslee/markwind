/**
 * Core library functionality
 */
export class Markwind {
  private name: string;

  constructor(name: string = "Markwind") {
    this.name = name;
  }

  /**
   * Get the name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Set the name
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Process text (example function)
   */
  public processText(text: string): string {
    return `[${this.name}] Processing: ${text}`;
  }

  /**
   * Transform data (example function)
   */
  public transform(data: unknown): string {
    return JSON.stringify(data, null, 2);
  }
}

/**
 * Utility functions
 */
export const utils = {
  /**
   * Check if a string is empty
   */
  isEmpty: (str: string): boolean => {
    return !str || str.trim().length === 0;
  },

  /**
   * Capitalize first letter
   */
  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};

// Export default instance
export default new Markwind();
