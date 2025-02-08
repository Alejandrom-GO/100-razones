import React, { useState, useEffect } from 'react';
import { Heart, HeartCrack, ChevronLeft, ChevronRight, Stars, Sparkles } from 'lucide-react';

const reasons = [
   "Porque Dios te puso en mi vida como una bendición",
  "Porque tu sonrisa, Xymena, ilumina cada uno de mis días",
  "Porque cuando estoy contigo, el mundo es un lugar más hermoso",
  "Porque nuestro amor vale cada esfuerzo y cada lucha",
  "Porque juntos podemos superar cualquier obstáculo",
  "Porque tu nombre, Xymena, es la palabra más dulce que pronuncio",
  "Porque cada problema que superamos nos hace más fuertes",
  "Porque tu forma de ser me enamora cada día más",
  "Porque cuando me pierdo en tus ojos, olvido todo lo demás",
  "Porque amo la manera en que te preocupas por los que amas",
  "Porque cada vez que dices mi nombre, suena más hermoso",
  "Porque adoro cómo frunces el ceño cuando te concentras",
  "Porque abrazarte es mi lugar favorito en el mundo",
  "Porque cuando ríes, iluminas hasta el día más oscuro",
  "Porque cada pequeño gesto tuyo me recuerda lo afortunado que soy",
  "Porque contigo aprendo a ser mejor persona",
  "Porque nuestros corazones laten en sintonía con el plan de Dios",
  "Porque la forma en que juegas con tu cabello me hipnotiza",
  "Porque cuando pienso en el futuro, solo te veo a ti",
  "Porque cuando te ríes con ganas, es el sonido más hermoso del mundo",
  "Porque cada oración que hago incluye tu nombre",
  "Porque tus ojos son los más hermosos que he visto en mi vida",
  "Porque amo cuando te sonrojas, es lo más tierno del mundo",
  "Porque ver tu felicidad es lo que más me importa",
  "Porque tu voz es la melodía más dulce para mis oídos",
  "Porque cuando me miras, siento que todo está bien",
  "Porque contigo entendí lo que significa el amor verdadero",
  "Porque en tus abrazos encuentro paz y seguridad",
  "Porque me encanta cómo tu piel se eriza cuando te abrazo",
  "Porque cuando tomamos la mano juntos para orar, todo tiene sentido",
  "Porque cada vez que te veo caminar, me enamoro un poco más",
  "Porque me encanta cómo te emocionas por las cosas pequeñas",
  "Porque tus mejillas sonrojadas son lo más tierno que existe",
  "Porque nuestras diferencias nos complementan en la voluntad de Dios",
  "Porque eres mi persona favorita en el mundo",
  "Porque me inspiras a ser mejor cada día",
  "Porque cuando te ríes iluminas todo a tu alrededor",
  "Porque amo la forma en que me miras cuando estás feliz",
  "Porque eres la persona con la que quiero compartir cada bendición",
  "Porque cuando estoy triste, solo necesito un mensaje tuyo para sonreír",
  "Porque el amor que siento por ti solo puede venir de Dios",
  "Porque cuando hablas dormida, me parece lo más adorable del mundo",
  "Porque amo ver cómo te emocionas con las cosas que amas",
  "Porque siempre veo en ti la mujer de mis sueños",
  "Porque cada gesto tuyo me enamora aún más",
  "Porque la forma en que te preocupas por los demás es admirable",
  "Porque tu ternura y dulzura son inigualables",
  "Porque cuando bailas sin darte cuenta, me pareces la persona más linda",
  "Porque eres el milagro más hermoso que Dios puso en mi vida",
  "Porque cada día a tu lado es una bendición que no merezco, pero agradezco",
  "Porque cuando me abrazas, siento que estoy en casa",
  "Porque tu risa es la melodía que alegra mis días",
  "Porque eres el mejor regalo que Dios me ha dado",
  "Porque cuando me tomas de la mano, el mundo deja de ser un lugar incierto",
  "Porque en tus ojos veo reflejado el amor de Dios",
  "Porque cada día a tu lado es una nueva oportunidad de ser feliz",
  "Porque Dios te hizo perfecta para mí",
  "Porque tu amor me enseña a confiar en los planes de Dios",
  "Porque cuando estamos juntos, sé que nada es imposible",
  "Porque amo la manera en la que iluminas mi vida sin siquiera intentarlo",
  "Porque cuando me miras con ternura, el tiempo se detiene",
  "Porque Dios puso en mi camino a la persona exacta que necesitaba",
  "Porque cuando oro, siempre le pido a Dios que me permita amarte toda la vida",
  "Porque cada día descubro un nuevo motivo para enamorarme de ti",
  "Porque a tu lado, incluso los días difíciles tienen sentido",
  "Porque cuando me abrazas fuerte, todo mi mundo cobra sentido",
  "Porque cada 'te amo' tuyo es un tesoro que guardo en mi corazón",
  "Porque contigo aprendí que el amor verdadero existe",
  "Porque Dios nos juntó con un propósito maravilloso",
  "Porque tu amor es la respuesta a todas mis oraciones",
  "Porque contigo quiero escribir la historia más hermosa de todas",
  "Porque la dulzura de tu voz me calma en los momentos difíciles",
  "Porque cada detalle tuyo es una prueba del amor que Dios nos tiene",
  "Porque cuando estamos juntos, sé que estoy donde debo estar",
  "Porque cada vez que cierro los ojos, lo único que veo eres tú",
  "Porque Dios nos bendijo con un amor que todo lo puede",
  "Porque tus palabras me dan fuerzas cuando más las necesito",
  "Porque tus abrazos son mi refugio en cualquier tormenta",
  "Porque cuando estamos lejos, mi corazón solo quiere volver a ti",
  "Porque con solo mirarte, sé que Dios ha sido bueno conmigo",
  "Porque cada sacrificio vale la pena si es por nuestro amor",
  "Porque en tu sonrisa veo la promesa de un futuro hermoso",
  "Porque quiero pasar toda mi vida agradeciendo a Dios por ponerte en mi camino",
  "Porque cuando me miras, siento que todo es posible",
  "Porque cada amanecer a tu lado es un nuevo motivo para sonreír",
  "Porque eres la respuesta a mis sueños más profundos",
  "Porque nuestra historia es una prueba de que Dios escribe los mejores guiones",
  "Porque cuando caminas a mi lado, sé que no hay miedo ni duda que nos venza",
  "Porque cuando pronuncio tu nombre, mi corazón late más fuerte",
  "Porque nuestra fe nos mantiene unidos en todo momento",
  "Porque con cada beso tuyo entiendo lo que significa el amor verdadero",
  "Porque Dios nos regaló este amor y quiero honrarlo todos los días",
  "Porque cada vez que sonríes, siento que el cielo se ilumina",
  "Porque en cada uno de tus abrazos encuentro fortaleza",
  "Porque nuestro amor es un reflejo del amor que Dios tiene por nosotros",
  "Porque contigo todo es más fácil, incluso los días difíciles",
  "Porque cuando cierro los ojos y pienso en el futuro, solo te veo a ti",
  "Porque cada instante contigo es un recuerdo hermoso que guardo en mi alma",
  "Porque me haces ver la belleza en las cosas más simples",
  "Porque cuando caminas a mi lado, sé que nunca estaré solo",
  "Porque tus besos son la más dulce de las bendiciones",
  "Porque cada segundo lejos de ti es un segundo perdido",
  "Porque en cada mirada tuya encuentro un 'te amo' sin necesidad de palabras",
  "Porque cuando llueve, lo único que quiero es estar contigo bajo la tormenta",
  "Porque si Dios nos unió, es porque tiene un propósito increíble para nosotros",
  "Porque nuestras diferencias nos hacen más fuertes",
  "Porque con cada paso que damos juntos, construimos algo eterno",
  "Porque cada día a tu lado es una nueva aventura que quiero vivir.",
  "Porque tu amor me hace sentir que todo es posible.",
  "Porque amo la manera en que iluminas cualquier habitación con tu presencia.",
  "Porque tus palabras siempre traen paz a mi corazón.",
  "Porque contigo aprendí a amar sin miedo.",
  "Porque cuando me tomas de la mano, siento que nada puede derrumbarme.",
  "Porque cada sacrificio por ti vale la pena.",
  "Porque siempre sabes exactamente qué decir cuando lo necesito.",
  "Porque me haces ver la belleza en los pequeños detalles.",
  "Porque tu amor es un refugio en los días difíciles.",
  "Porque me haces sentir orgulloso de la persona en la que me estoy convirtiendo.",
  "Porque cada mirada tuya es una promesa silenciosa de amor eterno.",
  "Porque tienes la risa más contagiosa del mundo.",
  "Porque nunca dejas que me rinda cuando las cosas se ponen difíciles.",
  "Porque tu bondad y generosidad me inspiran cada día.",
  "Porque en cada caricia tuya encuentro ternura infinita.",
  "Porque cuando estamos juntos, no necesito nada más.",
  "Porque cada vez que me abrazas, todo en mi vida cobra sentido.",
  "Porque me encanta compartir mis sueños contigo.",
  "Porque tu voz es mi sonido favorito.",
  "Porque cada día descubro algo nuevo que me enamora de ti.",
  "Porque con solo mirarte, mi corazón se llena de paz.",
  "Porque me haces sentir que soy lo suficientemente bueno tal y como soy.",
  "Porque tu amor me motiva a ser una mejor persona.",
  "Porque amo la forma en que confías en mí.",
  "Porque cuando estamos juntos, todo parece más fácil.",
  "Porque me encanta ver cómo luchas por lo que crees.",
  "Porque tu dulzura es incomparable.",
  "Porque cuando estamos en silencio, nuestro amor sigue hablándonos.",
  "Porque amo cómo cuidas de quienes amas.",
  "Porque cada día contigo es un regalo.",
  "Porque tu amor me da fuerzas cuando más las necesito.",
  "Porque estar a tu lado es mi mayor alegría.",
  "Porque cada beso tuyo es un recordatorio de cuánto me amas.",
  "Porque me haces sentir amado sin necesidad de palabras.",
  "Porque el futuro a tu lado es la mejor historia que quiero escribir.",
  "Porque cuando me miras a los ojos, sé que todo estará bien.",
  "Porque eres mi persona favorita en el mundo.",
  "Porque me haces sentir que juntos podemos con todo.",
  "Porque cada lágrima tuya quiero convertirla en una sonrisa.",
  "Porque me encanta cómo te emocionas por las cosas que amas.",
  "Porque nuestras almas hablan el mismo idioma.",
  "Porque nunca dejas de sorprenderme con tu amor.",
  "Porque tu amor es la melodía más hermosa en mi vida.",
  "Porque contigo aprendí a valorar cada momento.",
  "Porque me haces sentir en casa cuando estoy contigo.",
  "Porque cada promesa tuya sé que es real.",
  "Porque cuando estoy contigo, no hay espacio para la tristeza.",
  "Porque cada error que cometo, lo afrontamos juntos.",
  "Porque siempre sabes cómo hacerme reír.",
  "Porque tu amor me hace sentir seguro.",
  "Porque cuando sueño con el futuro, solo te veo a ti.",
  "Porque eres el abrazo que más necesito al final del día.",
  "Porque cada sonrisa tuya ilumina mi mundo.",
  "Porque me encanta cómo enfrentas los desafíos con valentía.",
  "Porque estar contigo es la mejor decisión que he tomado.",
  "Porque cada minuto sin ti es un minuto perdido.",
  "Porque me encanta cómo nos entendemos sin hablar.",
  "Porque eres mi mayor inspiración.",
  "Porque cada vez que me tocas, mi corazón se acelera.",
  "Porque me haces sentir que soy el hombre más afortunado del mundo.",
  "Porque juntos construimos algo que vale la pena.",
  "Porque cuando dices mi nombre, todo suena más bonito.",
  "Porque me encanta la manera en que me miras cuando crees que no me doy cuenta.",
  "Porque cada reto que enfrentamos nos hace más fuertes.",
  "Porque quiero hacerte feliz todos los días de mi vida.",
  "Porque me encanta cómo confías en Dios en cada paso que das.",
  "Porque nunca te rindes, incluso cuando las cosas son difíciles.",
  "Porque tu forma de ser es única y especial.",
  "Porque quiero despertar a tu lado por el resto de mi vida.",
  "Porque cada momento contigo es una bendición.",
  "Porque el mundo es un lugar mejor desde que estás en mi vida.",
  "Porque me encanta cómo haces que todo sea especial.",
  "Porque me haces creer en los milagros.",
  "Porque nuestra historia de amor es la más hermosa.",
  "Porque me encanta cómo tu voz me calma en los días difíciles.",
  "Porque eres el mejor regalo que Dios me ha dado.",
  "Porque cuando duermes a mi lado, mi corazón descansa en paz.",
  "Porque cada día descubro algo nuevo que me enamora de ti.",
  "Porque nuestra conexión es algo que no se puede explicar.",
  "Porque nunca imaginé que el amor pudiera sentirse así.",
  "Porque me haces querer ser mejor en todo lo que hago.",
  "Porque cada detalle tuyo es perfecto para mí.",
  "Porque cuando bailas sin darte cuenta, me enamoro aún más.",
  "Porque me encanta la forma en que haces que todo sea más bonito.",
  "Porque tu amor es mi mayor fortaleza.",
  "Porque cuando estamos juntos, el tiempo pasa demasiado rápido.",
  "Porque cuando estoy contigo, el mundo entero desaparece.",
  "Porque tu amor me hace sentir que todo tiene sentido.",
  "Porque me encanta cómo siempre encuentras algo positivo en todo.",
  "Porque me haces creer en el amor eterno.",
  "Porque nunca me canso de mirarte.",
  "Porque me encanta cómo encajamos perfectamente.",
  "Porque cada vez que me sonríes, siento que todo está bien.",
  "Porque en tu amor encontré mi verdadero hogar.",
  "Porque me encanta la manera en que me amas sin condiciones.",
    "Porque a tu lado, cada día es un regalo.",
  "Porque tu amor es mi refugio en la tormenta.",
  "Porque cada vez que me miras, el mundo se detiene.",
  "Porque haces que lo simple se vuelva mágico.",
  "Porque tu ternura es infinita.",
  "Porque cuando estamos juntos, todo es perfecto.",
  "Porque amo compartir mi vida contigo.",
  "Porque no imagino un futuro sin ti.",
  "Porque me complementas en todos los sentidos.",
  "Porque cada día me das una nueva razón para sonreír.",
  "Porque tu amor me motiva a seguir adelante.",
  "Porque nuestras almas están conectadas.",
  "Porque tu voz es mi sonido favorito.",
  "Porque me amas tal y como soy.",
  "Porque contigo aprendí a amar de verdad.",
  "Porque nuestras risas son mi melodía favorita.",
  "Porque quiero envejecer a tu lado.",
  "Porque me haces sentir en casa donde sea que estemos.",
  "Porque cuando estoy contigo, todo cobra sentido.",
  "Porque cada abrazo tuyo llena mi alma.",
  "Porque me encanta la forma en que dices mi nombre.",
  "Porque me haces creer en el amor puro.",
  "Porque juntos somos imparables.",
  "Porque nuestra historia es única e irrepetible.",
  "Porque cada día contigo es una nueva aventura.",
  "Porque me haces sentir la persona más afortunada del mundo.",
  "Porque amo la manera en que iluminas mi vida.",
  "Porque eres mi sueño hecho realidad.",
  "Porque me inspiras a ser mejor cada día.",
  "Porque cada beso tuyo es inolvidable.",
  "Porque tu amor es la mayor bendición que tengo.",
  "Porque contigo he encontrado la paz.",
  "Porque nuestro amor es más fuerte que cualquier obstáculo.",
  "Porque tu felicidad es mi felicidad.",
  "Porque estar contigo es lo mejor que me ha pasado.",
  "Porque cada caricia tuya me llena de amor.",
  "Porque tu amor es mi motor para seguir adelante.",
  "Porque juntos creamos recuerdos inolvidables.",
  "Porque me haces sentir amado en todo momento.",
  "Porque nunca me canso de escucharte.",
  "Porque me encanta soñar despierto contigo.",
  "Porque eres la persona con la que siempre quise estar.",
  "Porque haces que cada momento sea especial.",
  "Porque me encanta cuidar de ti.",
  "Porque cuando me sonríes, iluminas mi día.",
  "Porque amo cada detalle de ti.",
  "Porque nuestra conexión es única.",
  "Porque tu amor me da fuerzas.",
  "Porque me encanta compartir mis pensamientos contigo.",
  "Porque cada día contigo es un regalo de Dios.",
  "Porque me das paz cuando todo es caos.",
  "Porque eres mi mayor inspiración.",
  "Porque me amas incluso en mis peores días.",
  "Porque quiero construir un futuro a tu lado.",
  "Porque me encanta verte feliz.",
  "Porque eres la mejor decisión de mi vida.",
  "Porque amo cada uno de nuestros momentos juntos.",
  "Porque siempre sabes cómo animarme.",
  "Porque eres mi persona favorita en el mundo.",
  "Porque a tu lado, todo es más bonito.",
  "Porque contigo todo es más fácil.",
  "Porque tu amor me llena de luz.",
  "Porque nunca me canso de abrazarte.",
  "Porque tu mirada me da calma.",
  "Porque haces que cada día valga la pena.",
  "Porque nunca dejo de aprender de ti.",
  "Porque juntos formamos un gran equipo.",
  "Porque eres mi confidente y mi amor.",
  "Porque me encanta verte brillar.",
  "Porque tu risa es mi sonido favorito.",
  "Porque amo nuestra complicidad.",
  "Porque estar contigo es como un sueño del que no quiero despertar.",
  "Porque siempre tienes las palabras justas.",
  "Porque me encanta verte dormir a mi lado.",
  "Porque me das razones para creer en el amor.",
  "Porque tu amor es lo mejor que me ha pasado.",
  "Porque eres mi paz en medio de la tormenta.",
  "Porque cada día me demuestras cuánto me amas.",
  "Porque eres la mejor parte de mi vida.",
  "Porque me haces sentir completo.",
  "Porque me encanta cómo cuidas de mí.",
  "Porque haces que el tiempo pase volando.",
  "Porque cada día descubro algo nuevo de ti.",
  "Porque me das fuerzas cuando siento que no puedo más.",
  "Porque tu amor me hace libre.",
  "Porque amo la forma en que me miras.",
  "Porque cada instante contigo es valioso.",
  "Porque me haces sentir especial.",
  "Porque me encanta compartir mis días contigo.",
  "Porque eres el amor de mi vida.",
  "Porque estar contigo es mi lugar favorito.",
  "Porque me das más razones para amar la vida.",
  "Porque eres lo mejor que me ha pasado.",
  "Porque nuestro amor es inquebrantable.",
  "Porque cada detalle tuyo me enamora más.",
  "Porque quiero vivir cada día de mi vida contigo.",
  "Porque sin ti, nada sería igual."
];




const loveQuotes = [
  "El amor verdadero no se rinde ante las dificultades",
  "Cada obstáculo es una oportunidad para demostrar nuestro amor",
  "Juntos, todo es posible",
  "El amor que siento por ti es más fuerte que cualquier problema",
  "Eres la mayor bendición que Dios ha puesto en mi vida",
  "Nuestro amor es como un faro en la tormenta: siempre brilla",
  "Cuando dos corazones se aman de verdad, no hay imposibles",
  "Dios nos unió con un propósito y siempre lucharé por nuestro amor",
  "El amor es paciente, el amor es bondadoso, y así quiero amarte siempre",
  "No importa cuán difícil sea el camino, mientras estés a mi lado todo valdrá la pena"
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNoReasons, setShowNoReasons] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }, 9000); // Cambia cada 30 segundos
  
    return () => clearInterval(interval);
  }, []);

  const nextReason = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prevReason = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1
            }}
          >
            <Heart className="text-pink-600 w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="title text-5xl font-bold text-pink-600 mb-8 filter drop-shadow-lg">
              Para Mi Amada Xymena
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Stars className="text-pink-500" />
              <p className="body text-3xl text-gray-600 italic">
                {loveQuotes[currentQuote]}
              </p>
              <Stars className="text-pink-500" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={prevReason}
                className="p-3 hover:bg-pink-100 rounded-full transition-all transform hover:scale-110"
              >
                <ChevronLeft className="text-pink-600 w-6 h-6" />
              </button>
              <div className="lead text-2xl font-semibold text-pink-600 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Razón #{currentIndex + 1}</span>
                <Sparkles className="w-5 h-5" />
              </div>
              <button
                onClick={nextReason}
                className="p-3 hover:bg-pink-100 rounded-full transition-all transform hover:scale-110"
              >
                <ChevronRight className="text-pink-600 w-6 h-6" />
              </button>
            </div>

            <div className="text-center p-8 min-h-[200px] flex items-center justify-center bg-pink-50/50 rounded-lg">
              <p className="body text-4xl text-gray-700 leading-relaxed">
                {reasons[currentIndex]}
              </p>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              <Heart className="text-pink-600 w-10 h-10 animate-pulse" />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowNoReasons(!showNoReasons)}
              className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <HeartCrack className="text-pink-600 w-6 h-6" />
                <span className="lead text-gray-700 text-lg">Razones para rendirse</span>
              </div>
            </button>

            {showNoReasons && (
              <div className="mt-6 p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-md transform hover:scale-[1.01] transition-all">
                <p className="title text-xl text-gray-700 leading-relaxed">
                  Mi querida Xymena, no existe ninguna razón para rendirme. 
                  Cada obstáculo que enfrentamos solo fortalece mi amor por ti. 
                  Quiero demostrarte cada día lo mucho que significas para mí y 
                  lo dispuesto que estoy a luchar por nuestro amor. Juntos podemos 
                  superar cualquier dificultad, porque nuestro amor es más fuerte 
                  que cualquier problema.
                </p>
                <div className="flex justify-center mt-4">
                  <Heart className="text-pink-600 w-8 h-8 animate-bounce" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
