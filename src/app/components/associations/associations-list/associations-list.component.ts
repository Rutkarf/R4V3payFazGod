import { Component, Inject } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { Association } from '../../../interfaces/interfaces';
import { faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrls: ['./associations-list.component.scss'],
})
export class AssociationsListComponent {
  isLoaded: boolean = false;
  isAuthenticated: boolean = false;
  faLocationDot = faLocationDot;
  faPen = faPen;
  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  associations: Association[] = [];
  private subscriptions = new Subscription();
  
  async ngOnInit() {
    this.getAssociations();
  }

  getAssociations() {
    const associationSubscription = this.appService.getAllAssociations().subscribe({
      next: (associations) => {
        this.associations = associations;
        console.log('🚀 ~ AssociationsListComponent ~ associationSubscription ~ this.associations:', this.associations);
        this.isLoaded = true;
      },
      error: (error) => {
        const errorText = 'Erreur lors de la récupération des associations';
        console.error(errorText, error);
        this.toastr.error(errorText, 'Erreur');
      },
      complete: () => console.log('Associations chargées')
    });

    this.subscriptions.add(associationSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
