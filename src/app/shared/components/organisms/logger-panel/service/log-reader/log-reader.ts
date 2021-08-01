/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 抽象日誌讀取服務
 * @CREATE Saturday, 17th July 2021 7:26:17 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Observable } from 'rxjs';

/**
 * 抽象日誌讀取服務
 */
export interface LogReader {
  /**
   * 解析日誌
   *
   * @method public
   * @param logger 日誌
   * @return 回傳解析後的日誌
   */
  resolve(logger: string): string[];

  /**
   * 抓取日誌
   *
   * @method public
   * @param filename 日誌檔案名稱
   * @return 回傳日誌
   */
  fetch(filename: string): Observable<string[]>;
}
