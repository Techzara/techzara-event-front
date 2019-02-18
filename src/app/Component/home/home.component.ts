import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  participants: any;
  constructor(private homeService: HomeService) { }
  getParticipants() {
    this.homeService.getParticipants()
    .subscribe(data => {
      this.participants = data.participant_list;
      console.log(this.participants);
    });
  }
  ngOnInit() {
    this.getParticipants();
  }

}
