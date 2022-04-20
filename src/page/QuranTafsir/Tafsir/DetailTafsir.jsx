import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailTafsir() {
  let { id } = useParams();
  const [detailTafsir, setDetailTafsir] = useState([]);
  const [titleSurah, setTitleSurah] = useState([]);

  const getDetailSurah = async () => {
    await axios.get(`https://equran.id/api/tafsir/${id}`).then((response) => {
      const data = response.data.tafsir;
      const dataTitle = response.data;
      console.log(dataTitle);
      setTitleSurah(dataTitle);
      setDetailTafsir(data);
    });
  };

  useEffect(() => {
    getDetailSurah();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg mx-auto  lg:w-3/4 mt-4">
      <h1 className="text-2xl font-semibold border text-white p-4 text-center bg-[#4BAA32]">
        Detail Tafsir
      </h1>

      <table className="w-full table-auto border rounded-sm mx-auto">
        <thead>
          <tr>
            <th className="p-4">
              Tafsir Surah {titleSurah.nama_latin} ({titleSurah.arti})
            </th>
          </tr>
        </thead>
        <tbody>
          {detailTafsir.map((res, index) => (
            <tr key={index} className="border p-2 content-start">
              <td className="text-justify p-4">
                <h3 className="font-semibold text-center text-2xl underline decoration-2 mb-4">
                  Ayat {res.ayat}
                </h3>
                <span
                  className=" p-2 text-justify"
                  dangerouslySetInnerHTML={{ __html: res.tafsir }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailTafsir;
