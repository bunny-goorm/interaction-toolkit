# interaction-toolkit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bunny-goorm/interaction-toolkit/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/interaction-toolkit?logo=npm)](https://www.npmjs.com/package/interaction-toolkit)

[English](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README.md) | 한국어 | [简体中文](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-zh_hans.md) | [日本語](https://github.com/bunny-goorm/interaction-toolkit/blob/main/README-ja_jp.md)

interaction-toolkit은 웹 애플리케이션에서 요소 인터랙션을 쉽게 구현할 수 있게 해주는 유틸리티 라이브러리입니다.

- **scrollToSide**: 요소나 윈도우를 지정된 방향(좌, 우, 상, 하)으로 부드러운 애니메이션과 함께 스크롤합니다.
- **getScrollShadowStates**: 요소의 스크롤 섀도우 상태를 가져오며, 콜백을 통한 지속적 모니터링을 지원합니다.
- 더 많은 인터랙션 유틸리티가 곧 추가될 예정입니다!

## 예제

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
      <button onClick={scrollToBottom}>맨 아래로 스크롤</button>
      <button onClick={scrollToRight}>오른쪽으로 스크롤</button>

      <div ref={containerRef} style={{ height: "200px", overflow: "auto" }}>
        {/* 스크롤 가능한 콘텐츠 */}
      </div>
    </div>
  );
}
```

## 라이선스

MIT © bunnySung. 자세한 내용은 [LICENSE](./LICENSE)를 참조하세요.
