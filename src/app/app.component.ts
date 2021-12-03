import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import {parseSelectorToR3Selector} from "@angular/compiler/src/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AvanceProyecto';
  convertedJson!:string;

  fileUpload(event:any) {
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event:any) => {
      console.log(event);
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, {type:'binary'});
      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log(data);
        this.convertedJson = JSON.stringify(data,undefined,4);

      })
      console.log(workbook)
    }
  }
}
