import { getRenderType } from "./meta";

test("getRenderType knows simple values", () => {
    expect(getRenderType(0)).toStrictEqual({ type: "simple-value", value: "0" });
    expect(getRenderType(false)).toStrictEqual({
        type: "simple-value",
        value: "false",
    });
    expect(getRenderType(true)).toStrictEqual({
        type: "simple-value",
        value: "true",
    });
    expect(getRenderType(1.2)).toStrictEqual({
        type: "simple-value",
        value: "1.2",
    });
    expect(getRenderType("Hello")).toStrictEqual({
        type: "simple-value",
        value: "Hello",
    });
    expect(getRenderType(undefined)).toStrictEqual({
        type: "simple-value",
        value: "undefined",
    });
});

test("getRenderType knows objects", () => {
    expect(getRenderType(null)).toStrictEqual({
        type: "simple-value",
        value: "null",
    });
    expect(getRenderType({ x: 5 })).toStrictEqual({
        type: "object",
        value: { x: 5 },
    });
    expect(getRenderType([1, 2, 3])).toStrictEqual({
        keys: [],
        type: "array",
        value: [1, 2, 3],
    });
    expect(getRenderType([{ x: 5 }, { y: 6 }, null])).toStrictEqual({
        keys: ['x', 'y'],
        type: "array",
        value: [{ x: 5 }, { y: 6 }, null],
    });
});
