import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.scss']
})
export class Componente3Component  implements OnInit {
  colores=['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];
  @Input() color: string ="";
  constructor() { }

  ngOnInit() {}

}
