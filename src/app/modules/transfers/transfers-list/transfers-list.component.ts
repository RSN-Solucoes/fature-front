import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { 
  TRANSFERS_LIST_COLUMNS, 
  TRANSFERS_LIST_FIELDS, 
  TRANSFERS_LIST_TABLE_PIPES
 } from './transfers-list.const';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})
export class TransfersListComponent implements OnInit {
  public date = this.activatedRoute.snapshot.paramMap.get('date') || '';

  public transfersListColumns = TRANSFERS_LIST_COLUMNS;
  public transfersListFields = TRANSFERS_LIST_FIELDS;
  public transfersListTablePipes = TRANSFERS_LIST_TABLE_PIPES;

  public transfersListValue!: any;

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private router: Router,
    private transfersService: TransfersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getDailyTransfers(this.pageIndex, this.pageLimit);
  }

  getDailyTransfers(pageIndex: number, pageLimit: number): void {
    const date = this.date.split('-');

    const pagination = `day=${date[2].replace('0','')}&month=${date[1].replace('0','')}&year=${date[0]}&page=${pageIndex}&limit=${pageLimit}`;
    this.transfersService.getDailyTransfers(pagination).subscribe({
      next: (res) => {
        this.transfersListValue = res.data.payments;
      },
      error: (err) => {
      }
    });
  }

  loadMoreItems(pageLimit: number) {
    //function
  }

  cancel(): void {
    this.router.navigate(['painel/transferencias']);
  }

}
