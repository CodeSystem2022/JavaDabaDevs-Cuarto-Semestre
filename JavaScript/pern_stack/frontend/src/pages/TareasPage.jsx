import { useEffect } from "react";
import { CardTareas } from "../components/tareas/CardTareas";
import { useTareas } from "../context/TareasContext";

const TareasPage = () => {
  const {tareas , cargarTareas} = useTareas();

  useEffect(() => {
    cargarTareas();
  }, []);

  if (tareas.length === 0) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">{
        tareas.map((tarea) => (
          <CardTareas tarea={tarea} key={tarea.id}/>
        )
        )
      }
      </div>
    )
  }

  return (
    <div>TareasPage</div>
  )
}

export default TareasPage