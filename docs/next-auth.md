### useSession

```
// Redirect to default http://localhost:3000/api/auth/signin?error=SessionRequired&callbackUrl=http//localhost:3000
// if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
required: true,
// override default redirect above
onUnauthenticated(){},
```
