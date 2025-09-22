# interaction-toolkit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bunny-goorm/interaction-toolkit/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/interaction-toolkit?logo=npm)](https://www.npmjs.com/package/interaction-toolkit)

[English](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README.md) | [한국어](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-ko_kr.md) | [简体中文](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-zh_hans.md) | 日本語

interaction-toolkit は、ウェブアプリケーションでの要素インタラクションを簡単に実装できるユーティリティライブラリです。

- **scrollToSide**: 要素やウィンドウを指定された方向（左、右、上、下）にスムーズなアニメーションでスクロールします。
- **getScrollShadowStates**: 要素のスクロールシャドウ状態を取得し、コールバックによる継続的な監視をサポートします。
- より多くのインタラクションユーティリティが近日公開予定です！

## 例

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
      <button onClick={scrollToBottom}>下にスクロール</button>
      <button onClick={scrollToRight}>右にスクロール</button>

      <div ref={containerRef} style={{ height: "200px", overflow: "auto" }}>
        {/* スクロール可能なコンテンツ */}
      </div>
    </div>
  );
}
```

## ライセンス

MIT © bunnySung. 詳細は[LICENSE](./LICENSE)をご覧ください。
