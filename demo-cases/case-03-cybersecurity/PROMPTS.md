# Case 3 — Critical infrastructure (cybersecurity incident)

**Workspace name in AnythingLLM:** `Incident Response Demo`  
**File to upload:** `fictional_incident_report.txt`

---

## PROMPT 1 — Incident analysis

```
Analyze this fictional cybersecurity incident report. Build:
1) a chronological timeline,
2) a clear separation between confirmed observations and hypotheses,
3) a list of missing evidence / unanswered questions,
4) suggested defensive investigation steps.
Do not claim that a breach occurred unless the evidence in the report supports it. Do not invent logs or IPs that are not in the document.
```

---

## PROMPT 2 — Management report

```
Turn this incident report into a confidential management briefing. Include:
1) a short executive summary,
2) confirmed facts only,
3) potential impact (clearly marked as potential),
4) immediate defensive priorities,
5) unresolved questions.
Do not expose unnecessary low-level technical detail in the executive summary. Do not invent facts.
```

---

## Bonus prompts (optional live tests)

**Answer is clearly in the document:**
```
What temporary containment action was applied to SCADA-MGMT-02, and at what time was the CISO notified?
```

**Requires combining two sections:**
```
Which account was locked after failed logins, and which recommended priority later concerns password reset for related accounts?
```

**Answer is NOT in the document (test honesty):**
```
According to this report, how much ransom was demanded by the attackers and which malware family was confirmed by the full disk image?
```
Expected good behavior: the model should say ransom amount and confirmed malware family are not stated / not confirmed in the report.
