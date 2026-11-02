# Dedicated GEI Research-Interest Form — Activation Checklist

## Purpose
This form is a separate channel for GEI research inquiries. It must not reuse the existing ordinary Y'allToo support Formspree endpoint.

## Current status
- The public page `research-interest.html` is a designed, non-submitting preview.
- All fields and the submit control are disabled.
- The placeholder endpoint `REPLACE_WITH_NEW_GEI_FORM_ID` is intentionally not operational.
- No form submission is collected or transmitted by this page at this stage.

## Activation steps
1. Create a **new, separate form** in the chosen form provider (for example, a new Formspree form dedicated to GEI research interest).
2. Configure its recipient and notification settings to the research contact inbox you choose.
3. Set spam protection and enable HTTPS.
4. Replace the placeholder form action in `research-interest.html` with the new GEI-only endpoint. Do not use the existing Y'allToo support endpoint.
5. Remove the `disabled` attributes from the inputs, selects, textareas, consent checkboxes, and submit button. Change the button to `type="submit"`.
6. Add a hidden subject field such as `<input type="hidden" name="_subject" value="New GEI research-interest inquiry">`.
7. Test a submission using a test address, verify receipt and spam handling, then test the live GitHub Pages URL on mobile and desktop.
8. Publish a short privacy notice explaining who receives submissions, why the information is collected, and how someone can request deletion.

## Data-minimization and consent
- Ask only for preferred name, email, discipline, participation type, and optional research-interest details.
- Keep public attribution as a separate optional opt-in; unchecked by default.
- Do not request home address, date of birth, phone number, government ID, or confidential material.
- Do not imply academic credentials are verified or that participation constitutes institutional endorsement, employment, compensation, certification, or formal peer review.
- Do not publish contact details or private submissions in GitHub issues, pull requests, or public repository files.

## Future improvements
A secure private researcher portal with authenticated roles and submission tracking is a separate project. A basic contact form is not a substitute for private research-workspace access controls.
