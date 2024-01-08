// no-header-footer.directive.ts
import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[noHeaderFooter]',
})
export class NoHeaderFooterDirective implements OnInit, OnDestroy {
  @Input() restrictedRoutes: string[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkVisibility();
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkVisibility();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private checkVisibility() {
    const currentRoute = this.router.url;
    const shouldHide = this.restrictedRoutes.includes(currentRoute);
    if (shouldHide) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }
}
