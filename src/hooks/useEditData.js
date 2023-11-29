import baseUrl from '../api/baseUrl'
const useEditData = async(url, params) => {
    const res = await baseUrl.put(url, params)
    return res.data.data

}
export default useEditData