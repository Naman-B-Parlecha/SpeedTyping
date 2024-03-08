import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

function generateWords(count) {
  console.log("count", count);
  return faker.random.words(count).toLowerCase();
}
export function useWords(count) {
  const [words, setWords] = useState(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
}
