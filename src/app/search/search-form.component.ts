import { Component, EventEmitter, Output } from '@angular/core'


@Component({
  selector: 'SearchForm',
  template: `
      <TextField col="0" hint="Search News..." [(ngModel)]="textFieldValue" class="input"></TextField>
      <Button col="1" text="Search" (tap)="onSearch()" class="btn btn-primary"></Button>
  `

})

export class SearchFormComponent {

  textFieldValue: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    console.log(this.textFieldValue);
    if (this.textFieldValue.length > 2) {
      this.search.emit(this.textFieldValue);
    }
  }
}