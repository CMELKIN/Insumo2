import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  constructor(private router: Router) {}

  next() {
    this.router.navigate(['ejercicio21']);
  }
  prev() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
