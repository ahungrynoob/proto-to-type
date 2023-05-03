import assert from 'assert'

import { globSync } from 'glob'

import { Option, defaultOption } from './option'

export default function generate(filenames: string[], option: Option = {}) {
  option = { ...defaultOption, ...option }

  if (!filenames || filenames.length === 0) {
    throw new TypeError('proto files should be specified')
  }

  const filePaths = globSync(filenames, {
    cwd: option.rootDir,
    withFileTypes: true,
  })
    .filter((p) => p.isFile() && p.fullpath().endsWith('.proto'))
    .map((p) => p.fullpath())
  assert(
    filePaths.length,
    `can not find any proto files under ${option.rootDir}`,
  )
}
