/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： APP 元件
 * @CREATE Saturday, 17th July 2021 10:59:24 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { LoggerService } from './pages';
import { Config, ConfigEntity, MenuReaderService } from './shared';

/**
 * APP 元件
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  /**
   * 側邊選單內容
   */
  public sideMenu: string[] = [];

  /**
   * @param configService 設定檔服務
   * @param menuReader    側邊選單內容讀取服務
   * @param loggerService 日誌服務
   */
  constructor(
    private readonly configService: ConfigService,
    private readonly menuReader: MenuReaderService,
    private readonly loggerService: LoggerService
  ) {}

  /**
   * 初始化
   *
   * @method public
   */
  public async ngOnInit(): Promise<void> {
    // 取得設定檔，並加入全域物件中
    const config = this.configService.getSettings<Config>();
    ConfigEntity.global = config;

    // 獲取日誌檔案清單
    this.sideMenu = await this.menuReader
      .fetch(`${config.api.replace(/\/$/g, '')}/logs/filename`)
      .toPromise();
  }

  /**
   * 當解析日誌時
   *
   * @method public
   * @param resolve 解析完成與否
   */
  public onLoggerResolved(resolve: boolean): void {
    this.loggerService.onLoading.next(resolve);
  }

  /**
   * 當要顯示日誌時
   *
   * @method public
   * @param logger 要顯示的日誌
   */
  public onDisplayLogged(logger: string[]): void {
    this.loggerService.onLoggerChanged.next(logger);
  }
}
