import { Component, OnInit } from '@angular/core';
import { Data } from '../model/data';
import { EncdecpService } from '../services/encdecp.service';
import { HttpClient,HttpParams, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers: [EncdecpService]
})
export class APIComponent implements OnInit {

  ip:string='103.138.28.18';
   map = new Map([
    [ "orderStatusTracker", '{"reference_no":"310007348962", "order_no": "19818129"}' ],
    [ "authQuery", '{"reference_no":"310007348962"}' ],
    [ "refundOrder", '{"reference_no":"310007348962","refund_amount":"1.0","refund_ref_no":"API1234"}' ],
    [ "getRefundDetails", '{"reference_no":"310007348962"}' ],
    [ "createSplitPayout", '{"reference_no":310007348964,"split_tdr_charge_type":"A","merComm":4074.97,"split_data_list":[{"splitAmount":1824,"subAccId":"3P161220"}]}'],
    [ "splitRefund", '{"reference_no":310007348964,"split_data_list":[{"refundAmount":1824,"subAccId":"3P161220","refundRefNo":"45454"},{"refundAmount":"20.00","refundRefNo":"45455"}]}' ],
    [ "changeSplitPayoutStatus", '{"reference_no":"310007348962"}' ],
    [ "generateQuickInvoice", '{"customer_name":"Akshay","bill_delivery_type":"BOTH","customer_mobile_no":1234567890,"customer_email_id":"test@avenues.info","customer_email_subject":"Test","invoice_description":"Test","currency":"INR","valid_for":2,"valid_type":"days","amount":10.0,"merchant_reference_no":123456987,"merchant_reference_no1":123456987,"merchant_reference_no2":123456987,"merchant_reference_no3":123456987,"merchant_reference_no4":123456987,"terms_and_conditions":"termsandcondition","sms_content":"Pay your LegalEntity_Name bill # Invoice_ID for Invoice_Currency Invoice_Amount or pay online at Pay_Link."}' ],
    [ "binDetails", '{"bin_number":"464042"}' ],
    [ "linkdAcc", '{"parent_reg_Id":"","child_reg_Id":""}' ],
    
]);



  encrresp:Array<string>;
  encrresp2:Array<string>;
  public model = new Data('{"reference_no":"210007348962", "order_no": "818129"}}','https://api.ccavenue.com/apis/servlet/DoWebTrans','orderStatusTracker','','','1.1','JSON','JSON','','','',);
  
  constructor(private encdecp : EncdecpService,private http: HttpClient) { }

  ngOnInit() {
  }

  onSelectApi(event){

    console.log("API Selected:"+this.model.command);
    this.model.reqdata=this.map.get(this.model.command);
    
    }

  callApi(){

   this.model.encreqdata=this.encdecp.doEncryption(this.model.reqdata,this.model.workingkey);

   let qrystrParams =  new HttpParams()
   .set('command', this.model.command)
   .set('access_code',this.model.access_code)
   .set('enc_request', this.model.encreqdata)
   .set('request_type', this.model.request_type)
   .set('response_type', this.model.response_type)
   .set('version', this.model.version);

const headers = { 
  'content-type': 'application/x-www-form-urlencoded'

}  
 this.http.post(this.model.url, qrystrParams,{'headers':headers, responseType: 'text'}).subscribe(data => {
  this.encrresp=data.split('&');
  if(
    this.encrresp.length==3){
    this.model.encrespdata=this.encrresp.toString(); 
    this.model.respdata=this.model.encrespdata;
  }
  else{
      this.encrresp2=this.encrresp[1].split('=');
      this.model.encrespdata=this.encrresp2[1];
      this.model.respdata=this.encdecp.doDecryption(this.model.encrespdata,this.model.workingkey);
  }
})  
   
  }
}

