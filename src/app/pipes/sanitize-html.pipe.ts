import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {}
  transform(value): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}
