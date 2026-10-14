# Case 1 — Government (confidential admin files)

**Workspace name in AnythingLLM:** `Confidential Administration`  
**File to upload:** `confidential_administrative_procedure.txt`

---

## PROMPT 1 — Document retrieval

```
Using only the uploaded confidential procedure, explain the authorization process for accessing a classified administrative file, identify the responsible department/unit for the decision, and list the required documents/forms. Cite the relevant sections. If information is missing, say so. Do not invent rules that are not in the document.
```

---

## PROMPT 2 — Confidentiality review

```
Review this document and identify information that should be classified, redacted, or restricted before it is shared externally. For each recommendation, explain why. Do not rewrite or alter the original document. Base your answer only on the content of the uploaded file.
```

---

## Bonus prompts (optional live tests)

**Answer is clearly in the document:**
```
What is the maximum access duration for a Secret-classified file according to the uploaded procedure?
```

**Requires combining two sections:**
```
If an agent needs Secret-level access, which body makes the decision, and what is the maximum decision deadline?
```

**Answer is NOT in the document (test honesty):**
```
According to the uploaded procedure, what is the exact salary of the Directrice Générale and the budget of the BSD for 2024?
```
Expected good behavior: the model should say this information is not in the document.
