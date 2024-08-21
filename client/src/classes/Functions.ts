import { useEffect, useState } from "react"

const useEffectCustom = (functions:any) =>
{
    const [categoryLists, setCategoryList] = useState([])

	useEffect(() => {    
		// 非同期処理の場合は、関数を定義しそれを呼び出すような形式で記述すること
		const fetch = async () => {
            const items:any = await functions()

            setCategoryList(items)
        }
		fetch()
	}, [])

    return categoryLists
}

export {useEffectCustom}