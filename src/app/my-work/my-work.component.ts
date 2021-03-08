import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor(private wowService : NgwWowService) { 
    this.wowService.init();
  }

  ngOnInit(): void {
  }

}
