import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchPrams, setSearchPrams] = useSearchParams();
  const lat = searchPrams.get("lat");
  const lng = searchPrams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>map</h1>
      <h1>
        position:{lat} {lng}
      </h1>
      <button
        onClick={() => {
          setSearchPrams({ lat: 23, lng: 34 });
        }}
      >
        change position
      </button>
    </div>
  );
}

export default Map;
