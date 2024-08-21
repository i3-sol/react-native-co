import ModelClass from './ModelClass';

export default class extends ModelClass {
    public params:any = {fields:[], images:[], wheres:[]}

    constructor(api:string){
      super(api);
    } 

    public async list(params:any, completeHandle:any=() => {})
    {
      return await this.http("", "GET", params, completeHandle)

    }

    public fields(data:any)
    {
      if (typeof data == "string"){
        this.params.fields.push(data)
      }else{
        for (let index in data){
          this.params.fields.push(data[index])
        }
      }

      return this
    }

    public images(data:any)
    {
      if (typeof data == "string"){
        this.params.images.push(data)
      }else{
        for (let index in data){
          this.params.images.push(data[index])
        }
      }

      return this
    }

    public wheres(data:any)
    {
      if (typeof data == "string"){
        this.params.wheres.push(data)
      }else{
        for (let index in data){
          this.params.wheres.push(data[index])
        }
      }

      return this
    }


    public async http(url:string, method:string, params:any, completeHandle:any=() => {})
    {
      if (!params){
        params = {}
      }

      params.fields = this.params.fields
      params.images = this.params.images
      params.wheres = this.params.wheres

      console.log(this.params.wheres)
      
      return await super.http(url, method, params, completeHandle)

    }

  }