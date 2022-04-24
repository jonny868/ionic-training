import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
    id:'1',
    title:'Eiffel tower',
    imageURL: 'https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg',
    comments: ['Awesome place', 'wonderfull experience'],

  },
  {
    id:'2',
    title:'Taj mahal',
    imageURL: 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg',
    comments: ['Awesome place', 'wonderfull experience'],
  },
  {
    id:'3',
    title:'Sphinx',
    imageURL: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/what-is-the-great-sphinx-of-giza-fb-thumbnail-1.jpg',
    comments: ['Awesome place', 'wonderfull experience'],
  },
  {
    id:'4',
    title:'Pisa',
    imageURL: 'https://cdn.britannica.com/88/80588-050-8D944BFE/Leaning-Tower-of-Pisa-Italy.jpg',
    comments: [],
  }
];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }



  getPlace(placeId: string) {
  return {
    ...this.places.find(place => {
      return place.id ===placeId
    })
  }
  }



  addPlace(title: string, imageURL: string) {
    this.places.push(
      {
        title,
        imageURL,
        comments:[],
        id: this.places.length + 1 + ""
      }
    );
  }


  deletePlace( placeId: string) {
  this.places =  this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
