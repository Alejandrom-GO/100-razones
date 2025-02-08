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
  "Porque cuando me pierdo en tus ojos, olvido todo lo demás.",
  "Porque amo la manera en que te preocupas por los que amas.",
  "Porque cada vez que dices mi nombre, suena más hermoso.",
  "Porque adoro cómo frunces el ceño cuando te concentras.",
  "Porque abrazarte es mi lugar favorito en el mundo.",
  "Porque cuando ríes, iluminas hasta el día más oscuro.",
  "Porque cada pequeño gesto tuyo me recuerda lo afortunado que soy.",
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
  "Porque eres el milagro más hermoso que Dios puso en mi vida,"
"Porque cada día a tu lado es una bendición que no merezco, pero agradezco,"
"Porque cuando me abrazas, siento que estoy en casa,"
"Porque tu risa es la melodía que alegra mis días,"
"Porque eres el mejor regalo que Dios me ha dado,"
"Porque cuando me tomas de la mano, el mundo deja de ser un lugar incierto,"
"Porque en tus ojos veo reflejado el amor de Dios,"
"Porque cada día a tu lado es una nueva oportunidad de ser feliz,"
"Porque Dios te hizo perfecta para mí,"
"Porque tu amor me enseña a confiar en los planes de Dios,"
"Porque cuando estamos juntos, sé que nada es imposible,"
"Porque amo la manera en la que iluminas mi vida sin siquiera intentarlo,"
"Porque cuando me miras con ternura, el tiempo se detiene,"
"Porque Dios puso en mi camino a la persona exacta que necesitaba,"
"Porque cuando oro, siempre le pido a Dios que me permita amarte toda la vida,"
"Porque cada día descubro un nuevo motivo para enamorarme de ti,"
"Porque a tu lado, incluso los días difíciles tienen sentido,"
"Porque cuando me abrazas fuerte, todo mi mundo cobra sentido,"
"Porque cada te amo tuyo es un tesoro que guardo en mi corazón,"
"Porque contigo aprendí que el amor verdadero existe,"
"Porque Dios nos juntó con un propósito maravilloso,"
"Porque tu amor es la respuesta a todas mis oraciones,"
"Porque contigo quiero escribir la historia más hermosa de todas,"
"Porque la dulzura de tu voz me calma en los momentos difíciles,"
"Porque cada detalle tuyo es una prueba del amor que Dios nos tiene,"
"Porque cuando estamos juntos, sé que estoy donde debo estar,"
"Porque cada vez que cierro los ojos, lo único que veo eres tú,"
"Porque Dios nos bendijo con un amor que todo lo puede,"
"Porque tus palabras me dan fuerzas cuando más las necesito,"
"Porque tus abrazos son mi refugio en cualquier tormenta,"
"Porque cuando estamos lejos, mi corazón solo quiere volver a ti,"
"Porque con solo mirarte, sé que Dios ha sido bueno conmigo,"
"Porque cada sacrificio vale la pena si es por nuestro amor,"
"Porque en tu sonrisa veo la promesa de un futuro hermoso,"
"Porque quiero pasar toda mi vida agradeciendo a Dios por ponerte en mi camino,"
"Porque cuando me miras, siento que todo es posible,"
"Porque cada amanecer a tu lado es un nuevo motivo para sonreír,"
"Porque eres la respuesta a mis sueños más profundos,"
"Porque nuestra historia es una prueba de que Dios escribe los mejores guiones,"
"Porque cuando caminas a mi lado, sé que no hay miedo ni duda que nos venza,"
"Porque cuando pronuncio tu nombre, mi corazón late más fuerte,"
"Porque nuestra fe nos mantiene unidos en todo momento,"
"Porque con cada beso tuyo entiendo lo que significa el amor verdadero,"
"Porque Dios nos regaló este amor y quiero honrarlo todos los días,"
"Porque cada vez que sonríes, siento que el cielo se ilumina,"
"Porque en cada uno de tus abrazos encuentro fortaleza,"
"Porque nuestro amor es un reflejo del amor que Dios tiene por nosotros,"
"Porque contigo todo es más fácil, incluso los días difíciles,"
"Porque cuando cierro los ojos y pienso en el futuro, solo te veo a ti,"
"Porque cada instante contigo es un recuerdo hermoso que guardo en mi alma,"
"Porque me haces ver la belleza en las cosas más simples,"
"Porque cuando caminas a mi lado, sé que nunca estaré solo,"
"Porque tus besos son la más dulce de las bendiciones,"
"Porque cada segundo lejos de ti es un segundo perdido,"
"Porque en cada mirada tuya encuentro un te amo sin necesidad de palabras,"
"Porque cuando llueve, lo único que quiero es estar contigo bajo la tormenta,"
"Porque si Dios nos unió, es porque tiene un propósito increíble para nosotros,"
"Porque nuestras diferencias nos hacen más fuertes,"
"Porque con cada paso que damos juntos, construimos algo eterno,"
"Porque amo la forma en la que te preocupas por los demás,"
"Porque Dios me hizo para amarte y cuidar de ti siempre,"
"Porque eres la paz en medio de cualquier tormenta,"
"Porque cuando me miras con amor, todo el mundo desaparece,"
"Porque nuestras almas estaban destinadas a encontrarse,"
"Porque tu voz es mi canción favorita,"
"Porque Dios me mostró su amor al ponerme en tu camino,"
"Porque cada vez que duermes en mis brazos, mi corazón salta de felicidad",
  "Porque quiero escribir cada capítulo de mi vida contigo",
  "Porque cada sacrificio que hago por nosotros vale la pena",
  "Porque tu manera de amar es única y especial",
  "Porque Dios nos da la oportunidad de escribir una historia hermosa",
  "Porque cada detalle tuyo me enamora más y más",
  "Porque quiero pasar el resto de mi vida haciendo que seas feliz",
  "Porque amo ver cómo brillas cuando hablas de algo que te apasiona",
  "Porque eres mi motivación para seguir adelante",
  "Porque tu ternura y amor hacen que cada día valga la pena",
  "Porque eres la prueba de que Dios contesta oraciones",
  "Porque tu paciencia y comprensión son un regalo para mí",
  "Porque no importa qué pase, siempre quiero estar a tu lado",
  "Porque nuestro amor está cimentado en la fe y la confianza",
  "Porque me encanta abrazarte y sentir tu calor",
  "Porque cada te amo tuyo me llena el corazón de felicidad",
  "Porque cuando estamos juntos, el tiempo se detiene",
  "Porque amo lo hermosa que te ves cuando estás distraída",
  "Porque quiero construir un futuro contigo, lleno de amor y bendiciones",
  "Porque tus besos son el mejor regalo que Dios me ha dado",
  "Porque tu existencia hace que mi mundo sea un lugar mejor",
  "Porque Dios nos unió con un propósito y quiero descubrirlo contigo",
  "Porque cada minuto sin ti se siente eterno",
  "Porque me encanta cuando me tomas de la mano",
  "Porque me encanta verte dormir y saber que eres parte de mi vida",
  "Porque tu manera de morderte el labio cuando piensas me encanta",
  "Porque cuando sonríes, el mundo entero se llena de luz",
  "Porque me haces sentir el hombre más afortunado del mundo",
  "Porque nuestros corazones están unidos por algo más grande que nosotros",
  "Porque amo cómo me motivas a luchar por mis sueños",
  "Porque en ti encuentro mi paz y mi hogar",
  "Porque cuando estoy contigo, no necesito nada más",
  "Porque cuando me miras fijamente, el mundo entero desaparece",
  "Porque me encanta escuchar tu risa, es el sonido más hermoso",
  "Porque me haces sentir amado en cada pequeño detalle",
  "Porque a tu lado quiero envejecer y seguir tomándote de la mano",
  "Porque cada detalle tuyo me hace sentir el hombre más afortunado",
  "Porque no hay día en que no agradezca a Dios por ponerte en mi camino",
  "Porque cuando me abrazas, siento que todo tiene sentido",
  "Porque no importa lo que pase, nunca dejaré de luchar por nuestro amor",
  "Porque amo cada pequeña manía tuya, te hace aún más especial",
  "Porque tus caricias me transmiten más amor que mil palabras",
  "Porque cada vez que te miro, sé que quiero estar contigo por siempre",
  "Porque me haces ver la vida de una manera más hermosa",
  "Porque tu amor es mi fortaleza en los momentos difíciles",
  "Porque aunque pasen los años, siempre serás la persona que más amo",
  "Porque al final de todo, siempre te elegiré a ti",
   "Porque cuando sonríes con timidez, me robas el aliento",
  "Porque no importa cuántas veces caigamos, siempre nos levantaremos juntos",
  "Porque me enseñaste a creer en el amor verdadero",
  "Porque cada día contigo es un regalo de Dios",
  "Porque quiero ser la persona que te haga feliz cada día de tu vida",
  "Porque Dios nos ha unido y no dejaré que nada nos separe",
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

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8 transform hover:scale-[1.01] transition-all">
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