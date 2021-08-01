/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌標籤資料模型
 * @CREATE Saturday, 17th July 2021 4:03:01 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 日誌標籤資料模型
 */
export interface LoggerTag {
  /**
   * 日誌標籤顏色
   */
  color?: string;
  /**
   * 日誌標籤圖標
   */
  icon: string;
}
