"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastDom = void 0;
class FastDom {
    constructor() {
        this.cache = new Map();
        // Optional: Preload commonly accessed elements on initialization
        this.indexAllIds();
    }
    // Cache all elements with an ID for faster lookups
    indexAllIds() {
        const elements = document.querySelectorAll("[id]");
        elements.forEach((el) => {
            this.cache.set(el.id, el);
        });
    }
    /**
     * Queries an element by ID with error handling and caching.
     * @param id - The ID of the element to query.
     */
    queryById(id) {
        if (this.cache.has(id)) {
            return this.cache.get(id);
        }
        const element = document.getElementById(id);
        if (!element) {
            throw new Error(`[FastDom] Element with ID "${id}" not found.`);
        }
        this.cache.set(id, element);
        return element;
    }
    /**
     * Queries elements by a CSS selector with performance improvements.
     * @param selector - A CSS selector string.
     */
    query(selector) {
        try {
            const elements = Array.from(document.querySelectorAll(selector));
            if (elements.length === 0) {
                throw new Error(`[FastDom] No elements found for selector: "${selector}"`);
            }
            return elements;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`[FastDom] Query error for selector "${selector}": ${error.message}`);
            }
            else {
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
    safeSetAttribute(element, attribute, value) {
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
    handleError(error, context) {
        console.error(`[FastDom] Error during operation: ${context}`, error);
    }
}
exports.FastDom = FastDom;
