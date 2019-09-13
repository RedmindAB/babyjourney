type WeekArticle = {
  context: string
  sections: string[]
}

type WeekArticleContainer = {
  week: number
  categories: WeekArticle[]
}

// {
//   week: 1,
//   categories: [
//     {
//       context: 'baby',
//       sections: [
//         ""
//       ]
//     },
//     {
//       context: 'Mother',
//       sections: [
//         ""
//       ]
//     },
//     {
//       context: 'Partner',
//       sections: [
//         ""
//       ]
//     }
//   ]
// }

const weekArticles: WeekArticleContainer[] = [
  {
    week: 1,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Det är inte helt lätt att veta att du är gravid i vecka 1,2 och 3. En förutsättning för att du ska kunna bli gravid är att det finns ett ägg att befrukta, något som sker vid ägglossning. Vid ägglossning fångas ägget upp av äggledaren och denna process sker vanligtvis 12–16 dagar före nästa mens. Vid befruktning möter mannens spermier kvinnans ägg uppe i den ena äggledaren, en av spermierna kommer att ta sig in i ägget först och vinna tävlingen. Det befruktade ägget kommer att vandra ned mot livmodern och fästa sig där – grattis, ni är gravida! Du kan redan nu känna ömmande bröst, illamående och ihållande smärta i magen som liknar den som många kvinnor känner innan sin menstruation.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Dina graviditetsveckor räknas från första dagen av din senaste menstruation före graviditeten. Vilket är ungefär två veckor före den faktiska befruktningen sker. Om du är en person som har mens väldigt regelbundet och får ett positivt testresultat på graviditetstestet (första dagen mensen uteblir), betyder det alltså att du redan är i vecka 4, trots att graviditeten endast är i vecka 2+0. Det innebär vanligtvis att den faktiska graviditeten är 38 veckor även fast man brukar prata om en graviditet i 40 veckor.',
          'Ungefär i vecka 4 har moderkakan producerat tillräckligt mycket av hormonet ”HCG” för att du ska kunna mäta det i urinet med ett vanligt graviditetstest. På apoteket finns det även dyrare graviditetstest som kan ge dig en uppskattning om vilken graviditetsvecka du befinner dig i för tillfället. Däremot är testen begränsade till att visa svar gällande 1–2 veckor, 2–3 veckor eller mer än tre veckor. Om det har gått mer än tre veckor sedan befruktning behöver du göra ett ultraljud för att kunna få svar på din gravidvecka. När du har blivit uppmärksammad om att du är gravid är det viktigt att du avstår helt från alkohol, droger och nikotin. Vi rekommenderar dig även att se över din livsstil och tänka på att sunda levnadsvanor är extra viktigt inför och under en graviditet.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det kan vara väldigt svårt att veta att din partner är gravid, med största sannolikhet kommer du inte att märka något, däremot kan du alltid bidra med både medkänsla och praktiskt stöd.'
        ]
      }
    ]
  },
  {
    week: 2,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Det är inte helt lätt att veta att du är gravid i vecka 1,2 och 3. En förutsättning för att du ska kunna bli gravid är att det finns ett ägg att befrukta, något som sker vid ägglossning. Vid ägglossning fångas ägget upp av äggledaren och denna process sker vanligtvis 12–16 dagar före nästa mens. Vid befruktning möter mannens spermier kvinnans ägg uppe i den ena äggledaren, en av spermierna kommer att ta sig in i ägget först och vinna tävlingen. Det befruktade ägget kommer att vandra ned mot livmodern och fästa sig där – grattis, ni är gravida! Du kan redan nu känna ömmande bröst, illamående och ihållande smärta i magen som liknar den som många kvinnor känner innan sin menstruation.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Dina graviditetsveckor räknas från första dagen av din senaste menstruation före graviditeten. Vilket är ungefär två veckor före den faktiska befruktningen sker. Om du är en person som har mens väldigt regelbundet och får ett positivt testresultat på graviditetstestet (första dagen mensen uteblir), betyder det alltså att du redan är i vecka 4, trots att graviditeten endast är i vecka 2+0. Det innebär vanligtvis att den faktiska graviditeten är 38 veckor även fast man brukar prata om en graviditet i 40 veckor.',
          'Ungefär i vecka 4 har moderkakan producerat tillräckligt mycket av hormonet ”HCG” för att du ska kunna mäta det i urinet med ett vanligt graviditetstest. På apoteket finns det även dyrare graviditetstest som kan ge dig en uppskattning om vilken graviditetsvecka du befinner dig i för tillfället. Däremot är testen begränsade till att visa svar gällande 1–2 veckor, 2–3 veckor eller mer än tre veckor. Om det har gått mer än tre veckor sedan befruktning behöver du göra ett ultraljud för att kunna få svar på din gravidvecka. När du har blivit uppmärksammad om att du är gravid är det viktigt att du avstår helt från alkohol, droger och nikotin. Vi rekommenderar dig även att se över din livsstil och tänka på att sunda levnadsvanor är extra viktigt inför och under en graviditet.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det kan vara väldigt svårt att veta att din partner är gravid, med största sannolikhet kommer du inte att märka något, däremot kan du alltid bidra med både medkänsla och praktiskt stöd.'
        ]
      }
    ]
  },
  {
    week: 3,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Det är inte helt lätt att veta att du är gravid i vecka 1,2 och 3. En förutsättning för att du ska kunna bli gravid är att det finns ett ägg att befrukta, något som sker vid ägglossning. Vid ägglossning fångas ägget upp av äggledaren och denna process sker vanligtvis 12–16 dagar före nästa mens. Vid befruktning möter mannens spermier kvinnans ägg uppe i den ena äggledaren, en av spermierna kommer att ta sig in i ägget först och vinna tävlingen. Det befruktade ägget kommer att vandra ned mot livmodern och fästa sig där – grattis, ni är gravida! Du kan redan nu känna ömmande bröst, illamående och ihållande smärta i magen som liknar den som många kvinnor känner innan sin menstruation.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Dina graviditetsveckor räknas från första dagen av din senaste menstruation före graviditeten. Vilket är ungefär två veckor före den faktiska befruktningen sker. Om du är en person som har mens väldigt regelbundet och får ett positivt testresultat på graviditetstestet (första dagen mensen uteblir), betyder det alltså att du redan är i vecka 4, trots att graviditeten endast är i vecka 2+0. Det innebär vanligtvis att den faktiska graviditeten är 38 veckor även fast man brukar prata om en graviditet i 40 veckor.',
          'Ungefär i vecka 4 har moderkakan producerat tillräckligt mycket av hormonet ”HCG” för att du ska kunna mäta det i urinet med ett vanligt graviditetstest. På apoteket finns det även dyrare graviditetstest som kan ge dig en uppskattning om vilken graviditetsvecka du befinner dig i för tillfället. Däremot är testen begränsade till att visa svar gällande 1–2 veckor, 2–3 veckor eller mer än tre veckor. Om det har gått mer än tre veckor sedan befruktning behöver du göra ett ultraljud för att kunna få svar på din gravidvecka. När du har blivit uppmärksammad om att du är gravid är det viktigt att du avstår helt från alkohol, droger och nikotin. Vi rekommenderar dig även att se över din livsstil och tänka på att sunda levnadsvanor är extra viktigt inför och under en graviditet.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det kan vara väldigt svårt att veta att din partner är gravid, med största sannolikhet kommer du inte att märka något, däremot kan du alltid bidra med både medkänsla och praktiskt stöd.'
        ]
      }
    ]
  },
  {
    week: 4,
    categories: [
      {
        context: 'baby',
        sections: [
          'Embryot du bär på är nu cirka två veckor gammalt. Det befruktade ägget har kommit fram till livmodern och bäddar nu in sig i livmoderslemhinnan, vilket kallas för en blastocyst. Det är normalt och helt ofarligt att en mindre blödning kan uppstå när det befruktade ägget fäster i livmoderslemhinnan. Många kvinnor tror att det är en liten mensblödning, men faktum är att denna blödning kallas nidationsblödning och inträffar cirka en vecka före förväntad mens.',
          'Det är under den här perioden som grunden till det blivande fostret läggs, embryot får fortfarande sin näring från gulsäcken medan moderkakan bildas kring embryot. I ett sådant här tidigt skede av graviditeten är embryot fortfarande väldigt litet, trots att det går att ana vad som ska bli ögon och öron är embryot mindre än 1 mm långt mellan huvud och stjärt.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Du har nu klivit in i den första delen av graviditeten, den här första delen mellan vecka 1–12 kallas för första trimestern. Om du inte har fått din mens nu bör du fundera över om du kanske kan vara gravid. Det pågår en intensiv aktivitet i din livmoder och de flesta kvinnor har inga symptom i det här stadiet. Det är däremot inte omöjligt att en del redan nu kan känna en metallsmak i munnen, känna sig illamående, ha spänningar i brösten eller få extra känsliga bröstvårtor.',
          'Kroppen producerar nu ett gravidspecifikt hormon som heter HCG, det är det hormon som senare kommer att ge utslag på urinprovet. Runt vecka 4 är det möjligt att se om du är gravid genom ett klassiskt graviditetstest för hemmabruk. Glöm inte bort att många mödravårdscentraler även erbjuder kostnadsfria graviditetstest.',
          'När du har fått reda på att du är gravid ska du ringa den mödravårdscentral (MVC) du vill gå till. Alla mödravårdscentraler erbjuder samma basprogram och du kan välja att skriva dig på vilken MVC du vill. När du har kontaktat din MVC kommer barnmorskan att boka in ett inskrivningssamtal inom några veckor.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Din partner har nu ett växande embryo inuti sin mage, i den här veckan vet ni kanske inte om att ni är gravida, eller så har ni fått ett positivt graviditetstest? Att få reda på att ni är gravida är en omvälvande känsla. På samma sätt kan det vara väldigt tufft om testet visar negativt. Tänk på att det är väldigt viktigt att ni pratar med varandra om era känslor, positiva som negativa.'
        ]
      }
    ]
  },
  {
    week: 5,
    categories: [
      {
        context: 'baby',
        sections: [
          'Vecka 5 till och med vecka 10 är mycket viktiga för fostret eftersom det är nu alla organen bildas. Fostret i dig kallas embryo, vilket betyder ”något som växer” och det är precis det embryot gör. Embryot är endast någon millimeter långt och det går redan nu att urskilja på vad som är huvud och stjärt. Embryots kropp börjar att formas och man kan börja ana vad som kommer att bli ögon och öron. Det går att se små utbuktningar på sidorna av kroppen som senare kommer att bli till armar och ben. I den här veckan bildas även många av de inre funktionerna såsom hjärnan, nervsystemet och könsorganen.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu har mensen med största sannolikhet uteblivit och du kan nog misstänka att du kan vara gravid. Om du inte har tagit något graviditetstest ännu rekommenderar vi dig att ta ett. Har du tagit ett test och fått ett positivt besked på stickan betyder det att du garanterat är gravid. Har du däremot inte fått något utslag på testet betyder det inte att du inte är gravid. Graviditetstest för hemmabruk behöver inte ge något utslag i vecka 5, trots att du är gravid.',
          'Från och med vecka 5 är det viktigt att du äter rätt eftersom embryots alla organ håller på att bildas. Det är inte omöjligt att ditt humör blir likt en berg- och dalbana och att du behöver springa på toaletten och kissa oftare än vanligt. En del gravida kan även känna av klassiska gravidsymptom såsom illamående, trötthet, ömma och spända bröst eller metallsmak i munnen.',
          'Av alla gravida kvinnor är det ungefär hälften som mår illa och kräks och ytterligare en fjärdedel som mår illa utan att kräkas. Du kan vara illamående under hela dagen men symptomen sägs vara värst under morgontimmarna. För vissa kvinnor är illamåendet så svårt att det påverkar relationer och försämrar arbetsförmågan. Om du väntar tvillingar eller fler barn är det möjligt att du känner av gravidbesvären mer än den som väntar ett barn.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det finns stor sannolikhet att din partner börjar känna av en del av de klassiska gravidsymptomen såsom trötthet och illamående. Om din partner har större humörsvängningar än vanligt och att personer i er omgivning börjar märka att något håller på och förändras i din partners kropp behöver du inte bli orolig, det är helt normalt.',
          'Tänk på att det är mycket som händer i din partners kropp just nu, var lite extra snäll och omtänksam mot din partner och unna henne lite vardagslyx, kanske en frukost på sängen eller en kvällsmassage?'
        ]
      }
    ]
  },
  {
    week: 6,
    categories: [
      {
        context: 'baby',
        sections: [
          'I den här veckan börjar embryots hjärta att slå. Det lilla embryot har mer än fördubblat sin längd jämfört med föregående vecka och börjar nu likna en böjd larv i sin kroppsform. Embryot är cirka 4 millimeter mellan huvud och stjärt. I början av veckan börjar det som ska bli armarna att bildas och i slutet av veckan börjar det som ska bli benen att bildas. Armarna kommer alltid att ligga steget före benen i utvecklingen. Även munnen och käken börjar ta form och anlag till tio tänder finns i båda käkarna.',
          'Sakta men säkert börjar hjärnan att växa fram och utvecklas likt de inre organen som njurarna, magsäcken och tarmarna samt det centrala nervsystemet och ryggkotorna. Mot slutet av veckan börjar blodomloppet att fungera. Det som senare kommer att bli navelsträngen kallas i det här skedet för häftstjälken och är än så länge väldigt kort, under tidens gång kommer navelsträngen att bli lång och elastisk. Genom att omges av ett lager skyddande gelé är navelsträngens uppgift transportera det syresatta blodet till fostret och samtidigt tåla fostrets alla rörelser under graviditeten.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'I det här skedet vet de flesta kvinnor om att de är gravida eftersom mensen har gått två veckor över tiden. I vecka 6 känner många kvinnor av gravidsymptomen och att du är tröttare än vanligt och har ett större sömnbehov än tidigare är helt normalt. Det sker en stor omställning i kroppen under graviditeten och en del kvinnor kan få ett extra känsligt luft- eller synintryck eller känner sig ovanligt illamående. Blodet och blodflödet i kroppen påverkas av graviditetshormonerna vilket gör att din slida kan få en rödlila färg.',
          'Skadliga ämnen tas upp av blodet och når fostret via moderkakan och navelsträngen. Rökning, snusning och andra droger är exempel på skadliga ämnen som innebär en ökad risk för fostret under graviditeten. Behöver du hjälp att slutamed ditt beroende kan du vända dig till en vårdcentral eller barnmorskemottagning.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Trots att du inte känner att ni är gravida så vet du med stor sannolikhet att din partner är gravid. Om du röker, snusar eller tar andra droger ser vi det blivande föräldraskapet som en motivation att sluta. Du kan vända dig till olika hjälplinjer eller till en vårdcentral för att få hjälp med ditt beroende.',
          'Det är viktigt att du pratar om dina känslor och hur du känner inför den kommande graviditeten med vänner, familj eller legitimerad vårdpersonal.'
        ]
      }
    ]
  },
  {
    week: 7,
    categories: [
      {
        context: 'baby',
        sections: [
          'Embryot är cirka 7 millimeter långt och dess hjärta pumpar runt embryots eget blod i de blodkärl som har utvecklats. Embryots ben är böjda och syns inte än, längden i det här skedet mäts därför mellan huvud och stjärt. Embryots hjärta slår mellan 110 och 160 slag per minut, vilket är dubbelt så snabbt som hos en vuxen människa.',
          'Armar och ben fortsätter att växa och händerna börjar ta form som små paddlar. Två fördjupningar som ska bli ögon samt två knoppar, som senare kommer att bilda ytterörat syns på var sin sida av huvudet. Näsa och mun håller på och utvecklas men än så länge har de fortfarande ett gemensamt hål där tungan börjar ta form.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Många kvinnor känner i det här laget av illamåendet, tröttheten eller halsbesvären, det är dock ingen fara om du mår helt normalt och inte känner av några symptom alls. Under graviditeten arbetar dina tarmar långsammare än vanligt vilket gör att du kan vara förstoppad och din mage kan kännas uppblåst. Om du står upp en längre tid kan du känna dig yr, oroa dig inte, du är inte ensam med det symptomet. Om yrseln däremot blir olidlig rekommenderar vi dig att kontakta din MVC eller vårdcentral.',
          'Graviditeten innebär många påfrestningar på kroppen, ett bra sätt att förbereda kroppen på påfrestningarna är genom träning. Om du har vana att träna innan graviditeten rekommenderar vi dig att fortsätta träna som vanligt så länge det känns bra. Om du inte har tränat tidigare rekommenderar vi dig att börja träna, ta gärna hjälp av en kompis, familjemedlem eller personlig tränare för att komma igång med träningen. Undvik gärna tyngre sporter likt kampsport.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Graviditeten är och kommer vara en otrolig påfrestning för din partners kropp. Stötta gärna din partner genom att ta hand om de vardagssysslor som hon tycker kan kännas jobbiga eller ansträngande. Ta gärna med din partner på någon fysisk aktivitet, kanske en långpromenad eller ett träningspass tillsammans.'
        ]
      }
    ]
  },
  {
    week: 8,
    categories: [
      {
        context: 'baby',
        sections: [
          'Embryot är cirka 1,5 centimeter långt och börjar bli mer barnlikt och kan nu göra en del enklare rörelser. Rörelserna är viktiga för barnets kommande muskler och leder. Trots att embryot rör på sig under större delen av dygnet är det inget kvinnan kommer att känna.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Det är inte ovanligt att det känns som att du har mensvärk och behöver kissa allt oftare. Det beror på att din livmoder håller på att växa och kan trycka mot din urinblåsa. Livmodern är i storleken av en apelsin men går ännu inte att känna utanpå kroppen.',
          'Alla hormoner i din kropp under graviditeten gör att svampinfektioner och ökade flytningar i underlivet kan förekomma mer än vanligt. Tidigt i graviditeten är det även vanligt med blödningar och ungefär 1 av 4 kvinnor kommer att blöda någon gång. Blödningarna är ofta ofarliga för fostret och behöver inte innebära missfall. Om du känner dig orolig över blödningarna och har upprepade blödningar eller en större blödning rekommenderar vi dig att kontakta din MVC.',
          'Det är inte skadligt varken för dig eller för fostret att ha sex under graviditeten, däremot kan din lust, känsla eller upplevelse förändras. En del gravida får mer lust och känner en större njutning av sex medan andra får en motsatt effekt. Prata med din partner om dina känslor och behov.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Du kanske har märkt att din partner har ett förändrat lukt- och smaksinne. Självklart kan du fortfarande äta de saker som din partner inte vill äta, men försök att ha förståelse för din partners sinnesförändringar. Hitta lukter och smaker som fungerar för er båda.',
          'Det är inte skadligt varken för din partner eller för fostret att ha sex under graviditeten, däremot kan din partners lust, känsla eller upplevelse förändras. En del gravida får mer lust och känner en större njutning av sex medan andra får en motsatt effekt. Prata med din partner om hennes känslor och behov.'
        ]
      }
    ]
  },
  {
    week: 9,
    categories: [
      {
        context: 'baby',
        sections: [
          'Utvecklingen går snabbt framåt och embryot börjar nu likna en människa med sina dryga 2 centimeter mellan huvud och stjärt. Kroppen börjar ta form och svansen som tidigare fanns i ryggslutet hos embryot försvinner nu. Även fast det yttre könsorganet ser likadant ut hos alla foster, oavsett kön, finns de inre könsorgansdelarna (testiklar eller äggstockar) redan på plats.',
          'Embryots kropp börjar ta form. Tårna är på väg och fingrarna som tidigare såg ut som paddlar med simhud mellan dem börjar att växa ut och simhuden börjar försvinna. Huvudet har fått en nacke och ansiktet börjar få ögon med ögonlock och öron. Näsan som tidigare hade ett gemensamt hål med munnen börjar nu få sin egen struktur. Under den här veckan kommer embryots hjärta att bli färdigutvecklat.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Under graviditeten är det viktigt att du sköter din munhygien. Hormonerna i kroppen gör att munnens slemhinna blir mer svullen och skör, vilket kan leda till blödningar vid tandborstning. Som gravid kommer du att löpa större risk för att få hål i tänderna eftersom det är vanligt att småäta under graviditeten och din salivs egenskaper förändras.',
          'Om du ännu inte har bokat någon tid hos barnmorskan är det hög tid att göra det nu. Under det första mötet med barnmorskan kommer du/ni att få viktig information gällande graviditeten och förlossningen. Förutom information kommer du att få ta ett antal prover, både blodprover och urinprover för att kontrollera bland annat HIV, röda hund och syfilis.',
          'Om det finns några risker med graviditeten eller om du har ett behov av att träffa en läkare kommer barnmorskan att boka in ett läkarbesök. Om du är orolig och behöver extra stöd under din graviditet eller är rädd inför förlossningen kan barnmorskan hjälpa dig med det.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det kan vara dags för ert första besök hos barnmorskan. Tänk på att det är helt okej att ställa vilka frågor som helst gällande graviditeten eller livet som förälder, barnmorskan finns där för att stötta er båda i den här resan. Mycket av uppmärksamheten kommer att vara på din partner och det är helt normalt att du som medförälder kan känna dig utanför. Att prata med vänner, familj eller barnmorskan kan hjälpa.'
        ]
      }
    ]
  },
  {
    week: 10,
    categories: [
      {
        context: 'baby',
        sections: [
          'Embryot börjar se mänskligt ut och kallas från och med den här veckan för foster. Fostret är cirka 3 centimeter långt och väger ungefär 5 gram, fostrets kropp och huvud är lika stora. Ett känsligt utvecklingsstadium för embryot har passerat och det sker en intensiv utveckling av nervcellerna. De flesta av fostrets organ är bildade men kommer fortsätta att växa och utveckla sina uppgifter fram till förlossningen.',
          'Ögonen som tidigare satt på var sin sida av huvudet börjar ta sig fram på huvudet och hitta sin plats. De två knopparna som ytterörat tidigare bestod av har vuxit samman och bildat ytterörats form och på fostrets ben börjar knän och vrister att bildas.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Det är möjligt att dina blodkärl är mer framträdande och att du ser nya linjer på din hud, det beror på att du har en ökad blodtillförsel i din kropp för att ge barnet den näring som behövs. Blodvolymen i kroppen ökar med cirka 40 % under graviditeten, men oroa dig inte, blodkärlen kommer att gå tillbaka och bli som vanligt efter förlossningen.',
          'Runt vecka 10 är det många gravida som märker att deras mage börjar synas allt mer och brösten blir större. Att magen blir större beror på att livmodern vidgar sig för att göra plats åt det växande fostret, i vecka 10 är din livmoder ungefär lika stor som en apelsin. Däremot behöver du inte vara orolig om du inte märker någon skillnad på din kropp, det är fullt normalt och det kan dröja ytterligare någon vecka innan du ser något.',
          'Mellan vecka 10 och vecka 12 sker vanligtvis ett läkarbesök där du som gravid får svar på dina frågor gällande fosterdiagnostik, förlossning och graviditet. Läkaren kan även göra ett extra ultraljud eller gynekologisk undersökning under besöket. Om du vill, kan du och läkaren komma överens om en gemensam vårdplan för graviditeten och förlossningen.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Ni kanske har ert första inskrivningssamtal eller läkarbesök under denna vecka. Ta gärna med dig förberedda frågor om du har sådana och ett anteckningsblock för att skriva ned det barnmorskan eller läkaren säger. Ni har precis passerat ett av de mest känsliga utvecklingsstadierna i fostrets utveckling. För dig som medförälder kan den här första tiden gå långsamt, kan du se någon skillnad på din partner som påminner dig om graviditeten? Har magen börjat växa eller har brösten blivit större?'
        ]
      }
    ]
  },
  {
    week: 11,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 4 centimeter långt och väger ungefär 8 gram. Fostret har bildat armar och ben och den känsligaste utvecklingstiden är avklarad, risken för medfödda missbildningar är nu betydligt mindre.',
          'I vecka 11 är könsorganet inte tillräckligt utvecklat för att du ska kunna se vilket kön ditt foster har. Om det är en kille håller penis och pung på att bildas och om det är en flicka håller blygdläppar och klitoris på att bildas. Fostrets ögon har täckts av ögonlock och lungorna är fyllda av fostervatten. I bukhålan växer bukspottskörteln, levern och flera organ till. Tarmarna, som tidigare har fått ligga i navelsträngen har även dem fått en plats i bukhålan att växa i.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Trots att du normalt sett kan ha gått upp något kilo brukar graviditeten i vecka 11 inte att vara så synlig. Om du däremot har kräkts mycket under dina första veckor och inte har gått upp något i vikt eller väger lika mycket som innan graviditeten behöver du inte oroa dig.',
          'Blodmängden i kroppen börjar öka och du kan känna av graviditeten tydligt genom att vara extra trött och behöva vila mer än vanligt. För en del kvinnor som har haft besvär med illamående börjar det att avta efter den här veckan. Du kan även känna dig varm om händer och fötter, drick mycket vätska.',
          'Tänk på att äta och dricka kalciumrika livsmedel för att utveckla barnets benstomme och tänder, det är även viktigt att du får i dig rikligt med järn för barnets blodbildning. Din barnmorska kommer att kontrollera ditt blodvärde så att du får i dig tillräckligt av kalcium och järn. Om du får i dig för lite järn kan du behöva äta järntillskott.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Har du börjat känna av samma symptom som din partner? Mår du illa? Har du gått upp i vikt? Sover du sämre än vanligt eller har ont i ryggen?',
          'Det är inget ovanligt, det har visat sig att medföräldern också kan uppleva snarlika gravidsymptom som sin partner. Troligtvis är det din hjärna och din kropp som förbereder dig på det kommande föräldraskapet.',
          'Se det från den ljusa sidan, nu kan du och din partner hitta på saker tillsammans för att ni båda ska må bättre!'
        ]
      }
    ]
  },
  {
    week: 12,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 5 centimeter långt och väger ungefär 15 gram. Fostret börjar allt mer likna en människa där ansiktsdragen börjar ta form och överläppen får sin kontur (amorbåge). Fostret kan röra både armar och ben och på fingrarna börjar fostrets helt unika fingeravtryck att bildas och naglar att synas. ',
          'All näring och syre till fostret går via moderkakan och navelsträngen. Fostret har lärt sig att svälja fostervatten och kan nu ta upp socker genom matsmältningen. Vilket innebär att allt som den gravida kvinnan äter och dricker förs över till fostret via moderkakan.',
          'Efter vecka 12 är den största risken för missfall över.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'I slutet av den första trimestern är det vanligt att barnmorskan frågar om ni vill göra ett KUB-test. KUB-testet är ett kombinerat blodprov och ultraljud som görs på den gravida kvinnan som visar sannolikheten för att fostret har någon kromosomavvikelse. Tänk på att KUB-testet är frivilligt och att provsvaren är uppskattningar och inte ger helt säkra svar. Innan du gör testet rekommenderar vi dig att tänka på varför du vill göra testet och vad du skulle göra om resultatet kanske inte blir som du har hoppats på.',
          'När du är gravid har du enligt arbetsmiljölagen rätt till en gravidanpassad arbetsmiljö. Det finns jobb och arbeten som är mindre lämpliga eller rent ut sagt ohälsosamma för en gravid kvinna. Vi rekommenderar dig att läsa mer om dina rättigheter, graviditet och amning hos arbetsmiljöverket.',
          'Det är många kvinnor som får ett blankare och tjockare hår och bättre och slätare hy under graviditeten, det beror på den ökade blodmängden och gravidhormonerna i kroppen.',
          'Efter vecka 12 är den största risken för missfall över. Därför är det vanligt att vänta med att berätta om sin graviditet tills efter denna vecka. Andra väljer däremot att berätta om sin graviditet från dag 1 medan andra väljer att vänta ännu längre. Det är helt upp till er hur och när ni vill berätta om er graviditet, det finns inget rätt eller fel.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Den här veckan kan det vara dags för ert KUB-test. Innan ni gör KUB-testet rekommenderar vi er att prata med varandra om varför ni vill göra testet och vad ni skulle göra om resultatet kanske inte blir som ni har hoppats på.',
          'Efter vecka 12 är den största risken för missfall över och nu börjar det roliga! Förhoppningsvis börjar din partner att återgå till sitt normala jag och må allt bättre. Du kanske märker att din partners humör och lust har kommit tillbaka – ta vara på det.'
        ]
      }
    ]
  },
  {
    week: 12,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 13,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 14,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 15,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 16,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 17,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 18,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 19,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 20,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 21,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 22,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 23,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 24,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 25,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 26,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 27,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 28,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 29,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 30,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 31,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 32,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 33,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 34,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 35,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 36,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 37,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 38,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 39,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 40,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 41,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  },
  {
    week: 42,
    categories: [
      {
        context: 'baby',
        sections: ['']
      },
      {
        context: 'Mother',
        sections: ['']
      },
      {
        context: 'Partner',
        sections: ['']
      }
    ]
  }
]

export default weekArticles
