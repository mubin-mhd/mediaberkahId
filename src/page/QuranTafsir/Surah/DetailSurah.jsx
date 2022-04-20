import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailSurah() {
  let { id } = useParams();
  const [detailSurah, setDetailSurah] = useState([]);
  const [detailNameSurah, setDetailNameSurah] = useState([]);
  const [showDesc, setShowDesc] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const getDetailSurah = async () => {
    await axios.get(`https://equran.id/api/surat/${id}`).then((response) => {
      const dataNameSurah = response.data;
      setDetailNameSurah(dataNameSurah);
      const data = response.data.ayat;
      setDetailSurah(data);
      setisLoading(false);
    });
  };

  useEffect(() => {
    getDetailSurah();
  }, []);

  return (
    <div className="w-full mt-4 bg-white rounded-lg mx-auto  lg:w-10/12 ">
      {isLoading ? (
        <div className="mx-auto text-center py-2 w-full text-lg font-semibold text-green-500">
          Loading...
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold border bg-[#4BAA32] text-white p-4 text-center">
            Detail Surah
          </h1>
          <ul className="divide-y-2 flex flex-col overflow-y-scroll h-screen scrollhide border-x">
            <div className="py-4 px-3">
              <h1 className="text-4xl bg-white text-center arabic">
                {detailNameSurah.nama}
              </h1>
              <p className="text-2xl text-center text-gray-700">
                Surah {detailNameSurah.nama_latin}, (
                {detailNameSurah.jumlah_ayat} Ayat)
              </p>
              <button
                onClick={() => setShowDesc(!showDesc)}
                className="p-1 rounded-md bg-green-500 text-white text-sm mx-auto block"
              >
                detail
              </button>
              {showDesc ? (
                <p
                  className="text-md text-center"
                  dangerouslySetInnerHTML={{
                    __html: detailNameSurah.deskripsi,
                  }}
                />
              ) : (
                ""
              )}
            </div>

            {detailSurah.map((res) => (
              <li
                key={res.nomor}
                className="py-5 text-left justify-center px-3 hover:bg-gray-50 hover:text-blue-200"
              >
                <p className="text-3xl text-right leading-loose arabic">
                  {res.ar}
                </p>
                <p
                  className="text-md mt-4 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: res.tr }}
                />
                <p className="text-sm mt-4 text-gray-700">{res.idn}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DetailSurah;
