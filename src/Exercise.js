function LogonStatusBar() {
  return (
    <>
      <spna>로그인중</spna>
      <button>로그아웃</button>
    </>
  );
}

function LogoffStatusBar() {
  return (
    <>
      <spna>회원가입</spna>
      <button>로그인</button>
    </>
  );
}

function Exercise() {
  let login = true;
  let numbers = [1, 2, 3, 4, 5];
  let components = [<h3 key="a">출력</h3>, <p key="b">테스트</p>];
  let option = [];
  for (let i = 1; i <= 12; i++) {
    option.push(<option key={i}>{i}</option>);
  }

  let years = Array.from({ length: 75 }, function (_, idx) {
    return 1950 + idx;
  });

  years.map(function (elm) {
    return <option key={elm}>{elm}</option>;
  });

  return (
    <>
      <div>{login ? <LogonStatusBar /> : <LogoffStatusBar />}</div>
      <h1>
        {true} {false} {null} {undefined}
      </h1>
      <hr />

      <h2>{numbers} </h2>
      <h2>{components} </h2>
      <div>
        <select>{option}</select>
        <select>
          {years.map(function (elm) {
            return <option key={elm}>{elm}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default Exercise;
