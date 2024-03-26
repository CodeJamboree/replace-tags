/**
 * Interface for an object with string keys and values of a generic type.
 * @template T - The type of the values. Defaults to `unknown`.
 */
interface KeyedObject<T = unknown> {
  [key: string]: T;
}
export default KeyedObject;
