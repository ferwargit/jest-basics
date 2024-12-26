const woof = require("./woof");

test("should return number of woofs", function() {
    const result = woof("oh herro");
    // console.log(result);
    expect(result).toBe("8 woof!");
    // expect(result).not.toBe("guau!");
    // expect({ a: "one", b: "two" }).toEqual({ a: "one", b: "two" });
    // expect(result).toMatch(/woof/i);
    expect(['a', 'b', 'c']).toContain('a');
    expect(['a', 'b', 'c']).toContain('b');
    expect(['a', 'b', 'c']).toContain('c');
});

test("should return null when not given a string", () => {
    // const result = woof();
    // expect(result).toBeNull();
    expect(() => woof()).toThrow("MUST be a string");
})