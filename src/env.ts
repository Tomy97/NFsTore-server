import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

const defaults: Record<string, any> = {
  CONFIG_PATH: path.resolve(process.cwd()),
}

let env: Record<string, any> = {
  ...defaults,
  ...process.env,
  ...getEnv(),
}

process.env = env
export default env

function getEnv() {
  const configPath = path.resolve(
    process.env.PWD || defaults.CONFIG_PATH,
    '.env',
  )

  if (fs.existsSync(configPath) === false) return {}
  return dotenv.parse(fs.readFileSync(configPath, { encoding: 'utf8' }))
}
