/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 抽象日誌處理服務
 * @CREATE Saturday, 17th July 2021 11:42:30 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 抽象日誌處理服務
 */
export interface LoggerProcessor {
  /**
   * 取得日誌時間戳
   *
   * @method public
   * @param logger 日誌
   * @return 回傳日誌時間戳
   */
  getTimestamp(logger: string | string[]): number | number[];

  /**
   * 取得日誌的開始與結束時間
   *
   * @method public
   * @param logger 日誌
   * @return 回傳日誌的開始與結束時間
   */
  getStatAndEndTime(logger: string[]): [number, number];
}
