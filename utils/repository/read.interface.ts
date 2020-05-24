export interface IRead<T> {
  find(): Promise<any>;
  findOne(id: string): Promise<any>;
}
