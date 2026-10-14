# AnythingLLM + Ollama — 3 sensitive-data demo cases

Ready-to-run classroom files. All content is **100% fictional**.

## Folder contents

| Case | Workspace name | File to upload | Prompts |
|------|----------------|----------------|---------|
| 1 Government | `Confidential Administration` | `case-01-government/confidential_administrative_procedure.txt` | `case-01-government/PROMPTS.md` |
| 2 Hospital | `Clinical Records Demo` | `case-02-hospital/fictional_patient_record.txt` | `case-02-hospital/PROMPTS.md` |
| 3 Cybersecurity | `Incident Response Demo` | `case-03-cybersecurity/fictional_incident_report.txt` | `case-03-cybersecurity/PROMPTS.md` |

## How to run each case (same workflow)

1. Open **AnythingLLM** (local, with Ollama model already working).
2. Create a **new workspace** with the name above.
3. Upload the matching `.txt` file into that workspace.
4. Wait until embedding / processing finishes.
5. Open the workspace chat and paste **PROMPT 1**, then **PROMPT 2**.
6. Optionally run the 3 bonus prompts (in-doc / combine / missing).

## Suggested order in class

1. **Case 1 first** (easiest + strong RAG demo)
2. Case 2 (privacy / redaction)
3. Case 3 (facts vs hypotheses)

## Safety message for students

- Local AI helps with drafts and document Q&A.
- Sensitive real data needs authorization + verified local configuration.
- Always check answers against the source document.
- Never upload real government, hospital, or incident files in a classroom demo.

## Optional impress moment

After setup, disconnect internet and show that chat + document Q&A still work locally.  
Say clearly: this is a demo of locality, not a full security certification.
