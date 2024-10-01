let id: number = 1; // Inicia el id del usuario quemado en 1

const setID = () => {
  // Establece el ID predeterminado del usuario quemado
  const localId = getItem('uuid', true);
  id = localId != null ? parseInt(localId) : 1; // Usa 'uuid' si está disponible, si no, usa 1
  setItem('uuid', id.toString(), true); // Guarda el 'uuid' actualizado en el sessionStorage
}

const getKey = (key: string) => {
  return id != null ? `${id.toString()}_${key}` : key;
}

const setItem = (key: string, value: string, force?: boolean) => {
  // Guarda el valor en el sessionStorage con la clave generada
  sessionStorage.setItem(force ? key : getKey(key), value);
}

const getItem = (key: string, force?: boolean) => {
  // Recupera el valor del sessionStorage
  const value = sessionStorage.getItem(force ? key : getKey(key));
  return value;
}

const removeItem = (key: string) => {
  // Elimina el item del sessionStorage con la clave generada
  sessionStorage.removeItem(getKey(key));
}

export { setID, setItem, getItem, removeItem }
