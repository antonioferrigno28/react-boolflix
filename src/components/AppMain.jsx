import Films from "./Films";
import TvSeries from "./TvSeries.jsx";
import Flag from "react-world-flags";

export default function AppMain({ showTitle, movies, tvSeries, renderstars }) {
  const languageFlag = {
    en: "US",
    it: "IT",
    fr: "FR",
    es: "ES",
    de: "DE",
    ja: "JP",
    zh: "CN",
    ko: "KR",
  };
  return (
    <main>
      <div className="container pt-4">
        {showTitle && (
          <>
            <Films
              movies={movies}
              languageFlag={languageFlag}
              Flag={Flag}
              renderstars={renderstars}
            />
            <TvSeries
              tvSeries={tvSeries}
              languageFlag={languageFlag}
              Flag={Flag}
              renderstars={renderstars}
            />
          </>
        )}
      </div>
    </main>
  );
}
