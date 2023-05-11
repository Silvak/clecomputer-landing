import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Card = (props) => {
  return (
    <div className="relative flex flex-wrap justify-center items-center w-full h-min mb-12 md:mb-8">
      <div className="w-[60px] h-[60px]  sm:w-[16%] sm-2 mb-2 sm:mb-0">
        <img
          src={`/img/a${props.img}.png`}
          alt="fjords"
          className="w-full h-full object-top object-scale-down"
        />
      </div>
      <div className="pl-2  w-full  sm:w-[84%]">
        <h4 className="text-md font-bold text-center sm:text-left">
          {props.title}
        </h4>
        <p className="mt-2 text-[.8em] text-gray-600">{props.content}</p>
      </div>
    </div>
  );
};

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className="text-white text-sm px-4 py-3 mt-6 rounded-[50px] border-2 transition duration-150 ease-in-out border-orange-500 hover:bg-orange-500 hover:text-white"
    >
      {label}
    </Link>
  );
};

function App() {
  const [msg, setMsg] = useState("");
  const [sended, setSended] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const resetMsg = () => {
    setSended(false);
    setMsg("");
  };
  const send = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || company == "" || phone == "") {
      setMsg("Todos los campos son obligatorios");
      setSended(true);
      setTimeout(resetMsg, 2400);
    } else {
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setMessage("");

      setMsg("El mensaje se envio correctamente");
      setSended(true);
      setTimeout(resetMsg, 2400);
    }
  };

  function onEmailClick() {
    window.open(`mailto:${email}`);
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <>
              <div className="bg-white">
                {/*##############  NAVBAR ##############*/}
                <nav className="absolute top-0 lef-0 w-[100%] h-20  z-50">
                  <div className="w-full h-full px-8 md:px-16 flex items-center justify-between">
                    <div className="text-white   w-[20%] font-bold">
                      <p className="w-full text-md text-lg">CLEVERS</p>
                    </div>
                    <div className="w-[80%] h-full flex justify-end items-center">
                      <li className="list-none  mt-2 gap-y-2 h-8 sm:gap-y-2 sm:mt-0 sm:h-auto w-full pl-8 flex flex-wrap justify-end gap-x-2 md:gap-x-4  text-sm">
                        <a
                          href="#services"
                          className="text-white hover:text-orange-500"
                        >
                          SERVICIOS
                        </a>
                        <a
                          href="#soluciones"
                          className="text-white hover:text-orange-500"
                        >
                          SOLUCIONES
                        </a>
                        <a
                          href="#team"
                          className="text-white hover:text-orange-500"
                        >
                          EQUIPO
                        </a>
                        <a
                          href="#outsourcing"
                          className="text-white hover:text-orange-500"
                        >
                          OUTSOURCING
                        </a>
                        <a
                          href="#contact"
                          className="text-white hover:text-orange-500"
                        >
                          CONTACTO
                        </a>
                      </li>
                    </div>
                  </div>
                </nav>

                {/*##############  BOTON SCROLLTOP ##############*/}
                <ScrollToTop
                  smooth
                  className="p-0 m-0 h-12 w-12 bg-orange-500 shadow-xl rounded-[50px] flex justify-center items-center"
                />

                {/*##############  IMAGEN PORTADA ##############*/}
                <div
                  id="inicio"
                  className="flex md:justify-center items-center relative w-full h-[100vh]"
                >
                  <img
                    src="https://www.chetu.com/img/services/services-main-page/sliderbg/services-banner.png"
                    alt="fjords"
                    className="w-full h-full absolute object-cover"
                  />
                  <div className="flex flex-wrap justify-center absolute w-[100%] h-min  md:w-[70%] px-4 md:px-0">
                    <h1 className="text-4xl font-bold text-center text-white">
                      SERVICIOS DE DESARROLLO DE SOFTWARE PERSONALIZADO
                    </h1>

                    <a
                      href="#contact"
                      className="text-white hover:text-white w-[100%] flex justify-center"
                    >
                      <button className="border-2 text-lg transition max-w-[450px]  duration-150 ease-in-out border-orange-500 mt-10 px-6 py-2 rounded-[50px] w-full hover:bg-orange-500">
                        Solicite una consulta
                      </button>
                    </a>
                  </div>
                </div>

                {/*##############  PORTADA ##############*/}
                <article
                  id="services"
                  className="flex flex-wrap justify-center w-full text-black px-[8%] mt-20"
                >
                  <div className="w-full flex justify-center mb-16">
                    <div className="flex flex-wrap justify-center w-full">
                      <h3 className="text-center mb-6 font-bold text-xl lg:w-[62%]">
                        Servicios de desarrollo de software personalizado.
                        Contamos con desarrolladores expertos, y con vasta
                        experiencia en industrias específicas
                      </h3>
                      <p className="text-center text-sm lg:w-[78%]">
                        En Clevers desarrollamos software y aplicaciones de
                        clase mundial para startups, pequeñas y medianas
                        empresas (PYMES), y grandes corporaciones.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pr-8">
                    <img
                      src="https://www.chetu.com/img/services/migration/content-images/automate-your-database-migrations.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>

                  <div className="flex flex-wrap w-full lg:w-[50%]">
                    <Card
                      title="Desarrollo Web Personalizado"
                      img={1}
                      content="Nuestras soluciones de desarrollo web facilitan los flujos de trabajo, aumentan los ingresos y optimizan las operaciones comerciales"
                    />
                    <Card
                      title="Implementación y Despliegue"
                      img={2}
                      content="Diseñamos un plan de implementación y despliegue de software a profundidad, evaluando las necesidades de su empresa, para así brindar tecnologías mejoradas a los usuarios finales."
                    />
                    <Card
                      title="Desarrollo de API"
                      img={3}
                      content="Desarrollamos APIs confiables, bien documentadas y fáciles de consumir que permiten integraciones flexibles y personalización de productos de software existentes."
                    />
                    <Card
                      title="Integración de Sistemas"
                      img={4}
                      content="Nuestros ingenieros de integración de software adoptan nuevas tecnologías y procesos para superar posibles desafíos, desde el diseño arquitectónico hasta las pruebas y la ejecución."
                    />
                  </div>
                </article>

                {/*##############  PORTADA 2 ##############*/}
                <article className="flex flex-wrap justify-center w-full text-black px-[8%] mt-20">
                  <div className="flex flex-wrap w-full lg:w-[50%]   mt-12 lg:mt-0 order-2 lg:order-1">
                    <Card
                      title="Desarrollo de Aplicaciones Personalizadas"
                      img={5}
                      content="Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables."
                    />
                    <Card
                      title="Mantenimiento de Aplicaciones"
                      img={6}
                      content="Nuestros servicios de mantenimiento y modernización de aplicaciones están diseñados para garantizar la escalabilidad, el rendimiento y la sostenibilidad de toda su infraestructura de software."
                    />
                    <Card
                      title="Integraciones de API"
                      img={7}
                      content="Creamos API personalizadas para todas las clases de aplicaciones, agregando funcionalidad a sus sistemas de software y facilitando la comunicación entre sus aplicaciones y de terceros."
                    />
                    <Card
                      title="Diseño de UX/UI"
                      img={8}
                      content="Aproveche las últimas tecnologías, arquitecturas y tendencias de UI / UX para diseñar aplicaciones receptivas y escalables que transforman las experiencias de los clientes a través de múltiples canales."
                    />
                  </div>
                  <div className="w-full h-[48vh]  md:h-[380px] lg:h-[20%] lg:w-[50%] lg:pl-8 order-1 lg:order-2">
                    <img
                      src="https://www.chetu.com/img/solutions/wearables/content-images/wearable-device-app-Integration.png"
                      alt="fjords"
                      className="w-full h-full object-top object-scale-down"
                    />
                  </div>
                </article>

                {/*############## GESTION PRODUCTO ##############*/}
                <article
                  id="soluciones"
                  className="flex flex-wrap justify-center w-full text-black px-[8%] mt-20 py-16 bg-slate-100"
                >
                  <div className="w-full flex justify-center mb-16">
                    <div className="flex flex-wrap justify-center w-full">
                      <h3 className="text-center mb-6 font-bold text-md lg:w-[62%] text-2xl">
                        Gestión del Ciclo de Vida del Producto
                      </h3>
                      <p className="text-center text-sm lg:w-[68%]">
                        Nuestro modelo ágil de gestión del ciclo de vida del
                        producto de extremo a extremo cubre todo, desde la
                        conceptualización, la codificación simultánea de
                        front-end y back-end, implementación, control de calidad
                        y más.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pr-8">
                    <img
                      src="https://www.chetu.com/img/services/migration/content-images/product-lifecycle-management.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>
                  <div className="flex flex-wrap w-full lg:w-[50%]">
                    <Card
                      title="Servicios de Prueba de Software"
                      img={9}
                      content="Brindamos servicios integrales de pruebas de calidad de software para brindar soluciones y aplicaciones de software de gran valor y alineadas de manera ágil."
                    />
                    <Card
                      title="IMigraciones y Actualizaciones de Datos"
                      img={10}
                      content="Realizamos migraciones de datos en la nube, actualizaciones del sistema y otros servicios vitales de modernización de software, dando importancia al tiempo de actividad del sistema y la integridad de los datos."
                    />
                    <Card
                      title="Servicios de Soporte SLA"
                      img={11}
                      content="Cumplimos con sus Acuerdos de Nivel de Servicio SLA contratados, garantizando el cumplimiento del acuerdo y asegurando un seguimiento, informes y gestión óptimos de sus servicios acordados."
                    />
                  </div>

                  <div className="w-full h-20"> </div>

                  <div className="flex flex-wrap w-full lg:w-[50%] order-4 lg:order-3">
                    <Card
                      title="Servicios de Seguridad de TI"
                      img={12}
                      content="Nuestras exhaustivas auditorías de amenazas nos ayudan a identificar las vulnerabilidades más críticas de su infraestructura, lo que nos permite implementar los cifrados y protocolos que necesita."
                    />
                    <Card
                      title="Copia de Seguridad de Datos y Recuperación ante Desastres"
                      img={13}
                      content="Implementamos estrategias sólidas de respaldo y recuperación de datos para servidores basados en la nube, locales e híbridos diseñados para garantizar la integridad de los datos y la continuidad del negocio."
                    />
                    <Card
                      title="Servicios de soporte de infraestructura"
                      img={14}
                      content="Brindamos soporte integral de infraestructura de TI, incluida la administración de la mesa de ayuda, mensajería personalizada y colaboración, administración de redes y servicios de administración de sistemas."
                    />
                  </div>
                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pl-8 order-3 lg:order-4">
                    <img
                      src="https://www.chetu.com/img/services/software-security/content-images/unique-threat-prevention-strategies.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>
                </article>

                {/*##############  CONTRATOS ##############*/}
                <article
                  id="team"
                  className="flex flex-wrap justify-center w-full text-black px-[8%] mt-16 py-8 "
                >
                  <div className="w-full flex justify-center mb-16">
                    <div className="flex flex-wrap justify-center w-full">
                      <h3 className="text-center mb-6 font-bold text-md text-2xl lg:w-[62%]">
                        Nuestro equipo está formado por desarrolladores senior
                      </h3>
                      <p className="text-center text-sm lg:w-[68%]">
                        Contamos con más de 200 desarrolladores en 3 países, con
                        muchos años de experiencia combinada en el desarrollo de
                        software, en una amplia gama de industrias.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pr-8">
                    <img
                      src="https://www.chetu.com/img/services/migration/content-images/automate-your-database-migrations.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>
                  <div className="flex flex-wrap w-full lg:w-[50%]">
                    <Card
                      title="Comunicación en Tiempo Real"
                      img={2}
                      content='Nuestros desarrolladores trabajan dentro de la zona horaria de nuestros clientes para permitir la colaboración en tiempo real. Trabajamos para lograr una verdadera sensación de "presencia en sucursal". Infundimos responsabilidad y transparencia en nuestro modelo de negocio con informes regulares de gestión y progreso.'
                    />
                    <Card
                      title="Modelo de Negocios Escalable"
                      img={3}
                      content="Trabajamos con usted para encontrar las áreas que mejor se adapten a brindarle valor. Según sus necesidades, nuestro modelo de negocio flexible le brinda la opción de aumentar o disminuir el tamaño de su equipo dedicado en cualquier momento del ciclo de vida del proyecto."
                    />
                    <Card
                      title="El Código Fuente le Pertenece"
                      img={4}
                      content="La mayoría de las empresas de software insisten en poseer sus propios códigos fuente para evitar que sus clientes busquen otros proveedores o herramientas. Según nuestro acuerdo, usted es el único propietario del código fuente y de la propiedad intelectual."
                    />
                  </div>
                </article>

                {/*############## LENGUJAES DE PROGRAMACION ##############*/}
                <article
                  id="outsourcing"
                  className="flex flex-wrap justify-center w-full text-black px-[8%] mt-20 py-16 bg-slate-100"
                >
                  <div className="flex flex-wrap w-full h-min lg:w-[50%] order-2 lg:order-1">
                    <h3 className="mb-6 font-bold text-2xl">
                      Contrate Desarrolladores Expertos en Programación
                    </h3>
                    <p className="text-sm">
                      Nuestros desarrolladores de software altamente
                      experimentados tienen un conocimiento profundo de cómo
                      aprovechar los mejores lenguajes de programación, marcos y
                      otras herramientas de desarrollo de software para crear la
                      solución ideal para su negocio.
                    </p>

                    <div className="w-full lg:w-[50%] mt-6">
                      <h4 className="font-bold">Lenguajes de Programación</h4>
                      <li className="list-none mt-2">
                        <p>◉ Java</p>
                        <p>◉ JavaScript</p>
                        <p>◉ Python</p>
                        <p>◉ C#</p>
                      </li>
                    </div>

                    <div className="w-full lg:w-[50%] mt-6 order">
                      <h4 className="font-bold">Marcos</h4>
                      <li className="list-none mt-2">
                        <p>◉ Angular</p>
                        <p>◉ Ruby on Rails</p>
                        <p>◉ ASP.NET</p>
                        <p>◉ React</p>
                      </li>
                    </div>
                  </div>

                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pl-8 order-1 lg:order-2">
                    <img
                      src="https://www.chetu.com/img/services/migration/content-images/hire-developers-with-programming-expertise.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>
                </article>

                {/*##############  SERVICIOS DE DESARROLLO ##############*/}
                <article className="flex flex-wrap justify-center w-full text-black px-[8%] mt-20">
                  <div className="w-full flex justify-center mb-16">
                    <div className="flex flex-wrap justify-center w-full">
                      <h3 className="text-center mb-6 font-bold text-xl lg:w-[62%]">
                        Soluciones de Software Personalizadas
                      </h3>
                      <p className="text-center lg:w-[78%]">
                        Aumente su equipo de desarrollo existente para completar
                        un gran proyecto o crear una nueva solución de software
                        o aplicación desde cero con Clevers.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pr-8">
                    <img
                      src="https://www.chetu.com/img/on-demand-developers/cobol/content-images/chetus-cobol-development-product-integrations.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>

                  <div className="flex flex-wrap w-full lg:w-[50%]">
                    <Card
                      title="Soluciones de gestión de relaciones con el cliente (CRM)"
                      img={2}
                      content="Nuestros ingenieros y desarrolladores de software crean soluciones de CRM personalizadas que se adaptan mejor a los objetivos comerciales, instalando y migrando plataformas líderes en la industria, como Salesforce, SugarCRM, Microsoft Dynamics, SAP y más para una integración de CRM perfecta."
                    />
                    <Card
                      title="Soluciones de Planificación de Recursos Empresariales (ERP)"
                      img={3}
                      content="Desarrollamos soluciones de ERP personalizadas renovando las soluciones existentes o desarrollando sistemas ERP desde cero, diseñados para cubrir funciones comerciales centrales, incluida la gestión de inventario y distribución, producción, contabilidad y más."
                    />
                    <Card
                      title="Soluciones de Procesamiento de Pago y Punto de Venta"
                      img={4}
                      content="Nuestros programadores de punto de venta (POS) integran a la perfección soluciones líderes en la industria y terminales POS, incluidos Clover, Verifone, Ingenico, Stripe, Worldpay y más, en sus sistemas comerciales para permitir transacciones de pago fáciles."
                    />
                    <Card
                      title="AI & Soluciones de Conectividad de IA e IoT"
                      img={4}
                      content="Programamos e integramos software y firmware integrados en una gran cantidad de dispositivos IoT y M2M impulsados por inteligencia artificial, incluidos equipos domésticos inteligentes, electrónica de consumo, tecnologías portátiles, mecanismos de automatización industrial (IIoT) y más."
                    />
                  </div>
                </article>

                {/*##############  DESARROLLADORES ##############*/}
                <article className="flex flex-wrap justify-center w-full text-black px-[8%] mt-20 py-16 bg-slate-100">
                  <div className="flex flex-wrap w-full h-min lg:w-[50%] order-2 lg:order-1">
                    <h3 className="mb-6 font-bold text-2xl">
                      Nuestros Desarrolladores son Expertos en Multiples
                      Industrias
                    </h3>
                    <p className="text-sm">
                      Nuestro equipo dedicado de más de 2200 desarrolladores
                      internos tiene una amplia experiencia específica en varias
                      industrias, en la creación de aplicaciones y soluciones de
                      software personalizadas.
                    </p>
                    <div className="w-full lg:w-[50%] mt-6">
                      <h4 className="font-bold">Lenguajes de Programación</h4>
                      <li className="list-none mt-2">
                        <p>◉ Java</p>
                        <p>◉ JavaScript</p>
                        <p>◉ Python</p>
                        <p>◉ C#</p>
                      </li>
                    </div>

                    <div className="w-full lg:w-[50%] mt-6">
                      <h4 className="font-bold">Marcos</h4>
                      <li className="list-none mt-2">
                        <p>◉ Angular</p>
                        <p>◉ Ruby on Rails</p>
                        <p>◉ ASP.NET</p>
                        <p>◉ React</p>
                      </li>
                    </div>
                  </div>

                  <div className="w-full mb-16 lg:mb-0 lg:w-[50%]  md:px-[10%] lg:px-0 lg:pl-8 order-1 lg:order-2">
                    <img
                      src="https://www.chetu.com/img/payments/gateway/img-content/custom-payment-gateway-solutions.png"
                      alt="fjords"
                      className="w-full object-containt"
                    />
                  </div>
                </article>

                {/*##############  CONTACTO ##############*/}
                <article
                  id="contact"
                  className="flex flex-wrap justify-center w-full text-black px-[8%] pt-20 pb-16 bg-cyan-600 "
                >
                  <h3 className="w-full font-bold text-2xl text-white text-center mb-4">
                    Contáctenos
                  </h3>
                  <p className="w-full sm:w-[80%] text-center text-sm text-white">
                    Envíenos un mensaje o llámenos sobre nuestros servicios de
                    desarrollo de software personalizados. Nos encantaría saber
                    de usted y responder cualquier pregunta.
                  </p>

                  <form
                    onSubmit={send}
                    className="flex flex-wrap justify-center w-[80%] mt-20"
                  >
                    <div className="flex flex-wrap w-full  md:w-[50%] md:pr-8 gap-4">
                      <div className="flex flex-wrap justify-between items-center w-full">
                        <p className="w-[100%] pr-8 text-white text-sm mb-1 ">
                          Nombre
                        </p>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="nombre"
                          value={name}
                          className=" h-4 w-[100%] py-4 pl-3 pr-3  border bg-white rounded-full focus:border-blue-200  outline-none"
                          required
                          onChange={(name) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>
                      <div className="flex flex-wrap justify-between items-center w-full">
                        <p className="w-[100%] pr-8 text-white text-sm mb-1 ">
                          Email
                        </p>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="email"
                          value={email}
                          className=" h-4 w-[100%] py-4 pl-3 pr-3  border bg-white rounded-full focus:border-blue-200  outline-none"
                          required
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                      <div className="flex flex-wrap justify-between items-center w-full">
                        <p className="w-[100%] pr-8 text-white text-sm mb-1 ">
                          Teléfono
                        </p>
                        <input
                          id="phone"
                          type="text"
                          name="phone"
                          placeholder="teléfono"
                          value={phone}
                          className=" h-4 w-[100%] py-4 pl-3 pr-3  border bg-white rounded-full focus:border-blue-200  outline-none"
                          required
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-start w-full  md:w-[50%] mt-4 md:mt-0 gap-4">
                      <div className="flex flex-col justify-between items-start w-full">
                        <p className="w-[100%] pr-8 text-white text-sm mb-1 ">
                          Empresa
                        </p>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          placeholder="empresa"
                          value={company}
                          className=" h-4 w-[100%] py-4 pl-3 pr-3  border bg-white rounded-full focus:border-blue-200  outline-none"
                          required
                          onChange={(event) => {
                            setCompany(event.target.value);
                          }}
                        />
                      </div>
                      <div className="flex flex-wrap justify-between items-center w-full">
                        <p className="w-[100%] pr-8 text-white text-sm mb-1 ">
                          Mensage
                        </p>
                        <textarea
                          style={{ resize: "none" }}
                          name="textarea"
                          rows="4"
                          cols="50"
                          value={message}
                          className=" h-max w-[100%] py-2 pl-3 pr-3  border bg-white rounded-xl focus:border-blue-200  outline-none"
                          required
                          onChange={(event) => {
                            setMessage(event.target.value);
                          }}
                        >
                          Write something here
                        </textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="text-white border-2 text-lg transition max-w-[350px]  duration-150 ease-in-out border-orange-500 mt-12 px-6 py-1 rounded-[50px] w-full hover:bg-orange-500"
                    >
                      Solicite una consulta
                    </button>
                    <div className="w-full">
                      {sended == true ? (
                        <div className="w-full h-6 text-center text-blue-200 text-sm mt-8">
                          {msg}
                        </div>
                      ) : (
                        <div className="w-full h-6 text-center text-blue-200 text-sm mt-8">
                          {msg}
                        </div>
                      )}
                    </div>
                  </form>
                </article>

                {/*##############  FOTEER ##############*/}
                <footer className="w-full py-3 bg-slate-300 flex flex-wrap justify-center">
                  <p className="text-center w-full text-gray-700 text-[.82em] font-bold mb-1">
                    Nuestras Oficinas
                  </p>
                  <p className="text-center sm:w-full text-[.8em] text-gray-700 mb-1 w-[80%]">
                    Madrid | Barcelona | Pontevedra | Las Palmas | Londres |
                    Nueva York
                  </p>
                  <p className="text-center w-full text-[.8em] text-gray-700">
                    CLEVERS © 2021-2022. Todos los derechos reservados.
                  </p>
                </footer>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

/*
<ButtonMailto
                    label="CONSIGA DESARROLLADORES"
                    mailto="mailto:info@synergiart.com"
                  />
*/
