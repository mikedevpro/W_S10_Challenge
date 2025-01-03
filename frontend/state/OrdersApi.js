import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const OrdersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Orders'],
    endpoints: build => ({
        getOrders: build.query({
          query: () => 'orders',
          providesTags: ['Orders'],
        }),
        createOrder: build.mutation({
           query: order => ({
             url: 'orders',
             method: 'POST',
             body: { order },
           }),
           invalidatesTags: ['Orders'],
        }),
    }),
})

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
} = OrdersApi