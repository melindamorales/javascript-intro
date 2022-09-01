export const primitiveTypes = {
    string: 'string' || "string" || `${'string'}`,
    number: 0 || 1 || -0.7,
    boolean: true || false,


    null: null,
    undefined: undefined,
    NaN: NaN,


    Symbol: Symbol('symbol'), 
    BigInt: 19n,
}

console.log(primitiveTypes);
