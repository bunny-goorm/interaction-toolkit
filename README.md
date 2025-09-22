# interaction-toolkit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bunny-goorm/interaction-toolkit/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/interaction-toolkit?logo=npm)](https://www.npmjs.com/package/interaction-toolkit)

English | [한국어](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-ko_kr.md) | [简体中文](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-zh_hans.md) | [日本語](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-ja_jp.md)

interaction-toolkit is a utility library that makes element interactions easy to implement in web applications.

- **scrollToSide**: Scroll elements or window to specified directions (`left`, `right`, `top`, `bottom`) with smooth animations.
- **getScrollShadowStates**: Get scroll shadow states for elements with optional continuous monitoring via callbacks.
- More interaction utilities coming soon!

## Examples

```jsx
import React, { useRef } from "react";
import { scrollToSide } from "interaction-toolkit";

function ScrollExample() {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    scrollToSide(containerRef.current, {
      direction: "bottom",
      scrollBehavior: "smooth",
    });
  };

  const scrollToRight = () => {
    scrollToSide(containerRef.current, {
      direction: "right",
      scrollBehavior: "smooth",
    });
  };

  return (
    <div>
      <button onClick={scrollToSide}>Scroll to Bottom</button>
      <button onClick={scrollToRight}>Scroll to Right</button>

      <div ref={containerRef} style={{ height: "200px", overflow: "auto" }}>
        {/* Your scrollable content */}
      </div>
    </div>
  );
}
```

## License

MIT © bunnySung. See [LICENSE](./LICENSE) for details.
