// tests/app.test.js
const assert = require("assert");
const { addNumbers } = require("../app");

describe("Testiranje addNumbers funkcije", () => {
  it("Očekuje se da funkcija vrati tačan rezultat", () => {
    const rezultat = addNumbers(2, 3);
    assert.strictEqual(rezultat, 5);
  });

  it("Očekuje se da funkcija radi ispravno za negativne brojeve", () => {
    const rezultat = addNumbers(-5, 7);
    assert.strictEqual(rezultat, 2);
  });

  it("Očekuje se da funkcija radi ispravno za nulu", () => {
    const rezultat = addNumbers(0, 10);
    assert.strictEqual(rezultat, 10);
  });
});
