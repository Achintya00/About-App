import { MyDetailsService } from './../../Services/my-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css'],
})
export class FriendsListComponent implements OnInit {
  constructor(private details: MyDetailsService) {}
  ngOnInit(): void {
    this.details.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
