/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import '../styles/Testimonio.css';
export const Testimonio = ({ imagen, nombre, pais, ocupacion, empresa, testimonio }) => {
  return (
    <div className="contenedor-testimonio">
        <img src={ imagen } alt={`Foto de ${ nombre }`} className="imagen-testimonio" />
        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">
                <strong>{ nombre }</strong> en { pais }
            </p>
            <p className="cargo-testimonio">
                { ocupacion } en <strong>{ empresa }</strong>
            </p>
            <p className="texto-testimonio">
                "{ testimonio }"
            </p>
        </div>
    </div>
  );
};
