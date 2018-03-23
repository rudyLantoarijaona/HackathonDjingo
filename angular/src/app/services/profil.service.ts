import {Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfilService {

	private baseURL: string = "http://localhost:3000/api/profil";

	constructor(private http:Http){
		console.log('Service de profil initialiser !');
	}

	getProfil(){
		return this.http.get(`${this.baseURL}`)
		.map(res => res.json());
	}

	GetproilParam(){
		
	}

	
} 
