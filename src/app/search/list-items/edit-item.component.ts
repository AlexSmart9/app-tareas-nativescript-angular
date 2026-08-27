import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-edit-item',
  template: `
    <StackLayout class="p-10 m-t-10" backgroundColor="#000000">
      <Label text="Edit News" fontWeight="bold" class="m-b-5" ></Label>
      <FlexboxLayout flexDirection="row">
        <TextField #text="ngModel" [(ngModel)]="editedNew" hint="Título de la noticia..." required minlen="5" flexGrow="1" class="input">
        </TextField>
        <Label *ngIf="text.hasError('required')" text="*" color="red"></Label>
        <Label *ngIf="!text.hasError('required') && text.hasError('minlen')" text=" 5+" color="red"></Label>
      </FlexboxLayout>
      <Button text="Save" (tap)="onSave()" *ngIf="text.valid" class="btn btn-primary m-t-10"></Button>
    </StackLayout>`
})

export class EditItemComponent {
  editedNew: string = 'News 1';

  onSave() {
    console.log("New Saved", this.editedNew)
  }
}