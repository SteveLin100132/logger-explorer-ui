/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 抽象側邊選單內容讀取服務
 * @CREATE Saturday, 24th July 2021 11:14:37 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Observable } from 'rxjs';

/**
 * 抽象側邊選單內容讀取服務
 */
export interface MenuReader {
  /**
   * 抓取側邊選單內容
   *
   * @method public
   * @param path 查詢路徑
   * @return 回傳側邊選單內容
   */
  fetch(path: string): Observable<string[]>;
}
