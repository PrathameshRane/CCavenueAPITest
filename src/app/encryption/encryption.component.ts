import { Component, OnInit } from '@angular/core';
import { EncdecpService } from '../services/encdecp.service';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.css'],
  providers: [EncdecpService]
})
export class EncryptionComponent implements OnInit {

        public reqdata: string="";

        public workingkey: string="";
 
        public encreqdata: string="";
  

  constructor(private encdecp : EncdecpService) { }

  ngOnInit() {
  }

  encrypt(){
    this.encreqdata=this.encdecp.doEncryption(this.reqdata,this.workingkey);
  }

}
