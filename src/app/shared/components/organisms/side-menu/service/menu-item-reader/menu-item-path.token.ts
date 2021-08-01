/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 側邊選單項目查詢路徑注入 Token
 * @CREATE Saturday, 24th July 2021 12:57:00 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { InjectionToken } from '@angular/core';

/**
 * 側邊選單項目查詢路徑注入 Token
 */
export const MENU_ITEM_PATH_TOKEN = new InjectionToken<Promise<string>>(
  'menu.item.path.token'
);
