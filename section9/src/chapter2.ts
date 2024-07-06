/**
 * infer
 */

// infer은 참이되게 하는 값을 추론해서 그값으로 만듦

type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;
type FuncB = () => number;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // never

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
