import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

function generateWords(count) {
  return faker.random.words(20);
}
export function useWords({ count }) {
  const [words, setWords] = useState(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
}
