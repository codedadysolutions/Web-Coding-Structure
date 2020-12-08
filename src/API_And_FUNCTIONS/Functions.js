import { api_get_data } from '../API_And_FUNCTIONS/API'

export const apiCall = async () => {
    const dat = await api_get_data()
    return dat
}