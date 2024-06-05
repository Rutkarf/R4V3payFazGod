import { DOCUMENT, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Association, Chat, Sexe } from '../../../interfaces/interfaces';
import { AppService } from '../../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../../services/user.service';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-associations-details',
  templateUrl: './associations-details.component.html',
  styleUrls: ['./associations-details.component.scss']
})
export class AssociationsDetailsComponent {
  asso: Association | undefined;
  faTrash = faTrash;
  faUpload = faUpload;
  dataModel: any;
  description: string = '<p>L\'association est ....</p>';
  isEditMode: boolean = false;
  isAuthenticated: boolean = false;
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    public userService: UserService,
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await firstValueFrom(this.auth.isAuthenticated$);
    this.getAsso();
  }

  sanitizeUrl(url: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  getAsso() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.appService.getByIdAsso(params['id']).subscribe((asso) => {
          this.asso = asso;
          console.log('asso:', asso);
        });
      }
    });
  }

  updateAsso() {
    this.appService.updateAsso(this.asso!).subscribe({
      error: (error) => {
        console.error('error:', error);
        if (error?.error?.message) {
          this.toastr.error(
            error.error.message,
            'Erreur de mise à jour de l\'association'
          );
        } else {
          this.toastr.error('Erreur de mise à jour de l\'association');
        }
      },
      complete: () => {
        this.toastr.success('Association mis à jour avec succès');
        this.isEditMode = false;
      },
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  
}
