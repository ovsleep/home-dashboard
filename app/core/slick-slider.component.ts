import { Component, Input, ElementRef, AfterViewInit, AfterContentInit} from '@angular/core';
declare var jQuery: any;
import 'slick-slider';

@Component({
    selector: 'slick-slider',
    template: `
        <ng-content></ng-content>
    `
})
export class SlickSliderComponent implements AfterContentInit{
    @Input() options: any;

    $element: any;

    defaultOptions: any = {
        dots: false,
        infinite: false,
        speed: 300,
        //slidesToShow: 4,
        //slidesToScroll: 2,
        //adaptiveHeight: false,
        variableWidth: true,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: false,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    };

    constructor(private el: ElementRef) {
    }

    ngAfterContentInit() {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        
        this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
    }
}