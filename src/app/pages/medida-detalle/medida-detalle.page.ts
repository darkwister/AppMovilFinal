import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface MedidaPreventiva {
  id: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-medida-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './medida-detalle.page.html',
  styleUrls: ['./medida-detalle.page.scss'],
})
export class MedidaDetallePage implements OnInit {
  medida?: MedidaPreventiva;

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['medida']) {
      this.medida = nav.extras.state['medida'];
    }
  }
}
