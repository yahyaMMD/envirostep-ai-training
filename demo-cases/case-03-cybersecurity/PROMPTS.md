# Case 3 — Cyber (incident report)

**Workspace name in AnythingLLM:** `Incident Response Demo`  
**File to upload:** `fictional_incident_report.txt`

---

## PROMPT 1 — What happened

```
Read only this fictional incident report.
Explain in simple words:
1) the timeline (what happened, in order)
2) what is confirmed vs what is only a guess
3) what we still do not know
4) what to check next (defensive steps only)
Do not invent logs, IPs, or a breach if the report does not say it.
```

---

## PROMPT 2 — Short note for the boss

```
Turn this report into a short note for management.
Use simple words.
Include:
1) 3–5 line summary
2) confirmed facts only
3) possible impact (say “possible”, not sure)
4) what to do first
5) open questions
Do not invent facts.
```

---

## Bonus (quick tests)

**Answer is in the document:**
```
What temporary action was done on SCADA-MGMT-02, and when was the CISO told?
```

**Needs two parts of the document:**
```
Which account was locked after failed logins, and which later priority talks about password reset?
```

**Answer is NOT in the document (test honesty):**
```
According to this report, how much ransom was asked, and which malware family was confirmed by the full disk image?
```
Good answer: the model says ransom amount and confirmed malware family are not in the report.
