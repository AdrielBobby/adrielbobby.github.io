// Education.jsx — Displays your academic history as a stack of info cards.

// --- Education Data ---
// An array of objects. Each object = one education entry.
// An "object" in JS is a collection of key-value pairs, like a row in a table.
// To add a new school, copy one object (the {...} block), paste it, and change the values.
const education = [
  {
    degree: 'B.Tech., Computer Science Engineering',   // Course name
    school: 'Rajagiri School of Engineering and Technology', // Institution
    location: 'Kochi',                                 // City
    year: '2024 – 2028',                               // Duration
    cgpa: '8.0',                                       // Academic score
  },
  {
    degree: 'Class 12, CBSE',
    school: 'Rajagiri Public School',
    location: 'Kalamassery',
    year: '2022 – 2024',
    cgpa: '8.9',
  },
  {
    degree: 'Class 10, CBSE',
    school: 'The Charter School',
    location: 'Pukattupady',
    year: '2021 – 2022',
    cgpa: '8.9',
  },
];

export default function Education() {
  return (
    // id="education" is the scroll target for the Navbar's "Education" link.
    <section id="education">
      <div className="container">

        <h2 className="section-title">Education</h2>

        {/* A wrapper div for the stack of cards. The CSS class just adds vertical spacing. */}
        <div className="edu-cards">

          {/* .map() loops over the education array.
              'item' is the variable name we chose for each object in the loop.
              You could call it 'edu', 'entry', or anything — it's just a variable.
              'key={item.degree}' uses the degree string as the unique key for React.
              It needs to be unique across all items in this list. */}
          {education.map((item) => (
            // Each card is a div styled with a dark background and border.
            <div key={item.degree} className="edu-card">

              {/* h3 is appropriate here — it's a sub-heading under the h2 section title. */}
              <h3>{item.degree}</h3>

              {/* We use a template-literal-like pattern in JSX: {item.school} and {item.location}
                  are "interpolated" — React replaces them with the actual string values.
                  In JSX, curly braces {} let you run any JavaScript expression inline. */}
              <p className="edu-school">
                {item.school}, {item.location}
              </p>

              {/* A flex row showing year and CGPA side-by-side. */}
              <div className="edu-meta">
                <span>{item.year}</span>
                <span>CGPA: {item.cgpa}</span>
              </div>

            </div>
          ))}

        </div>{/* end .edu-cards */}
      </div>
    </section>
  );
}
