import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  images=[{image:"assets/caio-coelho-6oyo9_d4QzQ-unsplash.jpg",title:"Clothing Collections" ,type:"Sweeter" ,price:"$61.99",previousPrice:"$30.99",badgeClass:"badge bg-primary position-absolute top-0 start-0 m-3",badgeName: 'New'},
  {image:"assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg",title:"Shoes Spring" ,type:"Sport Shose" ,price:"$50.99",previousPrice:"$61.99",badgeClass:"badge bg-danger position-absolute top-0 start-0 m-3",badgeName: '-10%'},
  {image:"assets/franco-antonio-giovanella-PnsfHpDrY5o-unsplash.jpg",title:"Accessories" ,type:"Sunglasses" ,price:"$61.99",previousPrice:"$70.99",badgeClass:"badge bg-primary position-absolute top-0 start-0 m-3",badgeName: 'New'},
  {image:"assets/mnz-ToLMORRb97Q-unsplash.jpg",title:"Shoes Spring" ,type:"Classic Shose" ,price:"$3,999",previousPrice:"$5.00",badgeClass:"badge bg-success position-absolute top-0 start-0 m-3",badgeName: 'ECO'},
{image:"assets/nimble-made-Jf7JqVazm-4-unsplash.jpg",title:"Clothing Collections" ,type:"Shirt" ,price:"$999",previousPrice:"$1000.00",badgeClass:"badge bg-primary position-absolute top-0 start-0 m-3",badgeName: 'New'},
{image:"assets/waldemar-UP9DtTjRYpI-unsplash.jpg",title:"Clothing Collections" ,type:"Pants" ,price:"$17.99",previousPrice:"$20.00",badgeClass:"badge bg-success position-absolute top-0 start-0 m-3",badgeName: 'ECO'},
{image:"assets/eliud-gil-samaniego-_1bPErRSKco-unsplash.jpg",title:"Accessories" ,type:"Watch" ,price:"$999",previousPrice:"$1000.00",badgeClass:"badge bg-danger position-absolute top-0 start-0 m-3",badgeName: '-5%'},
{image:"assets/ivan-zhukevich-7ZC4qO3Gj6g-unsplash.jpg",title:"Accessories" ,type:"Bag & Watch" ,price:"$13.99",previousPrice:"$15.00",badgeClass:"badge bg-primary position-absolute top-0 start-0 m-3",badgeName: 'New'},
{image:"assets/sincerely-media-6cHumpSxTvs-unsplash.jpg",title:"Clothing Collections" ,type:"T-shirt" ,price:"$17.99",previousPrice:"$20.00",badgeClass:"badge bg-success position-absolute top-0 start-0 m-3",badgeName: 'ECO'},
]

  }
