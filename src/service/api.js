/**
 * Created by zhouzhongyu on 2018/11/25.
 */
import axios from 'axios'
require('promise.prototype.finally').shim();

let service = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
});

export default service;