## Setup

### [tailwindcss + prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

### [space-x-4](https://tailwindcss.com/docs/space)

children space in between

```css
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
```

### shrink-0

Do not shrink when window too small

### [form states](https://tailwindcss.com/docs/hover-focus-and-other-states#form-states)

```css
required:xx
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
```

### [style based on parent state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state)

```css
group/{name}
group-hover/{name}
```

### style base on sibling

```css
<input type="email" class="peer ..."/>
<span class="mt-2 invisible peer-invalid:visible">
```

```css
peer-placeholder-shown: xx;
```

```css
peer-[.is-dirty] # has is-dirty className
```

### other pseudo elements

```css
placeholder:italic
file:rounded-full
marker:text-sky-400 // list bullet
selection:bg-fuchsia-300 // selected text
```

### Attribute selectors

ARIA Attributes

```css
aria-checked: xx <th aria-sort= "ascending" class=
  "aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]"
  >;
```

Data attributes

```css
data-size="large"
className="data-[size=large]:p-8"
```

### Custom modifier

3rd item

```css
<li class="[&:nth-child(3)]:underline">
<div class="[&_p]:mt-4"> // _ is space
```
