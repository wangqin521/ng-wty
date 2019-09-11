import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

constructor() { }

picNetworkPrefix(str: string) {
    if (str) {
        if (str.indexOf('http') < 0 ) {
            return ('https://file-test.vipxiaoqu.com/' + str);
        }
    }
    return str;
}

}
