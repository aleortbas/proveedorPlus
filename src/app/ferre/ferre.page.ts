import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferre',
  templateUrl: './ferre.page.html',
  styleUrls: ['./ferre.page.scss'],
})
export class FerrePage implements OnInit {

  constructor(private router: Router) { }

  go(){
    this.router.navigate(['home']); 
  }
  ngOnInit() {
  }

}
