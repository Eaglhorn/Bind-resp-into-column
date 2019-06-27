import {ViewContainerRef } from '@angular/core';
import {ToastsManager} from 'ng2-toastr';




function update(obj: any, obj2:any): any{
  for (let i=1; i<arguments.length; i++) {
    for (let prop in arguments[i]) {
        let val = arguments[i][prop];
        if (typeof val == "object") // this also applies to arrays or null!
            update(obj[prop], val);
        else
            obj[prop] = val;
    }
  }
    return obj;
}


export class AbstractComponent {
  public isLoading = false;
  public windowHeight = Number(window.innerHeight) - (Number(window.innerHeight) / 100 * 65);

  constructor(public toastr: ToastsManager,
              public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  public errorCodes: any;

  public handleServerError(resp: any) {
    const errCode = resp['code'] || 0;

    if (resp.status == 401 || errCode) {

      return;
    }
    if (resp.status == 0){
      this.toastr.error('Error connecting to server');
      return;
    }

    let errors = this.commonErrors();
    update(errors, this.getErrors())
    const codeError: number = this.getErrorCode(resp)
    const errorString: any = errors[codeError]

    if (errorString){
      this.toastr.error(errorString);
      return
    }

    if (codeError){
      // this.toastr.error(`Error code ${codeError}`);
      console.log(`Error code ${codeError}`);
    }
    else{
      this.toastr.error('Error connecting to server');
    }
  }

  protected getErrorCode(resp: any): number{
    const result: any = resp.error || {};
    return result['error'] || 0;
  }

  protected commonErrors(){
    return {
      1: 'Field is required',
      2: 'Field cannot be null',
      3: 'Field cannot be blank',
      4: 'Field is invalid',
    };
  }

  public getErrors(){
    return update({}, this.errorCodes);
  }


}
