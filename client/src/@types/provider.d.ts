interface ReducerObject {
  type: string
  payload: any
}

interface InitStateObject {
  lang: string
  loading: boolean
}

type GlobalContextType = [
  InitStateObject,

  {
    dispatch: (data: ReducerObject) => void
  }
]