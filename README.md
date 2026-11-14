# thebillryan.com

Static site for Bill Ryan. No framework and no dependencies: `node build.mjs` turns `data.mjs` and the templates in `build.mjs` into plain HTML in `dist/`.

- **Content:** edit `data.mjs` (books, essays, Digests, talks, pamphlets, The Quiet Suit's club questions). Page wording lives in `build.mjs`.
- **Styles and script:** `assets/style.css`, `assets/site.js`.
- **Forms:** `api/contact.js` is a Vercel function that emails each form submission to Bill through Resend.

## Going live (one time)

1. Create an empty private GitHub repo named `thebillryan-site` and push this folder to it.
2. In Vercel: Add New Project, import the repo. Vercel reads `vercel.json` (build `node build.mjs`, output `dist`, clean URLs).
3. In the project's Environment Variables, add:
   - `RESEND_API_KEY`: the Resend key for thebillryan
   - `CONTACT_TO`: the address that should receive form submissions
   - `CONTACT_FROM`: a sender on a verified Resend domain, such as `thebillryan.com <site@family.thebillryan.com>`
4. Check the preview at the `.vercel.app` address and send a test through one form.
5. Domains: add `thebillryan.com` and `www.thebillryan.com` in Vercel. The registrar is **Network Solutions**. In its DNS settings, change only two records, using the exact values Vercel's domain card shows: the A record for `@` and the CNAME for `www`. Delete any old A or AAAA records for `@`. **Leave the MX and other email records alone**, because email for thebillryan.com runs on the same domain. Keep nameservers at Network Solutions. WordPress retires when the new site answers.

Built 11/14/2026.
