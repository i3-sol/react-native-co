interface ReducerObject {
  type: string
  payload: any
}

interface InitStateObject {
  lang: string
  loading: boolean
  userEmail: string
}

type GlobalContextType = [
  InitStateObject,

  {
    dispatch: (data: ReducerObject) => void
  }
]