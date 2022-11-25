import { 
  CLIENT_COLUMNS_TABLE_SELECT_LIST, 
  CLIENT_VALUE_SELECT_LIST, 
  CLIENT_ACTIONS_SELECT_LIST, 
  CLIENT_PIPES_SELECT_LIST 
} from '../client.const';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  public clientColumnSelectItems = CLIENT_COLUMNS_TABLE_SELECT_LIST;
  public clientValueSelectItems = CLIENT_VALUE_SELECT_LIST;
  public clientActionsSelectItems = CLIENT_ACTIONS_SELECT_LIST;
  public clientPipesSelectItems = CLIENT_PIPES_SELECT_LIST;
  public clientFields = [
      'nome',
      'email',
      'telefone',
      'cep',
      'cidade',
      'uf'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
