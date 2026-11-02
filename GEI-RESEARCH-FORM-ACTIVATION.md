# Dedicated GEI Research-Interest Form — Activation and Maintenance

## Integration choice
The GEI recruitment site is a static HTML site hosted on GitHub Pages. Use Formspree's **Basic HTML** integration: a standard HTML form with `method="POST"` and the dedicated endpoint. No React, npm package, build step, or JavaScript SDK is needed.

## Current integration
- Page: `research-interest.html`
- Form action: `https://formspree.io/f/mljjollo`
- Method: `POST`
- Form is separate from ordinary Y'allToo support.
- Hidden `_subject` identifies the incoming inquiry.
- Hidden `_gotcha` honeypot is provided for spam filtering.
- Name, email, discipline, participation type, and contact consent are required.
- Background and question/critique fields are optional.
- Public attribution is a separate optional checkbox and is unchecked by default.

## Formspree dashboard checks
1. Sign in to Formspree and open the form associated with endpoint `mljjollo`.
2. Confirm the notification recipient is the intended GEI research inbox.
3. Complete any email verification or activation step Formspree requires.
4. Review spam filtering and allowed-domain settings. If domain restrictions are enabled, allow the published GitHub Pages origin: `https://jawa-dam.github.io`.
5. Submit a test inquiry from the published page and confirm it arrives at the intended inbox. Also check spam filtering and the Formspree submission dashboard.
6. Test on mobile and desktop. Confirm required-field validation, optional attribution behavior, and the post-submit confirmation/redirect behavior provided by Formspree.

## Privacy and consent
- Ask only for preferred name, email, discipline, participation type, and optional research-interest details.
- Keep public attribution as a separate optional opt-in; unchecked by default.
- Do not request home address, date of birth, phone number, government ID, or confidential material.
- Publish a short privacy notice explaining who receives submissions, why the information is collected, and how someone can request deletion.
- Do not publish contact details or private submissions in GitHub issues, pull requests, or public repository files.
- Do not imply academic credentials are verified or that participation constitutes institutional endorsement, employment, compensation, certification, or formal peer review.

## Important limitation
This is a private contact form, not a secure researcher portal. Formspree handles form delivery; GitHub Pages does not provide authenticated private workspaces, reviewer permissions, or confidential research-submission management. Build those separately if needed.
