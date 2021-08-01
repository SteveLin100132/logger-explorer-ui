/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： APP 模組
 * @CREATE Saturday, 17th July 2021 10:59:24 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigLoader, ConfigModule } from '@ngx-config/core';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigLoaderFactory, SideMenuModule } from './shared';

registerLocaleData(en);

/**
 * APP 模組
 */
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: ConfigLoaderFactory,
      deps: [HttpClient],
    }),
    SideMenuModule.forRoot('assets/configs/config.json'),
  ],
  declarations: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
