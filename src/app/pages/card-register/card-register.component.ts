import { Component, OnInit } from '@angular/core';
import { cardmodel } from 'src/app/models/cardmodel';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


card: cardmodel= new cardmodel();
datacard: cardmodel[]= [
  {
    cardtitul :"Titulo 1",
    descri: "Descripcion 1",
    boton: "1",
    il: "https://c0.wallpaperflare.com/preview/983/774/342/mexico-mexico-city-cdmx-ciudad-de-mexico.jpg"
  },
  {
    cardtitul :"Titulo 2",
    descri: "Descripcion 2",
    boton: "2",
    il: "https://fondosmil.com/fondo/29558.jpg"
  },
  {
    cardtitul :"Titulo 3",
    descri: "Descripcion 3",
    boton: "3",
    il: "https://www.xtrafondos.com/descargar.php?id=4941&resolucion=3840x2160"
  },
  {
    cardtitul :"Titulo 4",
    descri: "Descripcion 4",
    boton: "4",
    il: "https://fondosmil.com/fondo/63896.jpg"
  }
]

addcard(){
  console.log(this.card);
  this.datacard.push(this.card)
}
}

