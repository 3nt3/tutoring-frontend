import css from "../styles/registerPage.module.scss";
import { useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast, Theme } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../ThemeContext";

function RegisterPage() {
  document.title = "Registrieren";
  const grades = ["5", "6", "7", "8", "9", "10", "11", "12", "13"];

  const subjects = [
    "Deutsch",
    "Englisch",
    "Katholische Religion",
    "Evangelische Religion",
    "Mathematik",
    "Philosophie",
    "Latein",
    "Altgriechisch",
    "Hebräisch",
    "Physik",
    "Biologie",
    "Chemie",
    "Französisch",
    "Spanisch",
    "Pädagogik",
    "Sozialwissenschaften",
    "Politik/Wirtschaft",
    "Informatik",
    "Fortnite"
  ];

  /*
  const [auswahl, setAuswahl] = useState([{}]);
  const [fach, setFach] = useState("");
  const [stufe, setStufe] = useState("");
  */

  const [id, setId] = useState("");
  const [chosen, setChosen] = useState([]);

  /*
  function addSubject() {
    setAuswahl([...auswahl, { subject: fach, grade: stufe }]);
  } */
  const context = useContext(ThemeContext);

  function checkTheme(): "dark" | "light" {
    // to have type safety
    if (context.theme === "dark" || context.theme === "light") {
      return context.theme;
    } else {
      return "dark";
    }
  }

  function register() {
    // todo
    console.log(id, chosen);

    if (/^-?[\d.]+(?:e-?\d+)?$/.test(id) && chosen.length > 1) {
      toast.success("User wird erstellt...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: checkTheme(),
        progress: undefined,
      });
    } else {
      toast.error("Ungültige Daten", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: checkTheme(),
        progress: undefined,
      });
    }
  }

  function ChooseStufe() {
    return (
      <select name="" id="">
        <option value="">--- Stufe auswählen ---</option>
        {grades.map((grade, index) => {
          return <option key={index}>{grade}</option>;
        })}
      </select>
    );
  }

  return (
    <div id={css.wrapper}>
      <div id={css.formContainer}>
        <h1>Registrieren als Nachhilfelehrer:in</h1>
        <div className={css.row}>
          <input
            type="text"
            name="id"
            id={css.id}
            placeholder="Schüler-ID"
            autoComplete="off"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Fach</th>
              <th>Stufe</th>
              <th>Chechbox</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => {
              return (
                <tr key={index}>
                  <td>{subject}</td>
                  <td>
                    <ChooseStufe />
                  </td>
                  <td>
                    <input type="checkbox" placeholder="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="submit"
          onClick={(e) => {
            register();
            e.preventDefault();
          }}
        >
          User erstellen
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
