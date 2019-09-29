import { MatPaginatorIntl } from '@angular/material';
import { TranslateParser, TranslateService } from '@ngx-translate/core';

export class MyMatPaginatorIntl extends MatPaginatorIntl {

  private rangeLabelIntl: string;

  constructor(private translateService: TranslateService, private translateParser: TranslateParser) {
    super();
    this.getTranslations();
    this.translateService.onLangChange.subscribe(() => this.getTranslations());
  }

  getTranslations() {
    this.translateService.get([
      'paginator.itemsPerPage',
      'paginator.nextPage',
      'paginator.previousPage',
      'paginator.firstPage',
      'paginator.lastPage',
      'paginator.rangeLabel'
    ]).subscribe((translation) => {
      this.itemsPerPageLabel = translation['paginator.itemsPerPage'];
      this.nextPageLabel = translation['paginator.nextPage'];
      this.previousPageLabel = translation['paginator.previousPage'];
      this.firstPageLabel = translation['paginator.firstPage'];
      this.lastPageLabel = translation['paginator.lastPage'];
      this.rangeLabelIntl = translation['paginator.rangeLabel'];
      this.changes.next();
    });
  }

  getRangeLabel = (page, pageSize, length) => {
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return this.translateParser.interpolate(this.rangeLabelIntl, { startIndex, endIndex, length });
  };

}