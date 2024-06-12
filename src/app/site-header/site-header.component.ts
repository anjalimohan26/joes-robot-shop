import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showmenu:boolean =false;

  constructor(private userService:UserService) { }
  ngOnInit() {
    
    this.userService.getUser().subscribe({
      next: (user) => {this.user= user}
    });
  }
  togglesignout(){
    this.showmenu= !this.showmenu;
  }

  signout(){
    this.userService.signOut();
    this.showmenu=false;
  }

}
