import { useState, useEffect } from 'react';

// UUID（ランダムな文字列）を生成する関数
const generateUUID = () => crypto.randomUUID();

export const useAnonymousId = () => {
  const [anonymousId, setAnonymousId] = useState(null);

  useEffect(() => {
    // 1. ローカルストレージから保存済みのIDを探す
    let storedId = localStorage.getItem('quiz_anonymous_id');

    // 2. なければ新しく作って保存する（初回アクセスの人）
    if (!storedId) {
      storedId = generateUUID();
      localStorage.setItem('quiz_anonymous_id', storedId);
    }

    // 3. Stateにセットしてコンポーネントで使えるようにする
    setAnonymousId(storedId);
  }, []);

  return anonymousId;
};
