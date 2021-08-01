/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 抽象日誌解析器
 * @CREATE Sunday, 25th July 2021 1:15:59 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 抽象日誌解析器
 */
export abstract class LoggerResolver {
  /**
   * 日誌標頭表示式
   */
  public abstract header: RegExp;

  /**
   * @param logger 日誌
   */
  constructor(protected logger: string) {}

  /**
   * 取得原始日誌資料
   *
   * @method public
   * @return 回傳原始日誌資料
   */
  public get log(): string {
    return this.logger;
  }

  /**
   * 將日誌群組化
   *
   * @method public
   * @param logger 日誌
   */
  public group(logger: string): RegExpMatchArray {
    return [...(logger.match(this.header) || []), '<END>'];
  }

  /**
   * 分割日誌
   *
   * @method public
   * @param logger 日誌
   * @param group  日誌群組
   * @return 回傳分割後的日誌
   */
  public split(logger: string, group: RegExpMatchArray): string[] {
    if (group.length <= 0) {
      return [];
    }

    let cloned = logger;
    const rows: string[] = [];
    const splited = group.reduce((curr, next) => {
      const placeholder = curr
        .split('')
        .map(() => '*')
        .join('');
      const start = cloned.trim().indexOf(curr);
      cloned = cloned.replace(curr, placeholder);
      const end = cloned.trim().indexOf(next);
      rows.push(logger.slice(start, end));
      return next;
    });
    return rows;
  }

  /**
   * 執行日誌解析
   *
   * @method public
   * @param start 日誌要解析的起始索引值
   * @param end   日誌要解析的結束索引值
   * @return 回傳解析後的日誌
   */
  public abstract resolve(start?: number, end?: number): string[];
}
