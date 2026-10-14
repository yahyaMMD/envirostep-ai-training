# Case 1 — Government (admin file)

**Workspace name in AnythingLLM:** `Confidential Administration`  
**File to upload:** `confidential_administrative_procedure.txt`

---

## PROMPT 1 — Explain the process

```
Read only this document.
Explain in simple words how to get access to a secret file.
Who decides?
What papers are needed?
If something is missing in the document, say “not in the document”.
Do not invent rules.
```

---

## PROMPT 2 — What to hide

```
Read only this document.
List the information that should stay private before sharing outside.
For each item, say why in one short sentence.
Do not change the document. Do not invent facts.
```

---

## Bonus (quick tests)

**Answer is in the document:**
```
In this document, how long can someone keep access to a Secret file?
```

**Needs two parts of the document:**
```
Who decides for Secret access, and what is the maximum time to answer?
```

**Answer is NOT in the document (test honesty):**
```
According to this document, what is the exact salary of the Directrice Générale and the BSD budget for 2024?
```
Good answer: the model says this is not in the document.
