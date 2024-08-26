import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class {
    public key:string = ""
    public Storage:Storage;

    constructor(key:string)
    {
        this.key = key

        //ストレージの作成
        this.Storage = new Storage({
            // 最大容量
            size: 1000,
            // バックエンドにAsyncStorageを使う
            storageBackend: AsyncStorage,
            // キャッシュ期限(null=期限なし)
            defaultExpires: null,
            // メモリにキャッシュするかどうか
            enableCache: true,
        })
    }

    public async load()
    {
        return await this.Storage.load({
            key : this.key
          })
          
    }

    public save(data:any)
    {
        this.Storage.save({
            key: this.key,
            data: data,
          });
    }
}