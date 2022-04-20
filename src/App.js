import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./component/Tulisan/Create";
import BlogDetail from "./component/Tulisan/BlogDetail";
import NotFound from "./NotFound";
import Navbar from "./component/Navbar/Navbar";
import Dashboard from "./page/Dashboard/Dashboard";
import DaftarSurah from "./page/QuranTafsir/Surah/DaftarSurah";
import DetailSurah from "./page/QuranTafsir/Surah/DetailSurah";
import DetailTafsir from "./page/QuranTafsir/Tafsir/DetailTafsir";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto w-full bg-white shadow-md  rounded-md relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/quran" element={<DaftarSurah />} />
          <Route path="/quran/:id" element={<DetailSurah />} />
          <Route path="/tafsir" element={<DetailTafsir />}>
            <Route path=":id" element={<DetailTafsir />} />
          </Route>
          <Route path="/blogdetail/:id" element={<NotFound />} />
          <Route path="*" element={<BlogDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
