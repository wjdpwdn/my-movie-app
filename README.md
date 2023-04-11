# Movie App 2023

## 4/9

- 파일 생성
- json.package 수정
  - package.json.script.(test,eject) 제거
- props

  ```javascript
  function test(props) {
    //{fav} = props;
    return <h1>{props.fav}</h1>;
  }

  function eject({ fav }) {
    return <h1>{fav}</h1>;
  }

  // 둘중 아무거나 사용해도 된다
  ```

# 🤦🏻‍♂️ 구조분해할당

# import PropTypes from "prop-types"; 이 뭐야?

- 'PropTypes'는 React 컴포넌트에 전달되는 props의 예상 데이터 유형을 정의하는 방법을 제공하는 React의 'prop-types' 모듈 속성입니다.
- React에서 구성 요소를 만들 때 객체를 사용하여 구성 요소를 정의할 수 있습니다. PropTypes는 이러한 소품의 유형과 요구 사항을 정의하는 방법입니다.
- 우리는 prop이 문자열, 배열 또는 객체가 되어야 한다고 정의할 수 있으며 prop이 필수인지 선택 사항인지도 지정할 수 있습니다. 이를 통해 구성 요소가 올바르게 사용되고 수신된 데이터를 처리할 수 있습니다.

```
import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  return <div>{props.myProp}</div>;
}

MyComponent.propTypes = {
  myProp: PropTypes.string.isRequired
};

export default MyComponent;
```

이 예에서는 myProp 소품이 필수 문자열임을 정의합니다. myProp이 제공되지 않거나 문자열이 아닌 다른 것으로 제공되면 콘솔에 경고가 기록됩니다. 이를 통해 개발 프로세스 초기에 버그와 오류를 발견할 수 있습니다.
