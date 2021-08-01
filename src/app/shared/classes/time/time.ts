/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 時間公用功能
 * @CREATE Sunday, 18th July 2021 9:53:12 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 時間單位
 */
export type TimeUnit = 'ms' | 'sec' | 'min' | 'hr';

/**
 * 時間公用功能
 */
export class Time {
  /**
   * 秒當量
   */
  public static readonly sec = 1000;
  /**
   * 分當量
   */
  public static readonly min = 1000 * 60;
  /**
   * 小時當量
   */
  public static readonly hr = 1000 * 60 * 60;

  /**
   * 取得換算後的毫秒單位
   *
   * @method public
   * @param ms 毫秒
   * @return 回傳毫秒單位
   */
  public static getUnit(ms: number): TimeUnit {
    if (ms < Time.sec) {
      return 'ms';
    } else if (ms >= Time.sec && ms < Time.min) {
      return 'sec';
    } else if (ms >= Time.min && ms < Time.hr) {
      return 'min';
    } else {
      return 'hr';
    }
  }

  /**
   * 清除毫秒
   *
   * @method public
   * @param time 時間
   * @return 回傳清除毫秒後的時間
   */
  public static clearMilliSecond(time: number | Date): number {
    const date = new Date(time);
    date.setMilliseconds(0);
    return date.getTime();
  }

  /**
   * 清除秒
   *
   * @method public
   * @param time 時間
   * @return 回傳清除秒後的時間
   */
  public static clearSecond(time: number | Date): number {
    const date = new Date(time);
    date.setMilliseconds(0);
    date.setSeconds(0);
    return date.getTime();
  }

  /**
   * 清除分鐘
   *
   * @method public
   * @param time 時間
   * @return 回傳清除分鐘後的時間
   */
  public static clearMinute(time: number | Date): number {
    const date = new Date(time);
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    return date.getTime();
  }

  /**
   * 清除小時
   *
   * @method public
   * @param time 時間
   * @return 回傳清除小時後的時間
   */
  public static clearHour(time: number | Date): number {
    const date = new Date(time);
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date.getTime();
  }

  /**
   * 根據時間單位清除後綴單位時間
   *
   * @method public
   * @param time     時間
   * @param interval 時間間距
   * @return 回傳除後綴單位時間的時間
   */
  public static clearByInterval(time: number | Date, interval: number): number {
    const unit = Time.getUnit(interval);
    if (unit === 'ms') {
      return new Date(time).getTime();
    } else if (unit === 'sec') {
      return Time.clearMilliSecond(time);
    } else if (unit === 'min') {
      return Time.clearSecond(time);
    } else {
      return Time.clearMinute(time);
    }
  }
}
