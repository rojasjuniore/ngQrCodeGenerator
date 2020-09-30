import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  template: `    
    <div style="text-align:center" class="content">
    <h1> Angular 10 QR Code Generator </h1>

    <ngx-qrcode
      [elementType]="elementType"
      [errorCorrectionLevel]="correctionLevel"
      [value]="value"
      alt="Demo QR Code"
      cssClass="bshadow"></ngx-qrcode>
    
    <textarea [(ngModel)]="value"></textarea>

    </div>`,
  styles: []
})
export class AppComponent {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'github.com';

  title = 'ngGenerateQRCodes';
}
