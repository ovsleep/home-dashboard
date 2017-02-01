import { Component, trigger,
    state,
    style,
    transition,
    animate } from '@angular/core'

@Component({
    selector: 'auto-grow',
    template: `<div 
                    (mouseenter)="setStatus(true, $event)"
                    (mouseleave)="setStatus(false, $event)"
                    (touchstart)="setStatus(true, $event)"
                    (touchend)="setStatus(false, $event)"
                    [@statusChange]="statusStr">
                        <ng-content></ng-content>
                <div>{{log}}`,
    providers: [],
    animations: [
        trigger('statusChange', [
            state('false', style({ transform: 'scale(1)' })),
            state('true', style({ transform: 'scale(1.2)' })),
            transition('true <=> false', animate('200ms'))
        ])
    ]
})



export class AutoGrowComponent{

    status: boolean = false;
    log: string = '';
    lastEventType: string;

 
    get statusStr():string {
        return this.status.toString();
    }
 
    setStatus (value:boolean, event:any)
    {
        if(!this.lastEventType){
            this.lastEventType = event.type.startsWith('mouse') ? 'mouse' : 'touch';
        }

        if(this.lastEventType == 'touch'){
            if(event.type.startsWith('mouse')){
                return; //ignore event if the previous was a touch event
            }
            else{
                this.lastEventType = 'touch';
            }
        }

        this.status = value;
    }

    // setStatusTimeOut(value: boolean){
    //     this.log +=`timeoutsetStatus: ${value}
    //     `
    //     this.status = value;
    //     setTimeout(() => {
    //         this.setStatus(!value);
    //     }, 300);
    // }
}