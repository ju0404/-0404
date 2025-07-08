async function translate() {
  const text = document.getElementById("inputText").value;
  const lang = document.getElementById("lang").value;
  const source = lang === "en" ? "ko" : "en";
  const target = lang;

  if (!text.trim()) {
    document.getElementById("result").innerText = "⚠️ 번역할 내용을 입력해 주세요.";
    return;
  }

  try {
    const response = await fetch("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: source,
        target: target,
        format: "text"
      })
    });

    const data = await response.json();
    document.getElementById("result").innerText = "✅ 번역 결과:\n" + data.translatedText;
  } catch (error) {
    document.getElementById("result").innerText = "❌ 번역 실패. 인터넷 연결 또는 서버 상태를 확인하세요.";
    console.error(error);
  }
  function resizeDisplayFont() {
  const display = document.getElementById('display');
  const length = display.value.length;

  // 기본 글자 크기
  let size = 30;

  if (length > 10) size = 26;
  if (length > 14) size = 22;
  if (length > 18) size = 18;
  if (length > 22) size = 14;
  if (length > 28) size = 12;

  display.style.fontSize = size + 'px';
}

}
           