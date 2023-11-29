import baseUrl from '../api/baseUrl'
const useInsertData = async(url, params) => {
    const res = await baseUrl.post(url, params)
    return res.data.data

}
export default useInsertData
