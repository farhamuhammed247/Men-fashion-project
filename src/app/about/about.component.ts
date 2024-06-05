import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
images=[{image:"assets/jonathan-borba-IvOrTu727TE-unsplash.jpg" ,title:"John Smith" ,job:"Fashion Design"},
{image:"assets/kenzie-kraft-9QW52RyBLao-unsplash.jpg",title:"Christine Wise" ,job:"C.E.O"},
{image:"assets/jayson-hinrichsen-rqgB01XoWok-unsplash.jpg",title:"Sean Robbins" ,job:"Manager"},
{image:"assets/mahdi-bafande-HOTWXfbII6k-unsplash.jpg",title:"Lucy Myers" ,job:"Delivery"}]
}
