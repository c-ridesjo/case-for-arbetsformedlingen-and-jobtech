import { DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { Link, Form } from "react-router-dom";
import { useState } from "react";

export const SearchForm = () => {
  const [educationTitle, setEducationTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <DigiTypographyMeta>
      <header>
        <h1>Logga</h1>
      </header>

      <main>
        <Form>
          <input
            placeholder="Utbildningstitel"
            name="utbildningstitel"
            value={educationTitle}
            onChange={(event) => setEducationTitle(event.target.value)}
          ></input>
          <textarea
            placeholder="Beskrivning"
            name="beskrivning"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <Link
            to={`/search-results?educationTitle=${educationTitle}&description=${description}`}
          >
            <button>Sök yrken</button>
          </Link>
        </Form>
      </main>

      <footer>
        <h3>Footertext</h3>
      </footer>
    </DigiTypographyMeta>
  );
};
