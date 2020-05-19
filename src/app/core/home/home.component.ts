import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardImageBase64: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  fileChangeEvent(event: any) {
    this.getBase64(event.target.files[0]);
    setTimeout(() => {
      this.openDialog(this.cardImageBase64);
    }, 1000);
  }

  getBase64(file): any {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return reader.result.toString();
    };

    reader.onerror = (error) => {
      console.error('Error: ', error);
    };
  }

  openDialog(imageBase64Ref: string) {
    this.dialog.open(ModalComponent, {
      data: {
        imageBase64: imageBase64Ref,
      },
    });
  }
}
