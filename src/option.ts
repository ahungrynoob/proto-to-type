export type Option = {
  rootDir?: string
  outDir?: string
  prettier?: boolean
  constEnum?: boolean
  constant?: boolean
  searchPaths?: string[]
}

export const defaultOption = {
  rootDir: '.',
  outDir: './typings',
  constant: true,
  constEnum: false,
  prettier: false,
  searchPaths: [],
}
