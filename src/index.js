import {config} from './modules/config';
import AppService from './modules/app.service';
import './modules/header.component';
// import _ from 'lodash';
// function component(){
//     const el = document.createElement('div');
//     el.innerHTML = _.join(['Hello','webpack'],' ');
//     return el;
// }
// document.body.appendChild(component());

console.log('Config key: ',config.key);
const service = new AppService('Hello allo');
service.log();