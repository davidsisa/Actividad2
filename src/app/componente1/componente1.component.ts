import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private router:Router) { }
  numero:any;
  arrays=[2,4,6,63,12,123412321,];
  ngOnInit(): void {
  }
  navegacion(){
    this.router.navigate(['web2'])
  }
  navegacion1(){
    this.router.navigate(['web3'])
  }
}
