import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/services/app.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  id: number = 14;
  users: any = {};
  user: any;
  nom: string | undefined;
  prenom: string | undefined;
  email: string | undefined;
  telephone: number | undefined;
  adresse: string | undefined;
  faHeart = faHeart;
  faXmark = faXmark;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    if (!this.user) {
      this.getUsers();
    }
  }

  getUsers() {
    this.route.params.subscribe((params: any) => {
      // this.id = Number(params['id']);
      if (this.id) {
        this.appService.getUsers(this.id).subscribe((data) => {
          this.users = data;
          console.log("🚀 ~ ProfilComponent ~ this.appService.getUsers ~ this.users:", this.users)
        });
      }
    });
  }

}


