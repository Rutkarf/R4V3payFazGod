import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Utilisateur, Role } from 'src/app/interfaces/interfaces';
import { AppService } from 'src/app/services/app.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  id: number = 14;
  user?: Utilisateur;
  faHeart = faHeart;
  faXmark = faXmark;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    // if (!this.users) {
    //   this.getUsers(this.users);
    // }
    this.getUsers();
  }

  getUsers() {
    // this.route.params.subscribe((params: any) => {
    //   users.id = Number(params['id']);
    //   this.appService.getUsers(users.id).subscribe((data) => {
    //     users = data;
    //     console.log("🚀 ~ ProfilComponent ~ this.appService.getUsers ~ this.users:", users)
    //   });
    // });


    // this.route.params.subscribe((params: any) => {
    //   users.id = Number(params['id']);
    //   this.appService.getUsers(users.id).subscribe((users) => {
    //     this.users = users;
    //   });
    // })

    this.appService.getUsers(this.id).subscribe((user) => {
      this.user = user;
      console.log(user)
    });
  }
}


