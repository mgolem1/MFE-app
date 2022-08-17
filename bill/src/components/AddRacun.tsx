import { Button } from "@material-ui/core";
import React, { useState } from "react";
import moment from "moment";
import { useStore } from "store/storeApp";
import withLocalize from "@sedamit/bss-web-lib/common/component/localize/withLocalize";
import LocalizeService from "@sedamit/bss-web-lib/services/util/localize/LocalizeService";

const AddRacun: React.FC = () => {
  const { racun, addBill } = useStore();

  const [id, setIdu] = useState(0);
  const [RBR, setRBR] = useState(0);
  const [brRacuna, setBrRacuna] = useState("");
  const [smjer, setSmjer] = useState("izlazni");
  const [datumRacuna, setDatumRacuna] = useState(new Date());
  const [rokPlacanja, setRokPlacanja] = useState(new Date());
  const [nazivPartner, setNazivPartner] = useState("");
  const [adresaPartnera, setAdresaPartnera] = useState("");
  const [OIBPartnera, setOIB] = useState("");
  const [iznosPrije, setIznosPrije] = useState(0);
  const [porez, setPorez] = useState(0);
  const [iznosPoreza, setIznosPoreza] = useState(0);
  const [saPorezon, setSaPorezom] = useState(0);

  const [error, setError] = useState({
    idError: "",
    brRacunaError: "",
    RBRError: "",
    smjerError: "",
    datumRacunErrora: "",
    nazivPartnerError: "",
    iznosPrijeError: "",
    valid: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleValidation();
    if (error.valid) {
      addBill({
        id,
        brRacuna,
        RBR,
        smjer,
        datumRacuna,
        rokPlacanja,
        nazivPartner,
        adresaPartnera,
        OIBPartnera,
        iznosPrije,
        porez,
        iznosPoreza,
        saPorezon,
      });
      console.log("tu");
    }
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(new Date(e.target.value), "yyyy-mm-dd");
    setRokPlacanja(newDate.toDate());
  };
  const onChangeDate2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(new Date(e.target.value));
    setDatumRacuna(newDate.toDate());
  };

  const handleValidation = () => {
    let errors = error;

    if (id <= 0) {
      errors.idError = "Neispravan ID";
      errors.valid = false;
    } else if (id > 0) {
      errors.idError = "";
      errors.valid = true;
    }
    if (brRacuna === "") {
      errors.brRacunaError = "Neispravan broj računa";
      errors.valid = false;
    } else if (brRacuna !== "") {
      errors.brRacunaError = "";
      errors.valid = true;
    }
    if (RBR <= 0) {
      errors.RBRError = "Neispravan redni broj račun";
      errors.valid = false;
    } else if (RBR > 0 && errors.valid) {
      errors.RBRError = "";
      errors.valid = true;
    }
    if (nazivPartner === "") {
      errors.nazivPartnerError = "Neispravan naziv partnera";
      errors.valid = false;
    } else if (nazivPartner !== "" && errors.valid) {
      errors.nazivPartnerError = "";
      errors.valid = true;
    }
    if (iznosPrije <= 0) {
      errors.iznosPrijeError = "Unesite iznos prije poreza";
      errors.valid = false;
    } else if (iznosPrije > 0 && errors.valid) {
      errors.iznosPrijeError = "";
      errors.valid = true;
    }
    console.log(errors);
    setError({ ...errors });
  };

  const onChageIznosPrije = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIznosPrije(parseInt(e.target.value));
    setSaPorezom(parseInt(e.target.value) + iznosPoreza);
  };
  const onChagePorez = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPorez(parseInt(e.currentTarget.value));
    setIznosPoreza(iznosPrije * (parseInt(e.currentTarget.value) / 100));
    setSaPorezom(
      iznosPrije + iznosPrije * (parseInt(e.currentTarget.value) / 100)
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="submit">
        <label>ID:</label>
        <br></br>
        <input
          type="number"
          placeholder="ID"
          value={id}
          name="id"
          onChange={(e) => setIdu(parseInt(e.currentTarget.value))}
        />
        <br></br>
        {error.idError !== "" && (
          <>
            <span className="error">{error.idError}</span>
            <br></br>
          </>
        )}

        <label>Broj računa:</label>
        <br></br>
        <input
          type="text"
          placeholder="Broj racuna"
          value={brRacuna}
          name="brRacuna"
          onChange={(e) => setBrRacuna(e.currentTarget.value)}
        />
        <br></br>
        {error.brRacunaError !== "" && (
          <>
            <span className="error">{error.brRacunaError}</span>
            <br></br>
          </>
        )}

        <label>Redni broj računa:</label>
        <br></br>
        <input
          type="number"
          placeholder="RBR"
          value={RBR}
          name="RBR"
          onChange={(e) => setRBR(parseInt(e.currentTarget.value))}
        />
        <br></br>
        {error.RBRError !== "" && (
          <>
            <span className="error">{error.RBRError}</span>
            <br></br>
          </>
        )}

        <div className="controls">
          <label>Smjer:</label>
          <br></br>
          <label className="radio">
            <input
              type="radio"
              name="smjer"
              onChange={(e) => setSmjer(e.currentTarget.value)}
              value="ulazni"
              checked={smjer === "ulazni"}
            />
            Ulazni račun
          </label>
          <label className="radio">
            <input
              type="radio"
              name="smjer"
              onChange={(e) => setSmjer(e.currentTarget.value)}
              value="izlazni"
              checked={smjer === "izlazni"}
            />
            Izlazni racun
          </label>
          <br></br>
          {error.smjerError !== "" && (
            <>
              <span className="error">{error.smjerError}</span>
              <br></br>
            </>
          )}
        </div>
        <label>Datum racuna: </label>
        <br></br>
        <input
          type="date"
          value={datumRacuna.toISOString().substring(0, 10)}
          name="datumRacuna"
          onChange={onChangeDate2}
        />
        <br></br>

        <label>Rok placanja: </label>
        <br></br>
        <input
          type="date"
          value={rokPlacanja.toISOString().substring(0, 10)}
          name="rokPlacanja"
          onChange={onChangeDate}
        />
        <br></br>

        <label>Naziv partnera:</label>
        <br></br>
        <input
          type="text"
          placeholder="Naziv partnera"
          value={nazivPartner}
          name="nazivPartnera"
          onChange={(e) => setNazivPartner(e.currentTarget.value)}
        />
        <br></br>
        {error.nazivPartnerError !== "" && (
          <>
            <span className="error">{error.nazivPartnerError}</span>
            <br></br>
          </>
        )}

        <label>Adresa partnera: </label>
        <br></br>
        <input
          type="text"
          placeholder="Adresa partnera"
          value={adresaPartnera}
          name="adresaPartnera"
          onChange={(e) => setAdresaPartnera(e.currentTarget.value)}
        />
        <br></br>
        {smjer === "ulazni" && (
          <>
            <label>OIB partnera: </label>
            <br></br>
            <input
              type="text"
              placeholder="OIB"
              value={OIBPartnera}
              name="OIBPartnera"
              onChange={(e) => setOIB(e.currentTarget.value)}
            />
            <br></br>
          </>
        )}

        <label>Iznos prije poreza: </label>
        <br></br>
        <input
          type="number"
          placeholder="Iznos prije poreza"
          value={iznosPrije}
          name="iznosPrije"
          onChange={onChageIznosPrije}
        />
        <br></br>
        {error.iznosPrijeError !== "" && (
          <>
            <span className="error">{error.iznosPrijeError}</span>
            <br></br>
          </>
        )}

        <label>Porez: </label>
        <br></br>
        <input
          type="number"
          placeholder="Porez"
          value={porez}
          name="porez"
          onChange={onChagePorez}
        />
        <br></br>

        <label>Iznos poreza: </label>
        <br></br>
        <input
          type="number"
          placeholder="Iznos poreza"
          value={iznosPoreza}
          name="iznosPoreza"
          disabled
        />
        <br></br>

        <label>Cijena sa porezom:</label>
        <br></br>
        <input
          type="number"
          placeholder="Iznos sa porezom"
          value={saPorezon}
          name="saPorezon"
          disabled
        />
        <br></br>

        <Button
          className="text-uppercase"
          variant="contained"
          style={{
            maxWidth: "300px",
            textTransform: "uppercase",
            margin: "5px",
            padding: "5px",
          }}
          color="primary"
          type="submit"
        >
          {LocalizeService.translate("COMMON.ACTION_ADD_NEW")}
        </Button>
      </form>
    </div>
  );
};

export default withLocalize(AddRacun);
