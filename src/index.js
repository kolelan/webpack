import {config} from './modules/config';
import AppService from './modules/app.service';
import './modules/header.component';
import _ from 'lodash';

console.log('Config key: ',config.key);
const service = new AppService('Hello allow');
service.log();
