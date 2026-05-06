# CodeSlick Demo — Can You Spot the Issues?

These 5 files were written with AI assistance (Copilot, Cursor, Claude).  
They contain **11 real security vulnerabilities** across JavaScript, TypeScript, Python, Java, and Go.

**CodeSlick finds them all in under 3 seconds.**

---

## Try It

### Option 1 — Install the GitHub App (recommended)

Install CodeSlick on this repo and open [the demo PR](../../pulls).  
The bot will post a comment with every finding automatically.

[![Install CodeSlick](https://img.shields.io/badge/Install-CodeSlick%20GitHub%20App-6366f1?style=for-the-badge)](https://github.com/apps/codeslick)

### Option 2 — Scan in the web tool

Copy any file below into [codeslick.dev](https://codeslick.dev) and hit **Analyze**.  
No account required.

---

## What's in the PR

| File | Language | Issues |
|------|----------|--------|
| `user-api.js` | JavaScript | SQL injection, hardcoded secret, eval() |
| `auth.ts` | TypeScript | JWT misuse, hardcoded API key |
| `payment.py` | Python | Hardcoded AWS key, unsafe deserialization, SQL injection |
| `UserController.java` | Java | SQL injection, hardcoded password |
| `api-client.go` | Go | Hardcoded secret, insecure TLS |

<details>
<summary>Spoilers — full list of findings</summary>

1. `user-api.js` — SQL injection via string concatenation (OWASP A03, CVSS 9.8)
2. `user-api.js` — Hardcoded JWT secret (OWASP A02)
3. `user-api.js` — eval() on user input (OWASP A03)
4. `auth.ts` — jwt.decode() used instead of jwt.verify() — no signature check
5. `auth.ts` — Hardcoded API key in source
6. `payment.py` — Hardcoded AWS access key (OWASP A02)
7. `payment.py` — pickle.loads() on untrusted input (OWASP A08)
8. `payment.py` — SQL injection via string format (OWASP A03)
9. `UserController.java` — SQL injection via string concatenation (OWASP A03)
10. `UserController.java` — Hardcoded database password (OWASP A02)
11. `api-client.go` — InsecureSkipVerify: true disables TLS verification (OWASP A02)

</details>

---

## About CodeSlick

CodeSlick is a security scanner built for teams that use AI to write code.  
It detects the patterns AI models get wrong — SQL injection, hardcoded secrets,  
hallucinated methods, and 300+ other checks — directly in your GitHub PRs.

- 308 security checks across JS, TS, Python, Java, Go
- 164 AI-generated code signals (Copilot, Cursor, Claude fingerprints)
- Runs in under 3 seconds on every PR
- No code stored on our servers

[codeslick.dev](https://codeslick.dev) · [GitHub Marketplace](https://github.com/marketplace/codeslick)
