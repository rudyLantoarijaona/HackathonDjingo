import {Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JeuService {

	private baseURL: string = "http://localhost:3000/api/jeu";

	constructor(private http:Http){
		console.log('Service de jeu initialiser !');
	}

	getJeu(){
		return this.http.get(`${this.baseURL}`)
		.map(res => res.json());
	}

	GetJeuParam(ageJoueur :number, nbrJoueur :number,duree :string){
		var data = {"ageJoueur" : ageJoueur, "nbrJoueur": nbrJoueur, "duree":duree};
		var data_send = JSON.stringify(data);
		console.log(data);
		return this.http.post("http://localhost:3000/api/full",data)
		.map(res => res.json());
	}

	
} 