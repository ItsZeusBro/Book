export class Guard{
    constructor(v, schema, obj, terminate=true){
        this.terminate=terminate
        this.didTerminate=false
        this.obj=obj
        this.guard(v, 0, schema)
    }

    guard(v, v_indx, schema){
        for(var i = 0; i<schema.length; i++){
            try {
                this.nextGuard(v, v_indx,  schema[i])
            }catch(err){
            }
        }
    }

    nextGuard(v, v_indx, schema){
        if(this.isObjArray(schema)){
            this.guard(v, v_indx, schema)
        }else if(this.isObj(schema)){
            this.passGuard(v, v_indx, schema)
        }else{
            throw Error('schema must be of type object or of type array')
        }
    }

    passGuard(){
        if(this.isNKeys(schema, 1)){
            var passGuard = this._passGuard(v, v_indx, schema)
            if(passGuard[0]){
                schema = passGuard[1]
                this.nextGuard(v, v_indx+1, schema)
            }
        }else{
            throw Error(
                `Schema error, should never have more than 1 key 
                to a non terminating level and should never have 
                more than 2 keys to a terminating level`
            )
        }
    }

    terminatingGuard(v, schema){
        this.didTerminate=true
        if(this.isString(schema[Object.keys(schema)[0]])){
        }else{
            if(this.callGuard(Object.keys(schema)[0], v[v.length-1])){
                this.buildTerminator(v, schema, false)
            }else{
                this.buildTerminator(v, schema, true)
            }
        }
    }  

    buildTerminator(v, schema, deflt){
        var func = schema[Object.keys(schema)[0]]['FUNCTION']
        func='this.obj.'+func+'('

        if(deflt){
            v.pop()
            v.push(schema[Object.keys(schema)[0]]['DEFAULT'])
        }
        v.forEach((_v)=>{
            if(this.isString(_v)){
                func+="'"+_v+"'"+','
            }else{
                func+=_v+','
            }
        })
        func = func.substring(0, func.length-1)
        func+=')'
        console.log(func)
        eval(func)
    }

    isTerminatingGuard(schema){
        var objKeys = Object.keys(schema)
        if(objKeys.length==1){
            if(this.isObj(schema[objKeys[0]])){
                var obj = schema[objKeys[0]]
                if(Object.keys(obj).length==2){
                    if(this.isString(obj['DEFAULT']) && this.isString(obj['FUNCTION'])){
                        return true
                    }
                }
            }
        }
        return false
    }

    passGuard(v, v_indx, schema){
        if(this.isTerminatingGuard(schema)){
            this.terminatingGuard(v, schema)
        }else{
            return [this.callGuard( Object.keys(schema)[0], v[v_indx]) , schema[Object.keys(schema)[0]]]
        }
    }

    callGuard(func, _v){
        try{
            //this needs to be fixed for types that are not strings
            func+='('+'"' +_v + '"' + ')'
            func='this.'+func
            console.log(func)
            if(eval(func)){

                return true
            }else{
                return false
            }
        }catch{
            throw Error( "Cannot Call Guard function, Check Schema")
        }
    }
}