window.addEventListener('DOMContentLoaded', (event) => {
  // すでにあるクリックイベントリスナー
  document.querySelectorAll('.user-name').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      alert(event.target.innerHTML);
    });
  });

  // ボタンクリック時の処理
  document.querySelector('.send-button').addEventListener('click', (event) => {
    const inputText = document.querySelector('.input-text').value.trim();

    // シーザー暗号を実行する関数
    function caesarCipher(str, shift) {
      return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
          const charCode = char.charCodeAt(0);
          const baseCode = charCode >= 65 && charCode <= 90 ? 65 : 97; // A=65, a=97
          return String.fromCharCode(((charCode - baseCode + shift) % 26) + baseCode);
        } else {
          return char;
        }
      }).join('');
    }

    // シーザー暗号化された文字列を生成
    const encryptedText = caesarCipher(inputText, 3);

    // Fetchリクエストを送信
    fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: `${inputText}☞${encryptedText}` }) // 暗号化されたテキストを送信
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // 成功時の処理（例: UIの更新）
    })
    .catch(error => console.error('Error:', error));

    // 入力欄をクリア
    document.querySelector('.input-text').value = '';
  });
});
