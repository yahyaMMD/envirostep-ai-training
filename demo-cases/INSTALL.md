# What to install before Session 2

## Required software

1. **Ollama** — runs local AI models
   - Windows (PowerShell): `irm https://ollama.com/install.ps1 | iex`
   - Linux / macOS: `curl -fsSL https://ollama.com/install.sh | sh`
   - Check: `ollama --version`

2. **Gemma 3 models** (after Ollama works)
   ```bash
   ollama pull gemma3:0.6b
   ollama pull gemma3:1b
   ollama pull gemma3:4b
   ```

3. **AnythingLLM Desktop**
   - Download: https://anythingllm.com
   - In settings: choose **Ollama** as LLM provider
   - Select model: `gemma3:4b` (or 1b / 0.6b)

4. **Cursor** (for the tools part)
   - Download: https://cursor.com

5. **Node.js** (for WhatsApp / email / file tools later)
   - Download LTS: https://nodejs.org
   - Check: `node -v` and `npm -v`

## Demo documents for AnythingLLM (fictional only)

Upload these into separate workspaces:

| Workspace name | File |
|----------------|------|
| Confidential Administration | `case-01-government/confidential_administrative_procedure.txt` |
| Clinical Records Demo | `case-02-hospital/fictional_patient_record.txt` |
| Incident Response Demo | `case-03-cybersecurity/fictional_incident_report.txt` |

Prompts for each case are in the matching `PROMPTS.md` file.

⚠️ Never upload real government, hospital, or security files during training.
