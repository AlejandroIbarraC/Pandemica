import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-medical-history-popup',
  templateUrl: './medical-history-popup.component.html',
  styleUrls: ['./medical-history-popup.component.scss']
})
export class MedicalHistoryPopupComponent implements OnInit {
  public _elementForm: FormGroup;
  type: string;
  item: any;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MedicalHistoryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Assign form type 'add' or 'edit'
    this.type = this.data.type;
    this.item = this.data.item;

    // Initialize Material form
    if (this.item != null) {
      // Item exists, edit mode.
      this._elementForm = this._formBuilder.group({
      });
    } else {
      // Item does not exist, add mode.
      this._elementForm = this._formBuilder.group({
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Closes dialog and forces refresh on parent table data
   */
  closeDialogRefresh() {
    this.dialogRef.close({event: 'refresh'});
  }

  /**
   * Refreshes pop-up window data
   */
  emptyEntryData() {
    // Empty entries
  }

  /**
   * Updates changes in server depending on popup type
   */
  submit() {
    if (this.type === 'add') {
      // ADD
    } else {
      // EDIT
    }
  }

}
