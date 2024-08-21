import { DEBUG, PRODUCT_DOMAIN,DEVELOPMENT_DOMAIN } from '@env'
import QueryBuilderClass from './QueryBuilderClass'

export default class {
  private url:string = ""
  public isAsync:boolean = true

  constructor(api:string){
    this.url = String(PRODUCT_DOMAIN)


    if (DEBUG != "True"){
      this.url = String(DEVELOPMENT_DOMAIN)
    }

    this.url+= "/" + api + "/"
  } 


  /**
   * http通信
   * @param url
   * @param method
   * @param params
   * @param fncEnd
   */
  public async http(path:string, method:string, params:any={}, completeHandle = function(data:any){})
  {
    console.log("http")
    const functionHttp = (resolve:any) => {
      let url:string = this.url

      if (path){
        url+= path + "/"
      }
  
      let headers:any = {
        'Content-Type': 'application/json',
      }
  
      let Config:any = {}
  
      if (Config.AuthModel) {
        headers.Authorization = `Bearer `
      }
  
      //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  
      if (method.toLowerCase() == "get"){
          let QueryBuilder:QueryBuilderClass = new QueryBuilderClass()
  
          url += "?" + QueryBuilder.getQuery(params)
      }
  
      fetch(url, {
        method: method,
        // HTTP リクエストのメソッド
        headers: headers,
        // サーバーへ送るファイルはJSONファイルであることを宣言
        //body: params
        // 送るデータをJSON形式に変換する
      })
      .then(response => response.json())
      .then(data => {
        if (this.isAsync){
          resolve(data)
        }else{
          completeHandle(data)
        }
      })
      .catch((error) => {
        // .catchは失敗の時の処理を示す場合に使う。
        console.log(url)
        console.log(params)
        console.error('Error:', error);
      });  
    }

    if (this.isAsync){
      return new Promise(functionHttp)  
    }else{  
      functionHttp(null);      
    }

  }


}