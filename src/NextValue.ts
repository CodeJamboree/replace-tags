/**
 * Interface for the next value in a path traversal.
 */
interface NextValue<T = unknown> {
  /**
   * The full path to the current value.
   */
  fullPath: string;
  /**
   * The current path segment being processed.
   * This property is optional.
   */
  currentPath?: string;
  /**
   * The current value at the path.
   * This can be of any type, but a specific type can be provided
   * when the NextValue interface is used for better type safety.
   */
  value: T;
}

export default NextValue;
