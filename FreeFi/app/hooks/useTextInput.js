import { useEffect } from "react";

export default function useTextInput(word) {
  useEffect(() => {
    return () => {
      console.log(word);
    };
  }, [word]);
}
