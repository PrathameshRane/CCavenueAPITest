import { Component, OnInit } from '@angular/core';
import { EncdecpService } from '../services/encdecp.service';

@Component({
  selector: 'app-decryption',
  templateUrl: './decryption.component.html',
  styleUrls: ['./decryption.component.css'],
  providers: [EncdecpService]
})
export class DecryptionComponent implements OnInit {
  public encreqdata: string="";

  public workingkey: string="";

  public decprespdata: string="";

  constructor(private encdecp : EncdecpService) { }

  ngOnInit() {
  }

  decrypt(){
    this.decprespdata=this.encdecp.doDecryption(this.encreqdata,this.workingkey);
  }

}
