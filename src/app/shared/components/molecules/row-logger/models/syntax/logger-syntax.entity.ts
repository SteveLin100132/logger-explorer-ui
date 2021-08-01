/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌句法資料實體
 * @CREATE Saturday, 17th July 2021 2:43:43 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import RegexParser from 'regex-parser';
import { LoggerSyntax, SyntaxColor } from './logger-syntax.model';

/**
 * 日誌句法資料實體
 */
export class LoggerSyntaxEntity implements LoggerSyntax {
  /**
   * 句法正規表達式
   */
  public regexp: string | RegExp = `//g`;
  /**
   * 句法色調
   */
  public color: SyntaxColor = 'light';

  /**
   * @param syntax 日誌句法
   */
  constructor(syntax: LoggerSyntax) {
    this.regexp = RegexParser(syntax.regexp.toString());
    this.color = syntax.color;
  }
}
