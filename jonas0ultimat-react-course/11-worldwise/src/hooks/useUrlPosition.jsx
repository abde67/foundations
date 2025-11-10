import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchPrams] = useSearchParams();
  const lat = searchPrams.get("lat");
  const lng = searchPrams.get("lng");
  return [lat, lng];
}

export { useUrlPosition };
