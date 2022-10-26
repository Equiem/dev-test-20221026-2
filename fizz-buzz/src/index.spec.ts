import { expect } from "chai";
import { fizzBuzz } from "./";

describe("Test 1", () => {
  it("returns FizzBuzz", () => {
    expect(fizzBuzz(1)).to.equal("1");
    expect(fizzBuzz(2)).to.equal("1,2");
    expect(fizzBuzz(3)).to.equal("1,2,Fizz");
    expect(fizzBuzz(4)).to.equal("1,2,Fizz,4");
    expect(fizzBuzz(5)).to.equal("1,2,Fizz,4,Buzz");
    expect(fizzBuzz(6)).to.equal("1,2,Fizz,4,Buzz,Fizz");
    expect(fizzBuzz(7)).to.equal("1,2,Fizz,4,Buzz,Fizz,7");
    expect(fizzBuzz(8)).to.equal("1,2,Fizz,4,Buzz,Fizz,7,8");
    expect(fizzBuzz(9)).to.equal("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz");
    expect(fizzBuzz(10)).to.equal("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz");
    expect(fizzBuzz(11)).to.equal("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11");
    expect(fizzBuzz(12)).to.equal("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz");
    expect(fizzBuzz(13)).to.equal(
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13",
    );
    expect(fizzBuzz(14)).to.equal(
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14",
    );
    expect(fizzBuzz(15)).to.equal(
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz",
    );
  });
});
