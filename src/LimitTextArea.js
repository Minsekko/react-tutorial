import { useState } from "react";

function LimitTextArea({ limit }) {
  let [len, setLen] = useState(0);
  //상태 변수[상태를 저장할 공간,상태값을 바꿀때 사용할 함수] , 배열이 만들어진다
  console.log("state");
  const lengthCheck = function (evt) {
    // setText(evt.value.length);
    setLen(evt.target.value.length);

    if (evt.target.value.length >= limit) {
      window.alert("글자 이상은 입력 불가!");
    }
  };
  return (
    <div>
      <h3>{limit}글자 제한 텍스트 에어리어</h3>
      <textarea onInput={lengthCheck}></textarea>
      <hr />
      <span>
        {len} / {limit}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default LimitTextArea;
