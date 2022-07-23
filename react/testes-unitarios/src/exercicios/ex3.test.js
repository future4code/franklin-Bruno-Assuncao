import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("Chegar itens duplicados pra [1, 2 ,1]", () => {
    const result = checaItensDuplicados([1, 2, 1]);

    expect(result).toEqual(true);
  });
  test("Chegar itens duplicados pra []", () => {
    const result = checaItensDuplicados([]);

    expect(result).toEqual(false);
  });
  test("Chegar itens duplicados pra [5, 5, 3, 6, 5, 6]", () => {
    const result = checaItensDuplicados([5, 5, 3, 6, 5, 6]);

    expect(result).toEqual(true);
  });
  test("Chegar itens duplicados pra [1, 2, 3]", () => {
    const result = checaItensDuplicados([1, 2, 3]);

    expect(result).toEqual(false);
  });
});
