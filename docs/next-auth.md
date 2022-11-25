### useSession

```
// Redirect to default http://localhost:3000/api/auth/signin?error=SessionRequired&callbackUrl=http//localhost:3000
// if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
required: true,
// override default redirect above
onUnauthenticated(){},
```

## [Models](https://next-auth.js.org/adapters/models)

- User -> Account -> Session
- VerificationToken

### User

- Default saved: id, name, email and image. Add more in profile() callback.

### Account

- access_token, id_token
- Add `oauth_token`, `oauth_token_secret` for Twitter
- Add `refresh_token_expires_in` int fro GitHub

### Session

- Not used if `session.strategy` is jwt. Default is `jwt`, or `database` if adapter used

### Verification Token

- For passwordless sign in
