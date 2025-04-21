import { useState } from "react";

function Quiz10() {
  const [form, setForm] = useState({
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

    if (!email.trim() || !pw.trim() || !rePw.trim()) {
      setError("모든 항목을 입력해주세요");
      return;
    }

    if (pw !== rePw) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("제출 완료");
    setForm({ email: "", pw: "", rePw: "" });
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
