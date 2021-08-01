/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌探索頁面模組
 * @CREATE Saturday, 17th July 2021 11:16:32 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  ConfigEntity,
  LoadingMaskModule,
  LoggerPanelModule,
  LoggerStatisticChartModule,
  TechPanelModule,
} from 'src/app/shared';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { ExplorerComponent } from './explorer.component';

/**
 * 日誌探索頁面模組
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExplorerRoutingModule,
    NzInputModule,
    TechPanelModule,
    LoadingMaskModule,
    LoggerStatisticChartModule,
    LoggerPanelModule.forRoot(ConfigEntity.instance.api),
  ],
  declarations: [ExplorerComponent],
})
export class ExplorerModule {}
