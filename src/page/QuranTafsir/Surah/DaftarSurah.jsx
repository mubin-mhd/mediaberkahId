import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

function DaftarSurah() {
  const [dataSurah, setDataSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSurah = async () => {
    await axios.get("https://equran.id/api/surat").then((result) => {
      const data = result.data;
      setDataSurah(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getSurah();
  }, []);

  console.log(dataSurah);
  return (
    <>
      <div className="w-full mx-auto p-5 flex">
        {isLoading ? (
          <div className="mx-auto text-lg font-semibold text-green-500">
            Loading...
          </div>
        ) : (
          <div className="w-full lg:w-11/12 bg-white rounded-lg mx-auto  ">
            <h1 className="text-2xl font-semibold border p-4 text-center bg-[#4BAA32] text-white">
              Daftar Surah
            </h1>
            <table className="w-full table-auto border rounded-sm mx-auto">
              <thead>
                <tr>
                  <th className="p-4">No.Ayat</th>
                  <th className="p-4">Nama Surah</th>
                  <th className="p-4">Murottal</th>
                  <th className="p-4">Jumlah Ayat</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {dataSurah.map((res) => (
                  <tr key={res.nomor} className="border p-2">
                    <td className=" p-2 text-center">{res.nomor}</td>
                    <td className=" p-2 text-center">{res.nama_latin}</td>
                    <td className=" p-2 text-center">
                      <ReactAudioPlayer
                        src={res.audio}
                        controls
                        style={{
                          width: "400px",
                          margin: "auto",
                          background: "white",
                        }}
                      />
                    </td>
                    <td className=" p-2 text-center">{res.jumlah_ayat}</td>
                    <td className=" p-2 text-center">
                      <Link to={`/quran/${res.nomor}`}>
                        <button className="p-2 rounded bg-green-500 text-white">
                          Baca
                        </button>
                      </Link>
                      <Link to={`/tafsir/${res.nomor}`}>
                        <button className="p-2 rounded bg-yellow-500 ml-2 text-white">
                          Tafsir
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default DaftarSurah;
