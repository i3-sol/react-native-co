import QueryBuilderClass from './QueryBuilderClass'
import StorageClass from './StorageClass'
import { getUrl } from './Functions'

export default class {
  private url:string = ""

  constructor(api:string){
    this.url = getUrl()

    this.url+= "/api/" + api + "/"
  } 

  /**
   * 認証
   * @param params 
   * @param completeHandle 
   */
  public async auth(params:any={}, completeHandle:any = null)
  {
    let user:any = await this.http("auth", "get", params, completeHandle)
    let Storage:StorageClass = new StorageClass("user");

		Storage.save(user)
		
    return user
  }

  /**
   * http通信
   * @param url
   * @param method
   * @param params
   * @param fncEnd
   */
  public async http(path:string, method:string, params:any={}, completeHandle:any = null)
  {
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
        if (!completeHandle){
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

    if (!completeHandle){
      return new Promise(functionHttp)  
    }else{  
      functionHttp(null);      
    }

  }


}