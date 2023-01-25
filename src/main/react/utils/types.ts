export type ArrayOrSelf<T> = T | T[];
export type SupplierOrSelf<T> = T | (() => T);
export type PromiseOrSelf<T> = T | Promise<T>