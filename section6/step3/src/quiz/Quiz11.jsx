import { useState } from "react";

function Quiz11() {
  const [form, setForm] = useState({
    email: "",
    pw: "",
    rePw: "",
  });

  const [error, setError] = useState({
    email: "",
    pw: "",
    rePw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "", // 해당 에러만 제거
    }));
  };

  const onSubmit = () => {
    const newError = {};
    const { email, pw, rePw } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newError.email = "이메일을 입력해주세요";
    } else if (!emailRegex.test(email)) {
      newError.email = "올바른 이메일 형식이 아닙니다";
    }
    if (!pw.trim()) newError.pw = "비밀번호를 입력해주세요";
    if (!rePw.trim()) newError.rePw = "비밀번호확인을 입력해주세요";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("회원가입이 완료되었습니다.");
      setForm({ email: "", pw: "", rePw: "" });
      setError({ email: "", pw: "", rePw: "" });
    }
  };

  const checkRePw = () => {
    const { pw, rePw } = form;

    if (pw !== rePw) {
      setError((prev) => ({
        ...prev,
        rePw: "비밀번호가 일치하지 않습니다",
      }));
    } else {
      alert("비밀번호가 일치합니다!");
      setError((prev) => ({
        ...prev,
        rePw: "", // 일치하면 메시지 제거
      }));
    }
  };

  return (
    <div>
      <input
        name="email"
        value={form.email}
        placeholder="이메일"
        onChange={onChange}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}

      <input
        name="pw"
        value={form.pw}
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
      />
      {error.pw && <p style={{ color: "red" }}>{error.pw}</p>}

      <input
        name="rePw"
        value={form.rePw}
        type="password"
        placeholder="비밀번호확인"
        onChange={onChange}
      />
      {error.rePw && <p style={{ color: "red" }}>{error.rePw}</p>}

      <button onClick={checkRePw}>비밀번호 확인</button>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
