# SolarixBusiness - Dashboard Lead (Next.js + Vercel)

## Istruzioni per l'uso

1. Posiziona i file:
- `pages/api/saveLeadApi.js`
- `pages/admin/leads.jsx`
- `public/leads.json`

2. Collega ogni form a questa API con:

fetch("/api/saveLeadApi", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    nome: "Mario",
    email: "mario@email.com",
    telefono: "3331234567",
    tipo_form: "analisi-personalizzata",
    note: "Richiede CER e incentivi",
  }),
});

3. Accedi alla dashboard via:
https://www.tuosito.it/admin/leads

🔐 Aggiungi protezione se vuoi, tipo middleware auth o route privata.
