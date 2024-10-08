import GenericForm from "../../../components/GenericForm";

// Componente de Registro de Ayudante
export default function RegisterExchanger() {
    const campos = [
      { nombre: 'nombre', etiqueta: 'Nombre', tipo: 'text' },
      { nombre: 'apellido', etiqueta: 'Apellido', tipo: 'text' },
      { nombre: 'dni', etiqueta: 'DNI', tipo: 'text' },
      { nombre: 'telefono', etiqueta: 'Teléfono', tipo: 'tel' },
      { nombre: 'email', etiqueta: 'Email', tipo: 'email' },
      { nombre: 'contraseña', etiqueta: 'Contraseña', tipo: 'password' },
    ];
  
  return <GenericForm id="register-exchanger" campos={campos} />;
}