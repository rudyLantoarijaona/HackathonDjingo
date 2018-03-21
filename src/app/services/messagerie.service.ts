import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../services/api.service'
@Injectable()
export class MessagerieService {

  constructor(private apiService: ApiService) { }

  branchement(){
    return this.apiService.getConfig().subscribe(() => {
      
    });
  }


}
