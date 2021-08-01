/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 設定檔載入器
 * @CREATE Saturday, 24th July 2021 10:53:43 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpClient } from '@angular/common/http';
import { ConfigLoader } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';

/**
 * 設定檔載入器
 *
 * @param http HTTP 請求
 * @return 回傳設定檔載入器
 */
export function ConfigLoaderFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, '/assets/configs/config.json');
}
