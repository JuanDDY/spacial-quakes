import './Home.css'; // Asegúrate de crear este archivo CSS para aplicar los estilos

function Home() {
  return (
    <div className="home-container">
      {/* Contenedor de título centrado */}
      <div className="titulo-container">
        <h1>Explora y detecta sismos en otros mundos</h1>
      </div>

      {/* Contenedor de imágenes centrado */}
      <div className="centro-imagen">
        <img src="imagesHome/marte.png" alt="Marte" className="marte-img" />
        <img src="imagesHome/luna.png" alt="Luna" className="luna-img" />
        <img src="imagesHome/astronauta.png" alt="Astronauta" className="astronauta-img" />
      </div>

      {/* Botón centrado */}
      <div className="boton-container">
        <button className="boton-mision">Empezar misión</button>
      </div>

      {/* Texto en la parte inferior derecha */}
      <div className="seisminds-text">
        SEISMinds
      </div>
    </div>
  );
}

export default Home;
