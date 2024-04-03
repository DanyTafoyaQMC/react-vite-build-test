import { Testimonio } from './components/Testimonio';
import { Testimonios } from './data/index';
import './styles/UserList.css';

export const UserList = () => {
  return (
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
        { Testimonios.map( testimonio =>{
            return (
              <Testimonio key={testimonio.id} {...testimonio} />
            );
          })
        }
      </div>
  );
};
