import React from "react";

function JadwalSholat({ jadwalSholat }) {
  return (
    <div>
      <table className="table-auto w-full mx-auto trasition duration-300 ">
        <thead className="bg-[#4BA931]  p-3">
          <tr className="">
            <th className="text-white p-2">Imsak</th>
            <th className="text-white p-2">Subuh</th>
            <th className="text-white p-2">Dzuhur</th>
            <th className="text-white p-2">Ashar</th>
            <th className="text-white p-2">Maghrib</th>
            <th className="text-white p-2">Isya</th>
            <th className="text-white p-2">Daerah</th>
            <th className="text-white p-2">Tanggal</th>
          </tr>
        </thead>
        {jadwalSholat.map((result) => (
          <tbody>
            <tr className="bg-gray-50">
              <td className="text-gray-500 p-2 text-center">
                {result.times.Imsak}
              </td>
              <td className="text-gray-500 p-2 text-center">
                {result.times.Fajr}
              </td>
              <td className="text-gray-500 p-2 text-center">
                {result.times.Dhuhr}
              </td>
              <td className="text-gray-500 p-2 text-center">
                {result.times.Asr}
              </td>
              <td className="text-gray-500 p-2 text-center">
                {result.times.Maghrib}
              </td>
              <td className="text-gray-500 p-2 text-center">
                {result.times.Isha}
              </td>
              <td className="text-gray-500 p-2 text-center">Jakarta</td>
              <td className="text-gray-500 p-2 text-center">
                {result.date.hijri} Hijriah
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default JadwalSholat;
