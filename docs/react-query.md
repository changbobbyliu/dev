## Basic

```ts
const client = new QueryClient({
  defaultOptions: {
    queries: {
      // Default staleTime 0 and cache will not have chance to be used
      staleTime: Infinity,
    },
  },
})

<QueryClientProvider client={client}>
```
