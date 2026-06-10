# Login Page Requirements

## User Story

As a visitor,

I want to log into the system using my username and password.

On the Login page, I can see a form with username and password fields. The password value is hidden by default, but I can toggle its visibility using an eye icon. After entering valid credentials, I can submit the form by clicking the Login button. If authentication succeeds, I am redirected to the catalog page. If authentication fails, I receive an error message explaining the problem.

---

## API Calls

### Login

POST `/auth/login`

Returns:

- authenticated user information;
- access token;
- refresh token.

API provider:

- DummyJSON

---

## User Interface

Reference:

- Material UI based form
- Rounded input fields
- Page title
- Username field
- Password field with visibility toggle
- Login button

UI mockup will be added during implementation.

---

## Acceptance Criteria

### AC-1

Login page is available at:

```text
/login
```

### AC-2

User can enter username and password.

#### AC-2.1

Username field is required.

#### AC-2.2

Password field is required.

#### AC-2.3

Password input is masked by default.

#### AC-2.4

User can toggle password visibility.

#### AC-2.5

Browser autocomplete is enabled for username and password fields.

---

### AC-3

Client-side validation is displayed before form submission.

#### AC-3.1

Validation errors are shown below corresponding fields.

#### AC-3.2

Form cannot be submitted when required fields are empty.

---

### AC-4

User can submit the form.

#### AC-4.1

Authentication request is sent after successful form validation.

#### AC-4.2

Loading state is displayed while request is in progress.

---

### AC-5

Backend errors are displayed to the user.

#### AC-5.1

Invalid credentials message is shown when authentication fails.

#### AC-5.2

API error messages are displayed using toast notifications.

---

### AC-6

After successful authentication:

#### AC-6.1

Authentication session is restored after page refresh.

#### AC-6.2

User is redirected to:

```text
/catalog
```
