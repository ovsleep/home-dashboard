import {
    Component, Input, ElementRef, Output,  EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    selector: 'switch',
    moduleId: module.id,
    templateUrl: 'switch.component.html',
    animations: [
        trigger('statusChange', [
            state('false', style({ transform: 'translateX(-33.333%)' })),
            state('true', style({ transform: 'translateX(0)' })),
            transition('true <=> false', animate('200ms'))
        ])
    ]
})
export class SwitchComponent {

    constructor(private el: ElementRef) {
        this.status = this._status;
        console.log(this._mainWidth);
    }

    private _statusStr: string = "false";
    private _status: boolean = false;
    
    //styles properties (in px)
    private _mainWidth = 120;
    private _containerWidth = 180;
    private _switchWidth = 60;
    private _switchMiddleWidth = 50;
    private _onColor = "bootstrap-switch-info";
    private _offColor = "bootstrap-switch-default";


    //public properties
    @Input() onText: string = "on";
    @Input() offText: string = "off";
    @Output() statusChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() set status(value: boolean) {
        this._status = value;
        this._statusStr = this._status.toString();
    }
   
    @Input() set onColor(value: string) {
        switch(value){
            case 'default': 
                this._onColor = "bootstrap-switch-info";
                break;
            case 'blue': 
                this._onColor = "bootstrap-switch-primary";
                break;
            case 'sky-blue': 
                this._onColor = "bootstrap-switch-info";
                break;
            case 'red': 
                this._onColor = "bootstrap-switch-danger";
                break;
            case 'yellow': 
                this._onColor = "bootstrap-switch-warning";
                break;
            case 'green': 
                this._onColor = "bootstrap-switch-success";
                break;
            case 'gray': 
                this._onColor = "bootstrap-switch-default";
                break;
        }
    }

    @Input() set offColor(value: string) {
        switch(value){
            case 'default': 
                this._offColor = "bootstrap-switch-default";
                break;
            case 'blue': 
                this._offColor = "bootstrap-switch-primary";
                break;
            case 'sky-blue': 
                this._offColor = "bootstrap-switch-info";
                break;
            case 'red': 
                this._offColor = "bootstrap-switch-danger";
                break;
            case 'yellow': 
                this._offColor = "bootstrap-switch-warning";
                break;
            case 'green': 
                this._offColor = "bootstrap-switch-success";
                break;
            case 'gray': 
                this._offColor = "bootstrap-switch-default";
                break;
        }
    }

    get status() {
        return this._status;
    }

    toggleStatus(): void {
        this.status = !this.status;
        this.statusChange.emit(this.status);
    }
}