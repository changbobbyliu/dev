# boobar.eth

## Docs

- [**prisma**](./docs/prisma.md)
- [**planetscale**](./docs/planetscale.md)
- [**cli**](./docs/cli.md)
- [**tailwindcss**](./docs/tailwindcss.md)
- [**next-auth**](./docs/next-auth.md)
- [**thirdweb**](./docs/thirdweb.md)
- [**react-transition-group**](./docs/react-transition-group.md)
- [**contentful**](./docs/contentful.md)
- [**react-query**](./docs/react-query.md)
- [**native-base**](./docs/native-base.md)

### [Intersection Observer](https://www.youtube.com/watch?v=2IbRtjez6ag)

Detect dom entered viewport

```js
const observer = new IntersectionObserver((entries) => {
	entries[0].target.classList.toggle("show", entry.isIntersecting);
});
```

### CSS

```css
filter: drop-shadow(0 0 2em red); /* from vite scaffold */
```

### React

- `useMemo` -> recalculate when any state triggers re-render and [deps] changed

### Analytics

- IMEI (international mobile equipment identity / 设备唯一标示) -> Cannot collect -> User bind UUID instead

### [patch-package](https://www.npmjs.com/package/patch-package)

Add custom patch to `node_modules/some_module`

### Unhandled promise rejection tracking (global)

[promise](https://www.npmjs.com/package/promise)

```js
// Should only do in dev considering performance
require("promise/lib/rejection-tracking").enable();
```

## APIs

- [**API Doc**](./docs/api.md)
