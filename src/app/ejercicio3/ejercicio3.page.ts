import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {
  
  constructor(private router: Router) { }
  prev() {
    this.router.navigate(['ejercicio21']);
  }
  ngOnInit() {
  }

}
