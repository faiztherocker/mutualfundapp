export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  delete(item: T): Promise<string>;
}
