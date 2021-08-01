/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 抽象圖表時間間距建構者
 * @CREATE Sunday, 18th July 2021 9:35:58 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 抽象圖表時間間距建構者
 */
export interface ChartTimeIntervalBuilder {
  /**
   * 建構圖表時間間距
   *
   * @method public
   * @param timestamp 時間戳
   * @return 回傳物件本身
   */
  build(timestamp: number): ChartTimeIntervalBuilder;
}
