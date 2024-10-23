import axios from 'axios'

const BASE_PATH = `https://damir-4bc0a-default-rtdb.europe-west1.firebasedatabase.app/`

interface ObjectWithId{
  id?: string
}

export async function get<T extends ObjectWithId>(path: string) : Promise<T[]> {
  const fullPath = `${BASE_PATH}${path}.json`
  const result = await axios.get(fullPath)
  let data = []

  if (result.data == null)
  {
    return []
  }

  for(const [key, value] of Object.entries(result.data))
  {
    var obj = ({
      ...(value as object),
      id: key
    } as unknown ) as T
    data.push(obj)
  }
  return data
}

export async function getById<T>(path:string, id:string): Promise<T>{
  const fullPath = `${BASE_PATH}${path}/${id}.json`
  const result =  await axios.get(fullPath)
  return {
    ...result.data,
    id: id,
  }
}

export async function post<T extends ObjectWithId>(path: string, obj: T) : Promise<void> {
  const fullPath = `${BASE_PATH}${path}.json`
  await axios.post(fullPath, obj)
}

export async function put<T extends ObjectWithId>(path: string, obj: T) : Promise<void> {
  const fullPath = `${BASE_PATH}${path}/${obj.id}.json`
  await axios.put(fullPath, obj)
}

export async function remove<T extends ObjectWithId>(path: string, obj: T): Promise<void> {
  const fullPath = `${BASE_PATH}${path}/${obj.id}.json`
  await axios.delete(fullPath)
}