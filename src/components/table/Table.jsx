import "./styles.css";

export const Table = () => {
  return (
    <div className="tableContainer">
      <p>
        Die Body-Mass-Index-Berechnung ermittelt das Verhältnis von Gewicht und
        Körpergröße, der Rechner ist für erwachsene Männer und Frauen geeignet.
      </p>
      <p>
        In der folgenden Tabelle sehen Sie die Erklärung der Indikatoren gemäß
        den Empfehlungen der Weltgesundheitsorganisation (WHO):
      </p>
      <table className="table">
        <thead>
          <tr>
            <td>Body-Mass-Index </td>
            <td>
              Zusammenhang zwischen der Masse einer Person und ihrer Körpergröße
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16 und darunter</td>
            <td>Starkes Untergewicht</td>
          </tr>
          <tr>
            <td>16-18,5</td>
            <td>Unzureichendes (Defizit) Körpergewicht</td>
          </tr>
          <tr>
            <td>18,5-25</td>
            <td>Norm</td>
          </tr>
          <tr>
            <td>25-30</td>
            <td>Übergewicht (Präadipositas)</td>
          </tr>
          <tr>
            <td>30-35</td>
            <td>Adipositas ersten Grades</td>
          </tr>
          <tr>
            <td>35-40</td>
            <td>Adipositas zweiten Grades</td>
          </tr>
          <tr>
            <td>40 oder mehr</td>
            <td>Adipositas dritten Grades (krankhaft)</td>
          </tr>
        </tbody>
      </table>

      <div className="textRecomendation">
        Insbesondere das BMI-Ergebnis ist einer der Faktoren für die
        Durchführung bariatrischer Operationen. Es sei jedoch daran erinnert,
        dass das Ergebnis beratender Natur ist. Vor einer Entscheidung ist eine
        Konsultation mit einem Adipositaschirurgen erforderlich. Dazu können Sie
        eine Anfrage hinterlassen oder die auf der Website angegebene
        Telefonnummer anrufen.
      </div>
    </div>
  );
};
