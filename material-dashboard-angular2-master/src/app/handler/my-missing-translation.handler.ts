import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams
} from '@ngx-translate/core';

import { environment } from '../../environments/environment';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams) {
    if (!environment.production) {
      console.warn('Missing translation for the key: ' + params.key);
    }
    return params.key;
  }
}
