import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  images=[{image:"assets/jonathan-borba-IvOrTu727TE-unsplash.jpg",title:"What Curling Irons Are The Best Ones"},
  {image:"assets/kenzie-kraft-9QW52RyBLao-unsplash.jpg",title:"Eternity Bands Do Last Forever"},
  {image:"assets/jayson-hinrichsen-rqgB01XoWok-unsplash.jpg",title:"The Health Benefits Of Sunglasses"},
  {image:"assets/mahdi-bafande-HOTWXfbII6k-unsplash.jpg",title:"Aiming For Higher The Mastopexy"},
{image:"assets/mahdi-bafande-QYFmiURtAxc-unsplash.jpg",title:"Wedding Rings A Gift For A Lifetime"},
{image:"assets/sven-ciupka-x8Vg7Up6TUc-unsplash.jpg",title:"The Different Methods Of Hair Removal"}]

getDate(index: number): string {
  // Add your logic to get the date based on the index
  // For example:
  const currentDate = new Date();
  return currentDate.toDateString();
}




}
