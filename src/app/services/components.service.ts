import { EventEmitter, Injectable, Output } from '@angular/core';
import { Vuelo } from '../models/vuelo';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  @Output() addVueloEvento: EventEmitter<Vuelo> = new EventEmitter();
  constructor() { }
}
