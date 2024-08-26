import { useEffect, useState } from "react"
import { DEBUG, PRODUCT_DOMAIN,DEVELOPMENT_DOMAIN } from '@env'
import DateClass from "./DateClass"

const useEffectCustom = (functions:any, data:any={}) =>
{
    const [categoryLists, setCategoryList] = useState([])

	useEffect(() => {    
		const fetch = async () => {
            const items:any = await functions(data)

            setCategoryList(items)
        }
		fetch()
	}, [])

    return categoryLists
}

const getUrl = () =>
{
    let url:string = String(PRODUCT_DOMAIN)
    
    if (DEBUG == "True"){
      url = String(DEVELOPMENT_DOMAIN)
    }
    return url

}

const date = (type:string, date:string) : string =>
{
    if (!date){
        return ""
    }

    let $DateClass = new DateClass(date)

    return $DateClass.date(type)
}

export {useEffectCustom, getUrl, date}