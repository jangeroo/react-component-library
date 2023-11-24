export function css (module: Record<string, string>, names: string[]): string {
  return names.map(className => module[className]).join(' ')
}
