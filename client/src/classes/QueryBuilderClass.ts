export default class{

    public getQuery(data:any)
    {
        if(this.is_array(data)||this.is_object(data))
        {
            var params: any =[];
            for(var i in data)
            {
                if(this.is_array(data[i])||this.is_object(data[i]))
                {
                    params.push(this.build(i,data[i]));
                }
                else if(this.is_can_format_value(data[i]))
                {
                    params.push(i +"="+this.url_encode(this.format_value(data[i])));
                }
            }


            return params.join('&');
        }
        else
        {
            throw new Error('Parameter 1 expected to be Array or Object.');
        }
    }

    public changeArray(data:any)
    {
        let target:any = {}

        for (let index in data){
            if (index.indexOf("[") != -1){
                let keys:any = String(index).split("[")
                let keyString:string = ""

                target = data

                for (let index2 in keys){
                    let keyTarget:any = String(keys[index2]).replace("]", "")




                    let keyTargetStatic:string = "['" + keyTarget + "']"
                    if (keys[parseInt(index2) + 1]){
                        if (isFinite((String(keys[parseInt(index2) + 1]).replace("]", "")) as any)){
                            if (!target[keyTarget]) {
                                target[keyTarget] = []
                                //keyTargetStatic = "[" + keyTarget + "]"
                            }

                        }else{
                            if (!target[keyTarget]){
                                target[keyTarget] = {}
                            }
                        }
                    }else{
                        if (!target[keyTarget]){
                            target[keyTarget] = {}
                        }
                    }

                    keyString+=keyTargetStatic




                    target = target[keyTarget]
                }
                let evalString:string = "data" + keyString + " = '" + data[index] + "'"
                eval(evalString)

                delete data[index]
            }

        }

        return data
    }

    public build(key:any,data:any) : any
    {
        var params: any =[];
        for(var i in data)
        {
            if(this.is_array(data[i])||this.is_object(data[i]))
            {
                params.push(this.build(key+'['+i+']',data[i]));
            }
            else if(this.is_can_format_value(data[i]))
            {
                params.push(key+'[]'+'='+this.url_encode(this.format_value(data[i])));
            }
        }
        return params.join('&');
    }

    public is_can_format_value(value:any)
    {
        return typeof value=='boolean'||typeof value=='string'||typeof value=='number';
    }

    public format_value(value:any)
    {
        if(value===true)
        {
            return 1;
        }
        else if(value===false)
        {
            return 0;
        }
        else
        {
            return value;
        }
    }

    public url_encode(string:any)
    {
        return encodeURIComponent((string+'')).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');
    }

    public is_array(data:any)
    {
        return data instanceof Array;
    }

    public is_object(data:any)
    {
        return data!=null&&typeof data=='object'&&Object.prototype.toString.call(data)!='[object Array]';
    }
}

