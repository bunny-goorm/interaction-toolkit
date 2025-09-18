![](./docs/public/og.png)

# interaction-toolkit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bunny-goorm/slash/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/interaction-toolkit?logo=npm)](https://www.npmjs.com/package/interaction-toolkit)

[English](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README.md) | [한국어](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-ko_kr.md) | 简体中文 | [日本語](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-ja_jp.md)

interaction-toolkit 是一个让网页应用程序中的元素交互变得容易实现的工具库。

- **scrollToSide**: 将元素或窗口滚动到指定方向（左、右、上、下），支持平滑动画。
- **getScrollShadowStates**: 获取元素的滚动阴影状态，支持通过回调进行持续监控。
- 更多交互工具即将推出！

## 示例

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
      <button onClick={scrollToBottom}>滚动到底部</button>
      <button onClick={scrollToRight}>向右滚动</button>

      <div ref={containerRef} style={{ height: "200px", overflow: "auto" }}>
        {/* 你的可滚动内容 */}
      </div>
    </div>
  );
}
```

## 许可证

MIT © bunnySung. 详细信息请参见 [LICENSE](./LICENSE)。
