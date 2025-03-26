import { useState, useEffect } from "react";

export default function FormLeadDashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("/leads.json")
      .then((res) => res.json())
      .then((data) => setLeads(data));
  }, []);

  return (
    <section className="p-6 md:p-12">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        📊 Lead ricevuti dai form
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 text-sm font-semibold">Nome</th>
              <th className="p-3 text-sm font-semibold">Email</th>
              <th className="p-3 text-sm font-semibold">Telefono</th>
              <th className="p-3 text-sm font-semibold">Form</th>
              <th className="p-3 text-sm font-semibold">Data</th>
              <th className="p-3 text-sm font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3 text-sm">{lead.nome}</td>
                <td className="p-3 text-sm">{lead.email}</td>
                <td className="p-3 text-sm">{lead.telefono}</td>
                <td className="p-3 text-sm">{lead.tipo_form}</td>
                <td className="p-3 text-sm">{new Date(lead.data).toLocaleDateString()}</td>
                <td className="p-3 text-sm text-gray-500 italic">{lead.note || "-"}</td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  Nessun lead ancora registrato.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
