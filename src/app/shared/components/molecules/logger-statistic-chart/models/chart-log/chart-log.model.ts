/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 圖表日誌資料模型
 * @CREATE Sunday, 18th July 2021 9:27:43 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 圖表日誌資料模型
 */
export interface ChartLog {
  /**
   * 日誌時間戳
   */
  timestamp: number;
  /**
   * 日誌時間
   */
  time?: string;
  /**
   * 普通日誌數量
   */
  normal: number;
  /**
   * 警告日誌數量
   */
  warn: number;
  /**
   * 錯誤日誌數量
   */
  error: number;
}
