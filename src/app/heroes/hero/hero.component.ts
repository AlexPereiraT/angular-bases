import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name: string ='iroman';
 public age: number =45;


getHeroDescription(): string {
  return `${this.name}-${this.age}  `;
}
get capitalizedName():string{
  return this.name.toUpperCase();

}
changeHero(){
this.name= 'spiderman'
}
changeAge(){
this.age=20
}

}
