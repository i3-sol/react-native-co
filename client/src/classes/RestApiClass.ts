import ModelClass from './ModelClass';

export default class extends ModelClass {
    public params:any = {}
    public query:string = ""
    public seriallizer:string = ""

    constructor(api:string, query:string="", seriallizer:string=""){
      super(api);

      this.query = query
      this.seriallizer = seriallizer
    } 

    
    public async list(params:any, completeHandle:any=null)
    {
      return await this.http("", "GET", params, completeHandle)
    }


    public async http(url:string, method:string, params:any, completeHandle:any=() => {})
    {
      if (!params){
        params = {}
      }
      params.query = this.query
      params.seriallizer = this.seriallizer

      return await super.http(url, method, params, completeHandle)

    }

  }