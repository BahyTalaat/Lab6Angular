import { AbstractControl } from "@angular/forms";

export function regularName(regValue:RegExp){
    return (control:AbstractControl)=>{
        const check =regValue.test(control.value);
        return check?{'regularName':{value:regValue}}:null ;
    }
}