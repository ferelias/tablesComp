// componente-a.component.ts
import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html'
})
export class ComponenteA {
  rows = [
    { id: 1, name: 'Fila 1', /* ... otros campos */ },
    { id: 2, name: 'Fila 2', /* ... otros campos */ },
    // ... otras filas
  ];

  constructor(
    private dataSharingService: DataSharingService,
    private router: Router
  ) {}

  onRowClick(row: any) {
    this.dataSharingService.setSelectedRow(row);
    this.router.navigate(['/componente-b']);
  }
}

