import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'
import { fetchQuery } from '../api/queries'

const initialState = {
  loans: [],
  loading: true,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setLoans: (state, action) => {
      state.loans = action.payload;
      state.loading = false;
    },
  },
})



export const fetchLoans = () => {
  return async (dispatch) => {
    Axios.post('https://marketplace-api.k1.kiva.org/graphql', {
      query: fetchQuery
    })
      .then(({ data: { data: { lend: { loans: { values } } } } }) => {
        dispatch(setLoans(values))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}



export const {
  setLoans,
} = accountSlice.actions

export default accountSlice.reducer
