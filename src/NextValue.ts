/**
 * Interface for the next value in a path traversal.
 */
interface NextValue {
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
   * This can be of any type.
   */
  value: unknown;
}

export default NextValue;
