import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const CONFIG_FILENAME = 'page-config.yaml';

interface ConfigProps {
  db: {
    db_name: string;
    user_name: string;
    host: string;
    password: string;
    port: number;
    db_type: string;
  }
}


export const config = (() => {
  return yaml.load(
    readFileSync(CONFIG_FILENAME, 'utf8'),
  ) as ConfigProps;
})();