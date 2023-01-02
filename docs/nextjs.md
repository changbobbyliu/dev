## Preview mode

getStaticProps will call in preview mode

```ts
res.setPreviewData({}).redirect(req.query.redirect as string);
res.clearPreviewData().redirect("/");
```

## Random

### NEXT_PUBLIC_

The NEXT_PUBLIC_ prefix automatically exposes this variable to the browser. Example:

```sh
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_12345
STRIPE_SECRET_KEY=sk_12345
```
