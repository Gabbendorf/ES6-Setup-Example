import {Example, gabi} from '../src/example'

let example = new Example();

  test("says hello Gabriella", () => {
    expect(example.greetGabriella()).toBe("hello Gabriella");
  })

  test("says hello someone", () => {
    expect(example.greet("Nic")).toBe("hello Nic");
  })

  test("gabi is Gabriella", () => {
    expect(gabi).toBe("Gabriella");
  })
