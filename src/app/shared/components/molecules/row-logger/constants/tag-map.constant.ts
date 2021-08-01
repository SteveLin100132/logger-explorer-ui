/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 標籤 Mapping 常數
 * @CREATE Saturday, 17th July 2021 4:30:00 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { InjectionToken } from '@angular/core';
import { LoggerTag } from '../models';

/**
 * 標籤 Mapping 常數注入 Token
 */
export const TAG_MAPPING_TOKEN = new InjectionToken<Map<string, LoggerTag>>(
  'logger.tag.mapping.token',
);

/**
 * 標籤 Mapping 常數
 */
export const TAG_MAPPING = new Map<string, LoggerTag>([
  ['LOG', { icon: 'check-circle' }],
  ['TRACE', { icon: 'check-circle' }],
  ['INFO', { icon: 'check-circle' }],
  ['DEBUG', { color: 'yellow', icon: 'exclamation-circle' }],
  ['WARN', { color: 'yellow', icon: 'exclamation-circle' }],
  ['ERROR', { color: 'red', icon: 'close-circle' }],
  ['FATAL', { color: 'red', icon: 'close-circle' }],
]);
