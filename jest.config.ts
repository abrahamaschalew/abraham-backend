import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node'
}

jest.setTimeout(30000)
export default config
