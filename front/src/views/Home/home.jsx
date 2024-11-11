import styles from './Home.module.css';
import face from '../../assets/Face.jpeg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.biographyContainer}>
        <div>
          <img className={styles.face} src={face} alt="Dr. Hans Gutermann" />
        </div>
        <p className={styles.biographyText}>
          El Dr. Hans Gutermann nació en 1965 en una pequeña ciudad de Baviera, Alemania. Desde una edad temprana, mostró una inteligencia excepcional y una pasión por el conocimiento. Después de completar la escuela secundaria con honores, fue aceptado en la prestigiosa Universidad de Heidelberg, donde estudió Derecho. Durante sus años universitarios, Hans destacó tanto por su brillantez académica como por su participación en organizaciones estudiantiles y su pasión por el debate. Obtuvo su doctorado en Derecho con una tesis sobre los derechos humanos en el derecho internacional, la cual fue ampliamente aclamada.
        </p>
        <p className={styles.biographyText}>
          <strong>Llegada a México:</strong> Tras su graduación, Hans decidió expandir sus horizontes y buscar nuevas oportunidades en el extranjero. En 1990, se mudó a México, atraído por su rica cultura y el creciente campo legal. En México, conoció a varios abogados prominentes que compartían su visión de justicia y equidad.
        </p>
        <p className={styles.biographyText}>
          <strong>Asociación con abogados mexicanos:</strong> Hans pronto se asoció con abogados mexicanos destacados, con quienes fundó el despacho Gutermann y Asociados. El despacho se especializa en derecho corporativo, civil y penal, y es conocido por su enfoque en casos de derechos humanos y justicia social. Bajo su liderazgo, Gutermann y Asociados se convirtió en un referente en el ámbito jurídico mexicano, ganando notoriedad por su dedicación a la justicia y la excelencia legal.
        </p>
        <p className={styles.biographyText}>
          <strong>Conversión en notario público:</strong> El Dr. Gutermann, con su reputación impecable y su compromiso con la ley, fue reconocido y nombrado notario público en 2000. Esta posición le permitió ampliar su influencia y servir a la comunidad de una manera más directa y significativa. Su despacho ofrece servicios notariales, además de sus ya amplios servicios legales, consolidando su posición como un pilar en la comunidad jurídica.
        </p>
        <p className={styles.biographyText}>
          <strong>Contribuciones y vida personal:</strong> A lo largo de su carrera, Hans ha recibido numerosos premios y reconocimientos por su labor. Ha sido invitado a hablar en conferencias internacionales y ha escrito varios artículos y libros sobre temas legales. Es un hombre de familia, casado con Anna, una periodista de investigación. Tienen dos hijos, Max y Lena. En su tiempo libre, Hans disfruta de la lectura, la música clásica y las caminatas por los paisajes mexicanos.
        </p>
        <p className={styles.biographyText}>
          <strong>Legado:</strong> El Dr. Hans Gutermann es un ejemplo de dedicación y excelencia en el campo del derecho. Su vida y carrera han sido guiadas por un profundo sentido de justicia y una inquebrantable ética de trabajo. A través de su despacho, Gutermann y Asociados, ha dejado una marca indeleble en la comunidad jurídica mexicana y ha mejorado innumerables vidas a través de su compromiso con la verdad y la equidad.
        </p>
      </div>

      <div className={styles.inicioContainer}>
        <p className={styles.pInicio}>
          <strong>Historia de Gutermann y Asociados</strong>
          <br />
          <strong>Fundación y Crecimiento</strong>
          <br />
          Gutermann y Asociados fue fundada en 1990 por el distinguido abogado y notario público, Dr. Hans Gutermann. Proveniente de una familia con una larga tradición en el derecho, Dr. Gutermann se graduó con honores de la Universidad de Heidelberg y decidió llevar su conocimiento y pasión por la justicia a México, un país que siempre había admirado por su rica cultura y diversidad.
          <br />
          Inicialmente, el despacho comenzó como una pequeña oficina en el centro histórico de la ciudad, ofreciendo servicios notariales y asesoría jurídica a la comunidad local. Sin embargo, gracias a la dedicación y profesionalismo del Dr. Gutermann, pronto ganó una sólida reputación por su integridad, ética y eficacia en la resolución de problemas legales complejos.
        </p>
        <p className={styles.pInicio}>
          <strong>Expansión y Diversificación</strong>
          <br />
          A lo largo de los años, Gutermann y Asociados ha crecido significativamente, ampliando su gama de servicios para incluir no solo notarías, sino también derecho corporativo, civil, penal, familiar, y laboral. En 2005, la firma abrió una nueva oficina en una ubicación más accesible y moderna, equipada con tecnología de punta para brindar un servicio aún más eficiente a sus clientes.
          <br />
          El despacho también se ha destacado por su compromiso con la educación y la formación continua. Cada miembro del equipo es alentado a seguir actualizándose en las últimas leyes y regulaciones, asegurando que nuestros clientes siempre reciban el asesoramiento más preciso y actualizado posible.
        </p>
        <p className={styles.pInicio}>
          <strong>Compromiso con la Comunidad</strong>
          <br />
          Gutermann y Asociados no solo se dedica a ofrecer servicios legales de alta calidad, sino que también está profundamente comprometido con la comunidad. El despacho participa regularmente en programas de asistencia legal gratuita y talleres educativos para la población, además de colaborar con diversas organizaciones sin fines de lucro para promover la justicia y el bienestar social.
        </p>
        <p className={styles.pInicio}>
          <strong>Carta de Presentación</strong>
          <br />
          Estimados clientes y amigos,
          <br />
          Es un honor para nosotros darles la bienvenida a Gutermann y Asociados, una firma dedicada a proporcionar soluciones legales integrales con un enfoque en la ética, la profesionalidad y el servicio personalizado.
          <br />
          Desde nuestros humildes comienzos, hemos trabajado incansablemente para construir una reputación basada en la confianza y la excelencia. Cada caso que aceptamos es manejado con la máxima atención al detalle y con un profundo compromiso con la justicia y el bienestar de nuestros clientes.
          <br />
        </p>
        <div className={styles.pInicio}>
          <strong>Nuestros Servicios</strong>
          <ul>
            <li>Notarías: Ofrecemos servicios notariales completos, asegurando que todos los documentos legales sean preparados y autentificados con la mayor precisión.</li>
            <li>Derecho Corporativo: Asesoramos a empresas en todas las áreas del derecho corporativo, desde la constitución de sociedades hasta la resolución de disputas comerciales.</li>
            <li>Derecho Civil: Representamos a nuestros clientes en casos de derecho civil, incluyendo contratos, sucesiones y bienes raíces.</li>
            <li>Derecho Penal: Defendemos los derechos de individuos acusados de delitos, garantizando un juicio justo y una defensa vigorosa.</li>
            <li>Derecho Familiar: Asistimos en casos de divorcio, custodia de hijos y adopciones, siempre con un enfoque en el bienestar de las familias.</li>
            <li>Derecho Laboral: Ofrecemos asesoría tanto a empleadores como a empleados en todas las cuestiones relacionadas con el derecho laboral.</li>
          </ul>
        </div>
        <p className={styles.pInicio}>
          En Gutermann y Asociados, entendemos que cada cliente y cada caso son únicos. Por eso, trabajamos estrechamente con ustedes para desarrollar estrategias legales personalizadas que satisfagan sus necesidades específicas.
          <br />
          Les invitamos a visitar nuestras oficinas y a conocer a nuestro equipo de profesionales altamente capacitados, quienes están listos para ofrecerles el mejor servicio legal posible.
          <br />
          Gracias por confiar en Gutermann y Asociados. Estamos aquí para servirles y para asegurarnos de que sus derechos y sus intereses estén siempre protegidos.
          <br />
          Atentamente,
          <br />
          Dr. Hans Gutermann
          <br />
          Fundador y Director
          <br />
          Gutermann y Asociados
        </p>
      </div>
    </div>
  );
}