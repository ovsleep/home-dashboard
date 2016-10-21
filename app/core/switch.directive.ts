import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';
import 'bootstrap-switch';

declare var jQuery: any;

@Directive({
    selector: '[switch]'
})
export class SwitchDirective  implements AfterContentInit{
    private _onText = 'ON';
    private _onColor = 'info';
    private _offText = 'OFF';
    private _offColor = 'default';

    constructor(private el: ElementRef) { 
        jQuery(this.el.nativeElement)['bootstrapSwitch']({
            onText: this._onText,
            offText: this._offText,
            onColor: this._onColor,
            offColor: this._offColor
        });
    }

    @Input() set onText(text: string) {
        this._onText = text || this._onText;
    }
    @Input() set offText(text: string) {
        this._offText = text || this._offText;
    }
    @Input() set onColor(text: string) {
        this._onColor = text || this._onColor;
    }
    @Input() set offColor(text: string) {
        this._offColor = text || this._offColor;
    }

    ngAfterContentInit() {
        
    }
}