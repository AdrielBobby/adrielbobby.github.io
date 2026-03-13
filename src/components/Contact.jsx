// Contact.jsx — Shows your contact information and social links.

// --- Contact Links Data ---
// An array of objects, one per contact method.
// Each object has:
//   label → the category name displayed on the left (e.g. "Email")
//   value → the visible link text (e.g. your email address or handle)
//   href  → the actual URL the link opens when clicked
//
// To add more links (e.g., Twitter/X, Discord), just add a new object to this array.
const links = [
  {
    label: 'Email',
    value: 'adrielbobby3@gmail.com',
    // 'mailto:' is a URI scheme — clicking this opens the user's default email app.
    href: 'mailto:adrielbobby3@gmail.com',
  },
  {
    label: 'GitHub',
    value: '/AdrielBobby',
    // Full absolute URL to your GitHub profile.
    href: 'https://github.com/AdrielBobby',
  },
  {
    label: 'LinkedIn',
    value: '/in/adrielbobby',
    href: 'https://linkedin.com/in/adrielbobby',
  },
  {
    label: 'Tinkerhub',
    value: '@adriel_bobby',
    href: 'https://tinkerhub.org/@adriel_bobby',
  },
];

export default function Contact() {
  return (
    // id="contact" — the Navbar "Contact" link scrolls here.
    <section id="contact">
      <div className="container">

        <h2 className="section-title">Contact</h2>

        {/* A short intro paragraph inviting people to reach out.
            Edit this text freely — it's just a plain <p> tag. */}
        <p className="contact-intro">
          Open to collaborations, hackathons, and coffee chats. Feel free to reach out!
        </p>

        {/* Wrapper for the list of contact items — styled as a vertical column in CSS. */}
        <div className="contact-links">

          {/* Loop over the links array.
              'item' = current link object. We access each field with item.label, item.href, etc. */}
          {links.map((item) => (
            // Each row shows the label on the left and the clickable link on the right.
            <div key={item.label} className="contact-item">

              {/* Label column — styled with muted color and uppercase text via CSS. */}
              <span className="contact-label">{item.label}</span>

              {/* The actual clickable link.
                  target="_blank"         → open in new tab
                  rel="noopener noreferrer" → security: prevents the new tab from controlling
                                             this window via window.opener, and stops it
                                             from sending the Referrer header. */}
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>

            </div>
          ))}

        </div>{/* end .contact-links */}
      </div>
    </section>
  );
}
