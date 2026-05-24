// signup.jsx — shared email signup component
// Posts to window.SIGNUP_WEBHOOK_URL (Google Apps Script web app)
// Falls back to localStorage if no URL is configured.

function EmailSignup({ theme, source = 'critter-crimes' }) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success | error
  const [errMsg, setErrMsg] = React.useState('');

  async function submit(e) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrMsg('Please enter a valid email.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setErrMsg('');
    try {
      const url = window.SIGNUP_WEBHOOK_URL;
      const payload = { email: value, source, timestamp: new Date().toISOString() };
      if (url) {
        // Google Apps Script web apps don't return permissive CORS, so use no-cors.
        // Response is opaque, but the request still reaches the script.
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
      } else {
        // No backend — stash locally so the user can see it works
        const list = JSON.parse(localStorage.getItem('cc_signups') || '[]');
        list.push(payload);
        localStorage.setItem('cc_signups', JSON.stringify(list));
        console.info('[Critter Crimes] Signup saved locally:', payload, '— set window.SIGNUP_WEBHOOK_URL in index.html to send to a Google Sheet.');
      }
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrMsg('Something went wrong. Try again?');
      setStatus('error');
    }
  }

  // ---- Success state ----
  if (status === 'success') {
    return (
      <div style={theme.successWrap}>
        <div style={theme.successTitle}>{theme.successTitleText || "You're on the list."}</div>
        <div style={theme.successBody}>{theme.successBodyText || "We'll holler before the Kickstarter drops. Don't tell the Bark Ranger."}</div>
      </div>
    );
  }

  // ---- Form ----
  return (
    <form onSubmit={submit} style={theme.formWrap} noValidate>
      <div style={theme.fieldRow}>
        <input
          type="email"
          required
          placeholder={theme.placeholder || 'your.email@hideout.gov'}
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
          disabled={status === 'submitting'}
          style={theme.input}
          aria-label="Email address"
        />
        <button type="submit" disabled={status === 'submitting' || !email} style={theme.button}>
          {status === 'submitting' ? (theme.submittingLabel || 'Sending…') : (theme.buttonLabel || 'Sign up for updates →')}
        </button>
      </div>
      {status === 'error' && errMsg && (
        <div style={theme.error}>{errMsg}</div>
      )}
      {theme.disclaimer && (
        <div style={theme.disclaimer}>{theme.disclaimerText}</div>
      )}
    </form>
  );
}

window.EmailSignup = EmailSignup;
