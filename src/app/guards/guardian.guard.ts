import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AcuerdoService } from "../services/acuerdo.service";

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(
    private acuerdo : AcuerdoService
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.acuerdo.obtenerRespuesta();
  }

}
