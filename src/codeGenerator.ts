// Function to generate an Estonia ID
export function generateEstoniaId(): string {
  const prefix = 'EST-'
  const randomNumber: number = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}${randomNumber}`
}

// Function to generate a Latvia ID
export function generateLatviaId(): string {
  const prefix = 'LVA-'
  const randomNumber: number = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}${randomNumber}`
}

// Function to generate a Lithuania ID
export function generateLithuaniaId(): string {
  const prefix = 'LTU-'
  const randomNumber: number = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}${randomNumber}`
}
