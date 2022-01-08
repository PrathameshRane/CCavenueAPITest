import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APIComponent } from './api/api.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { DecryptionComponent } from './decryption/decryption.component';

const routes: Routes = [
  { path: 'api', component: APIComponent },
  { path: 'enc', component: EncryptionComponent },
  { path: 'decp', component: DecryptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
