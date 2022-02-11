import {AbstractControl} from '@angular/forms';

export function maxSame(getArrayFunction: ()=>string[], max: number){
    return (AC: AbstractControl) =>{
        if(AC.value){
        const filteredArray = getArrayFunction().filter(el=>el == AC.value);
        if(filteredArray.length >= max){
            return {maxSame: true};
        }
        }
        return null;
    }
}