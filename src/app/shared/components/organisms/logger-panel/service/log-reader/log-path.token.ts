/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌存放路徑注入 Token
 * @CREATE Saturday, 17th July 2021 5:03:03 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { InjectionToken } from '@angular/core';

/**
 * 日誌存放路徑注入 Token
 */
export const LOGGER_PATH_TOKEN = new InjectionToken<string>(
  'logger.path.token',
);
