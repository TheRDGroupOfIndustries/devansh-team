Contact API

This project includes a Next.js API route at `/api/contact` that validates submissions using Zod and writes them to `data/submissions.json`.

How it works:
- Client posts JSON to `/api/contact` with fields: name, email, phone, date, type, message
- Server validates with Zod and returns 400 with `errors` when validation fails
- On success, entry is appended to `data/submissions.json` and a 201 response is returned

To test locally:
1) npm install
2) npm run dev
3) POST to http://localhost:3000/api/contact with a JSON body

Note: `data/submissions.json` is created automatically.
