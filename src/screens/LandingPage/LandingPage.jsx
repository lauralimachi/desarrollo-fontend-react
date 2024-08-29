
const LandingPage = () => {
    return (
        <>
            <div className="pageheader">
                <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </div>
            <div className="pagebody">
                <h2>Bienvenido</h2>
                <hr />
                <p>Este modulo se centra en el uso de <b>React, </b>
                incluyebdo la creacion  de <b>componentes, </b>
                el manejo de <b>hooks</b> y el use de <b>Redux.</b>
                </p>
                <h2>Temas Cubiertos</h2>
                <hr />
                <div>
                    <ul>
                        <li>Componentes funcionales y de clase</li>
                        <li>Uso de <b>React hooks</b> como (useState, useEffect)</li>
                        <li>Creación de <b>custom hooks</b> como useForm</li>
                        <li>Gestion de variables de estado con <b>useState</b></li>
                        <li>Gestion de estado global con <b>Redux</b></li>
                        <li>Integracion de <b>Redux</b> con React</li>
                        <li>Manejo de formularios en <b>React</b></li>
                        <li>publicando nuestra <b>pagina</b> con <b>GitHub Pages</b></li>
                    </ul>
                </div>
                
                <h2>Recursos Adicionales</h2>
                <hr />
                <p>Para profundizar en los temas cubietos, consulta los siguientes recursos</p>
                <footer >@ 2024 Modulo 7. USIP.</footer>
            </div>
        </>

    );
};

export default LandingPage;