### linear-gradient support

```ts
import LinearGradient from "react-native-linear-gradient";

dependencies: {
  "linear-gradient": LinearGradient,
},

<Box
  bg={{linearGradient: {colors: ['lightBlue.300', 'violet.800']}}}
>
```

### Utility

```ts
maxWidth = "100%";
<VStack space="2">
bg="gray.300:alpha.50"
```

### Responsive

```ts
const v1 = useBreakpointValue({ base: "base" });

<Stack direction={["column", "column", "row"]}>
```

### Dark mode

```ts
const v2 = useColorModeValue("lightValue", "darkValue");

<Button _light={{ bg: 'teal' }}>
```

### [internal pseudo props](https://docs.nativebase.io/internal-pseudo-props#h2-list-of-internal-pseudo-props)

| Internal Pseudo Props | Use Case                                 |
| --------------------- | ---------------------------------------- |
| `_backdrop`           | Backdrop in Modal, Menu and AlertDialog. |
| `_backdropFade`       | Animation prop for backdrop.             |
| `_image`              | Used to style image in Avatar.           |
| `_overlay`            | Used To style Overlay.                   |

### Refs

- [Colors](https://docs.nativebase.io/default-theme#h2-colors)

## Components

### Box

Similar to a div in HTML
