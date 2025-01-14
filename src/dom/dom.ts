export class FastDom {
    private cache: Map<string, HTMLElement> = new Map();
  
    constructor() {
      // Optional: Preload commonly accessed elements on initialization
      this.indexAllIds();
    }
  
    // Cache all elements with an ID for faster lookups
    private indexAllIds(): void {
      const elements = document.querySelectorAll("[id]");
      elements.forEach((el) => {
        this.cache.set(el.id, el as HTMLElement);
      });
    }
  
    /**
     * Queries an element by ID with error handling and caching.
     * @param id - The ID of the element to query.
     */
    public queryById<T extends HTMLElement>(id: string): T {
      if (this.cache.has(id)) {
        return this.cache.get(id) as T;
      }
  
      const element = document.getElementById(id);
      if (!element) {
        throw new Error(`[FastDom] Element with ID "${id}" not found.`);
      }
  
      this.cache.set(id, element);
      return element as T;
    }
  
    /**
     * Queries elements by a CSS selector with performance improvements.
     * @param selector - A CSS selector string.
     */
    public query<T extends HTMLElement>(selector: string): T[] {
        try {
          const elements = Array.from(document.querySelectorAll(selector));
          if (elements.length === 0) {
            throw new Error(`[FastDom] No elements found for selector: "${selector}"`);
          }
          return elements as T[];
        } catch (error) {
          if (error instanceof Error) {
            console.error(`[FastDom] Query error for selector "${selector}": ${error.message}`);
          } else {
            console.error(`[FastDom] Unknown error during query for selector "${selector}"`, error);
          }
          return [];
        }
      }
      
  
    /**
     * Safely sets an attribute on an element with type validation.
     * @param element - The element to modify.
     * @param attribute - The attribute name.
     * @param value - The value to set.
     */
    public safeSetAttribute<T extends HTMLElement>(
      element: T,
      attribute: string,
      value: string
    ): void {
      if (!(element instanceof HTMLElement)) {
        throw new Error(`[FastDom] Invalid element type: ${typeof element}`);
      }
      element.setAttribute(attribute, value);
    }
  
    /**
     * Centralized error handling for debugging and logging.
     * @param error - The error object.
     * @param context - Additional context about the operation.
     */
    private handleError(error: Error, context: string): void {
      console.error(`[FastDom] Error during operation: ${context}`, error);
    }
  }
  