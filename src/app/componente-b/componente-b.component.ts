// componente-b.component.ts
import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html'
})
export class ComponenteB {
  selectedRow: any;

  constructor(private dataSharingService: DataSharingService) {
    this.selectedRow = this.dataSharingService.getSelectedRow();
  }
}

