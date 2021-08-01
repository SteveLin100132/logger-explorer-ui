/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 設定檔資料實體
 * @CREATE Saturday, 24th July 2021 11:00:43 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Config } from './config.model';

/**
 * 設定檔資料實體
 */
export class ConfigEntity implements Config {
  /**
   * 設定檔資料實體實例
   */
  public static instance = new ConfigEntity();
  /**
   * 日誌讀取 API 路徑
   */
  public api = 'assets/mocks/logs';

  /**
   * @param config 設定檔資料
   */
  constructor(config?: Partial<Config>) {
    this.api = config?.api?.replace(/\/$/g, '') || this.api;
  }

  /**
   * 設定全域設定檔
   *
   * @method public
   * @param config 設定檔資料
   */
  public static set global(config: Config) {
    config.api = config.api.replace(/\/$/g, '');
    ConfigEntity.instance = new ConfigEntity(config);
  }
}
