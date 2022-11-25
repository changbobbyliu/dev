## Preview mode

getStaticProps will call in preview mode

```ts
res.setPreviewData({}).redirect(req.query.redirect as string);
res.clearPreviewData().redirect("/");
```
