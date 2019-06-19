// import {config} from './modules/config';
// import AppService from './modules/app.service';
// import './modules/header.component';
import _ from 'lodash';
// function component(){
//     const el = document.createElement('div');
//     el.innerHTML = _.join(['Hello','webpack'],' ');
//     return el;
// }
// document.body.appendChild(component());

// console.log('Config key: ',config.key);
// const service = new AppService('Hello allo');
// service.log();

var array = [1,2,5,16,28,4,2,1,6];
var array2 = [1,false,5,16,null,4,2,undefined,'',6];
console.log('chunk: ',_.chunk(array,7));
console.log('array: ',array);
console.log('compact: ',_.compact(array2));
console.log('array: ',array2);
console.log('dropRight: ',_.dropRight(array,3));
console.log('array: ',array);
console.log('dropRightWhile: ',_.dropRightWhile(array,function (item) {
    return item<10;
}));
console.log('array: ',array);
console.log('fill: ',_.fill(array,'*',2,7));
console.log('array: ',array);