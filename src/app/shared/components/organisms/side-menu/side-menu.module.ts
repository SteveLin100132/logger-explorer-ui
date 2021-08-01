/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 側邊選單模組
 * @CREATE Sunday, 18th July 2021 11:34:37 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { DownloadOutline, FileOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { pluck } from 'rxjs/operators';
import { Config } from 'src/app/shared/models';
import { ProgressMaskModule } from '../../molecules';
import { TechBlockModule } from '../../templates';
import {
  MenuItemReaderService,
  MenuReader,
  MenuReaderService,
  MENU_ITEM_PATH_TOKEN,
} from './service';
import { SideMenuComponent } from './side-menu.component';

/**
 * 側邊選單模組
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NzIconModule.forRoot([DownloadOutline, FileOutline]),
    TechBlockModule,
    ProgressMaskModule,
  ],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent],
  providers: [
    {
      provide: MENU_ITEM_PATH_TOKEN,
      useValue: 'http://localhost:3001/',
    },
    {
      provide: MenuReaderService,
      useClass: MenuReaderService,
    },
    {
      provide: MenuItemReaderService,
      useClass: MenuItemReaderService,
    },
  ],
})
export class SideMenuModule {
  /**
   * 客製模組服務
   *
   * @method public
   * @param path       選單內容查詢路徑
   * @param menuReader 側邊選單內容讀取服務
   * @return 回傳客製後的模組
   */
  public static forRoot(
    path: string,
    menuReader?: MenuReader
  ): ModuleWithProviders {
    return {
      ngModule: SideMenuModule,
      providers: [
        {
          provide: MENU_ITEM_PATH_TOKEN,
          useFactory: (http: HttpClient) =>
            http.get<Config>(path).pipe(pluck('api')).toPromise(),
          deps: [HttpClient],
        },
        {
          provide: MenuReaderService,
          useClass: menuReader || MenuReaderService,
        },
      ],
    };
  }
}
