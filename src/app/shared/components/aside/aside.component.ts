import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  menuItems!: any[];

  constructor(private router: Router, private title: Title) {}

  ngOnInit(): void {
    this.createMenuItems();
  }

  createMenuItems() {
    this.menuItems = [
      {
        title: 'Novo',
        iconPath: 'assets/img/new.svg',
        alt: 'Novo',
        classes: 'image-new',
        route: 'painel/faturas/novo',
        active: String(location.href).includes('painel/faturas/novo'),
      },
      {
        title: 'Faturas',
        iconPath: 'assets/img/faturas.svg',
        alt: 'Faturas',
        classes: '',
        route: 'painel/faturas',
        active: String(location.href).includes('painel/faturas'),
      },
      {
        title: 'Dashboard',
        iconPath: 'assets/img/dashboard.svg',
        alt: 'Dashboard',
        classes: '',
        route: 'painel/dashboard',
        active: String(location.href).includes('painel/dashboard'),
      },
      {
        title: 'Recorrências',
        iconPath: 'assets/img/recorrencia.svg',
        alt: 'Recorrência',
        classes: '',
        route: 'painel/recorrencias',
        active: String(location.href).includes('painel/recorrencias'),
      },
      {
        title: 'Clientes',
        iconPath: 'assets/img/clientes.svg',
        alt: 'Clientes',
        classes: '',
        route: 'painel/clientes',
        active: String(location.href).includes('painel/clientes'),
      },
      {
        title: 'Produtos',
        iconPath: 'assets/img/produtos.svg',
        alt: 'Produtos',
        classes: '',
        route: 'painel/produtos-e-servicos',
        active: String(location.href).includes('painel/produtos'),
      },
      {
        title: 'Transferências',
        iconPath: 'assets/img/transferencias.svg',
        alt: 'Transferências',
        classes: '',
        route: 'painel/transferencias',
        active: String(location.href).includes('painel/transferencias'),
      },
    ];
  }

  navigateToModule(menu: any) {
    this.title.setTitle(`Fature - ${menu.title}`);

    this.router.navigate([menu.route]);
  }
}
