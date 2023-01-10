import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public titulo: string = '';
  public precio: number = 0;
  public descripcion: string = '';
  public id: number = 0;
  public imagenes: Array<string> = [];

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.titulo = parametros['titulo'];
    });
    this.route.queryParams.subscribe(parametros => {
      this.precio = parametros['precio'] || 0;
      this.descripcion = parametros['descripcion'] || '';
      this.id = parametros['id'] || 0;
    });
    const imagenes: any = this.router.getCurrentNavigation()?.extras.state;
    this.imagenes = imagenes.imagenes;
  }

}
