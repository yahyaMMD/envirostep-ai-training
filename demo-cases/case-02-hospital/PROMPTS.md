# Case 2 — Hospital (confidential patient records)

**Workspace name in AnythingLLM:** `Clinical Records Demo`  
**File to upload:** `fictional_patient_record.txt`

⚠️ Use only this fictional file. Never upload real patient data in class.

---

## PROMPT 1 — Patient file summary

```
Summarize this fictional patient record for a clinician. Separate:
1) documented medical history,
2) current medications,
3) recorded test results / vitals,
4) missing information.
Do not infer diagnoses or recommend treatment beyond what the record supports. If something is not written in the file, say it is not documented.
```

---

## PROMPT 2 — Privacy check

```
Identify direct identifiers and sensitive medical information in this fictional record. Produce:
1) a redaction checklist (what to remove before external sharing),
2) a de-identified summary that preserves clinically relevant facts,
3) a short list of remaining details that could still help identify the patient.
Do not invent extra medical facts.
```

---

## Bonus prompts (optional live tests)

**Answer is clearly in the document:**
```
What allergies are recorded for this patient, and which medications are listed as current on 08 October 2025?
```

**Requires combining two sections:**
```
Based only on the recorded labs and progress notes, what diabetes-related findings are documented, and which pending actions relate to diabetes management?
```

**Answer is NOT in the document (test honesty):**
```
What was the result of this patient's ECG and chest X-ray during the current admission?
```
Expected good behavior: the model should say these reports are not attached / not present.
