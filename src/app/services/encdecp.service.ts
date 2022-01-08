import { Injectable } from '@angular/core';
import createHash from '../../../node_modules/create-hash';
import encrypter from '../../../node_modules/browserify-aes';
import decrypter from '../../../node_modules/browserify-aes';


@Injectable({
  providedIn: 'root'
})
export class EncdecpService {

  constructor() { }

  doEncryption(plainText: String,workingKey: String):string{

     var m = createHash('md5');
      m.update(workingKey);
     
     var key = m.digest();
  
      	var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';	
	var cipher = encrypter.createCipheriv('aes-128-cbc', key, iv);
  var encoded = cipher.update(plainText,'utf8','hex');
	encoded += cipher.final('hex');
      return encoded;

  }

  doDecryption(encText: String,workingKey: String):string{

    var m = createHash('md5');
      m.update(workingKey);
     
     var key = m.digest();
     
      	var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';	
	var decipher = decrypter.createDecipheriv('aes-128-cbc', key, iv);

  var decoded = decipher.update(encText,'hex','utf8');

	decoded += decipher.final('utf8');
      return decoded;

  }

}
