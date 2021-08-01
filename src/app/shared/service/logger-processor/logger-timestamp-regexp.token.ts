/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌時間戳正規表示式注入 Token
 * @CREATE Saturday, 17th July 2021 11:37:25 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { InjectionToken } from '@angular/core';

/**
 * 日誌時間戳正規表示式注入 Token
 */
export const LOG_TIMESTAMP_REGEXP_TOKEN = new InjectionToken<RegExp>(
  'logger.timestamp.regexp.token',
);
