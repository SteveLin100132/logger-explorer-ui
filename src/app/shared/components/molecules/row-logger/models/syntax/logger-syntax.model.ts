/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌句法資料模型
 * @CREATE Saturday, 17th July 2021 2:28:35 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 日誌句法色調
 */
export type SyntaxColor =
  | 'dark'
  | 'light'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'green'
  | 'magenta'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'volcano'
  | 'geekblue'
  | 'lime'
  | 'gold';

/**
 * 日誌句法資料模型
 */
export interface LoggerSyntax {
  /**
   * 句法正規表達式
   */
  regexp: string | RegExp;
  /**
   * 句法色調
   */
  color: SyntaxColor;
}
