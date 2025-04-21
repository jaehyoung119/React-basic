import { useState } from "react";

function Quiz10() {
  const [form, setForm] = useState({
    name: "",
    pw: "",
    rePw: "",
  });

  const [error, setError] = useState({
    name: "",
    pw: "",
    rePw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const onSubmit = () => {
    const { email, pw, rePw } = form;
    const newError = {};

    if (!email.trim()) newError.email = "이메일을 입력해주세요";
    if (!pw.trim()) newError.pw = "비밀번호를 입력해주세요";
    if (!rePw.trim()) newError.rePw = "비밀번호 확인을 입력해주세요";
    if (pw && rePw && pw !== rePw)
      newError.rePw = "비밀번호가 일치하지 않습니다";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("회원가입 완료!");
      setForm({ email: "", pw: "", rePw: "" });
      setError({ email: "", pw: "", rePw: "" });
    }
  };

  return (
    <div>
      <input
        name={email}
        value={form.email}
        onChange={onChange}
        placeholder="이메일"
      />
      <input
        name={pw}
        type={password}
        value={form.pw}
        onChange={onChange}
        placeholder="비밀번호"
      />
      <input
        name={rePw}
        type={password}
        value={form.rePw}
        onChange={onChange}
        placeholder="비밀번호확인"
      />
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
