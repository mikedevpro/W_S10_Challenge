import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/' }),
    tagTypes: ['Orders'],
    endpoints: build => ({
        getOrders: build.query({
          query: () => 'history',
          providesTags: ['Orders'],
        }),
        createOrder: build.mutation({
           query: (order) => ({
             url: 'order',
             body: order ,
             method: 'POST',
           }),
           invalidatesTags: ['Orders'],
        }),
    }),
})

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
} = ordersApi;