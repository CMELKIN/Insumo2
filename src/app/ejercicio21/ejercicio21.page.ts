import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ejercicio21',
  templateUrl: './ejercicio21.page.html',
  styleUrls: ['./ejercicio21.page.scss'],
})
export class Ejercicio21Page implements OnInit {

  constructor(private router: Router) { }
  next() {
    this.router.navigate(['ejercicio3']);
  }
  prev() {
    this.router.navigate(['ejercicio2']);
  }

  ngOnInit() {
  }

}
