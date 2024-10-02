import { generateEstoniaId, generateLatviaId, generateLithuaniaId } from '../src/codeGenerator';

// Test for Estonia ID generation
test('Estonia ID should start with "EST-" and be 8 characters long', () => {
    const code: string = generateEstoniaId();
    expect(code.startsWith('EST-')).toBe(true);
    expect(code.length).toBe(8);
    expect(/EST-\d{4}/.test(code)).toBe(true);
});

// Test for Latvia ID generation
test('Latvia ID should start with "LVA-" and be 8 characters long', () => {
    const code: string = generateLatviaId();
    expect(code.startsWith('LVA-')).toBe(true);
    expect(code.length).toBe(8);
    expect(/LVA-\d{4}/.test(code)).toBe(true);
});

// Test for Lithuania ID generation
test('Lithuania ID should start with "LTU-" and be 8 characters long', () => {
    const code: string = generateLithuaniaId();
    expect(code.startsWith('LTU-')).toBe(true);
    expect(code.length).toBe(8);
    expect(/LTU-\d{4}/.test(code)).toBe(true);
});
