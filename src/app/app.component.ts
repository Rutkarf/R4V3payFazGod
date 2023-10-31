import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AppService } from './services/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonModal)
  modal!: IonModal;

  message = '';
  name = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getHelloWorld();
  }

  getHelloWorld() {
    this.appService.getHome().subscribe((elt) => {
      console.log('🚀 ~ AppComponent ~ this.appService.getHome ~ elt:', elt);
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
