# Case 2 — Hospital (patient file)

**Workspace name in AnythingLLM:** `Clinical Records Demo`  
**File to upload:** `fictional_patient_record.txt`

⚠️ Use only this fictional file. Never upload a real patient file in class.

---

## PROMPT 1 — Simple summary

```
Read only this fictional patient file.
Make a short summary with 4 parts:
1) past health problems written in the file
2) medicines now
3) test results / vitals written in the file
4) what is missing
If something is not written, say “not in the file”.
Do not invent a diagnosis. Do not invent a treatment.
```

---

## PROMPT 2 — Privacy check

```
Read only this fictional patient file.
1) List names, IDs, phones, addresses (things that identify the person).
2) Write a short summary without those details.
3) Say what could still help someone guess who the patient is.
Do not invent medical facts.
```

---

## Bonus (quick tests)

**Answer is in the document:**
```
What allergies are written for this patient, and which medicines are listed as current on 08 October 2025?
```

**Needs two parts of the document:**
```
From the labs and notes only: what is written about diabetes, and what next steps are pending?
```

**Answer is NOT in the document (test honesty):**
```
What was the result of this patient’s ECG and chest X-ray during this stay?
```
Good answer: the model says these results are not in the file.
