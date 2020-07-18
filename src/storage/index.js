//import { delete } from "vue/types/umd";

/**
* Storage封装
*/
const STORAGE_KEY = 'mall';
export default{
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            //注意json要转换成字符串
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
        
    },
    //获取某一个模块下面的属性user下面的userName
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    //获取整个数据
    getStorage(){
        //可能为空，所以给一个空的字符串object
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}