import 'dotenv/config';

import {localConf} from "./local.conf.js";
import {bsConf} from "./bs.conf.js";

function getConfig() {
  switch (process.env.ENVIRONMENT) {
    case 'local':
      return localConf
    case 'saucelabs':
      return sauceConf
    case 'browserstack':
      return bsConf
  }
}
export const config = getConfig()