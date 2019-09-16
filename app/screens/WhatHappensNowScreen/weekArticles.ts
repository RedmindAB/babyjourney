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
    week: 13,
    categories: [
      {
        context: 'Baby',
        sections: [
          'En graviditet brukar delas in i tre delar, så kallade trimestrar. Du är precis klar med den första trimestern och kliver nu in i den andra trimestern som pågår mellan vecka 13 och 27.',
          'Fostret är cirka 6 centimeter långt och väger ungefär 60 gram. Organen är färdigutvecklade i den grad att de fungerar. Skelettet som tidigare har varit mjukthåller på att hårdna för att ge kroppen mer stabilitet. Kroppen försöker att växa ikapp huvudet som nu utgör ungefär hälften av fostrets storlek. Fostret kan röra sig mer obehindrat och vid ett ultraljud skulle man kunna se hur fostret rör på sina armar och ben och för händerna mot munnen.',
          'När fostret ligger i magen behöver det inte använda sina lungor. Hjärtat som har slagit och pumpat runt blodet sedan vecka 6 anpassar blodcirkulationen till att pumpa blodet genom hjärtat så att det inte behöver passera lungorna under graviditeten. För att denna genväg och anpassade cirkulation ska kunna fungera finns det ett hål mellan hjärtats två förmakar. Vid barnets första andetag kommerhålet mellan de två förmakarna att pressas samman och barnet får en normal blodcirkulation.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'När du har klivit in i den andra trimestern minskar risken väsentligt för missfall.Din energi kommer vanligtvis tillbaka och vi rekommenderar dig att använda denna energi till att träffa vänner, umgås med din partner eller att träna. Det är viktigt att du håller dig aktiv och stärker din kropp inför din viktuppgång och ökadkroppsbelastning.',
          'Under graviditeten är det vanligt att din mage känns annorlunda och att du är förstoppad, det beror på att dina tarmar rör sig långsammare under graviditeten. Vid förstoppning kan du få ont eller svullen mage och minskad aptit. Förstoppad mage kan leda till att du får sprickor i ändtarmen, analsprickor eller hemorrojder. Det finns mat och dryck som kan hjälpa dig med din förstoppning. Prata med din barnmorska om dina besvär för att få bästa möjliga hjälp.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Nu när ni har klivit in i den andra trimestern minskar risken väsentligt för missfall.Din partners energi kommer vanligtvis tillbaka och vi rekommenderar er att använda denna energi till att träffa vänner, gå ut och äta, umgås med varandra eller att träna.Kanske har ni bestämt att ni ska berätta om graviditeten för era vänner nu? Pratamed din partner om ni ska göra något extra roligt vid avslöjandet.'
        ]
      }
    ]
  },
  {
    week: 14,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 7 till 8 centimeter långt och väger ungefär 80 gram. Fostret är inne i en väldigt intensiv tillväxtfas och har utvecklat ett fungerande nervsystem.Den intensiva fasen innebär att fostret rör på sig betydligt mer och smidigare nu än tidigare och har även lärt sig att göra sväljrörelser. Trots fostrets aktiva livsstil kommer det att dröja flera veckor innan du kan känna rörelserna, det är dock intehelt omöjligt att du kan känna rörelser redan nu. ',
          'På fostrets kropp har ett tunt och genomskinligt lager av hud som är täckt av småhårstrån bildats. Kroppsdelarna har utvecklats och blivit så pass tydliga att de gåratt se fostrets kön med ett ultraljud och höra fostrets hjärta med en hjärtljudsmonitor.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Har din mage blivit större och börjar det synas att du är gravid? Det beror på att din livmoder som nu är lika stor som en grapefrukt fortsätter att växa. Om du harvarit gravid tidigare kan din mage vara större än förstagångsfödare. Det beror på att magmusklerna har blivit mer uttänjda och livmodern blivit mer framåttippad efter graviditeten.',
          'På grund av de olika hormonförändringarna under graviditeten är det vanligt att få ett mörkt streck, kallat Linea Nigra, mitt på magen. Strecket kan se olika ut hosolika kvinnor och hos vissa blir strecket större och mörkare än hos andra. Efter födsel brukar hudförändändringarna att blekna bort, men det kan ta upp till ett par år för strecket att försvinna helt.',
          'Förhoppningsvis fortsätter du att må allt bättre och din trötthet och illamåendet fortsätter att avta. Nu borde det inte vara omöjligt att du får sova en hel natt utan att springa på toaletten.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Din partners mage växer för fullt och nu kanske det är svårt att dölja för omgivningen att ni är gravida. Fostret har en väldigt aktiv livsstil inne i magen och rör på sig lika smidigt som en balettdansös. Trots den aktiva livsstilen kan detvara svårt att känna några rörelser, men det är inte omöjligt. Lägg gärna din hand eller kind mot magen och se om du kan känna några rörelser.',
          'Studier har visat att fostret reagerar på ljud, prata gärna med ditt kommande barn redan nu för att skapa ett band er emellan.'
        ]
      }
    ]
  },
  {
    week: 15,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 14 centimeter långt och väger ungefär 100 gram. Ögonen som tidigare satt på var sin sida av huvudet har flyttats fram till framsidan av ansiktetoch öronen som tidigare satt vid nacken har flyttats till sin plats på sidorna av huvudet. Fostret blir mer aktivt för varje dag som går och övar sig på de rörelserna hen klarar av. Fostret kan röra på sina fingrar och tår och kan föra händerna mot ansiktet och få in tummen i munnen. Trots den aktiva livsstilen kanfostret själv inte styra sina rörelser, vilket beror på att nervsystemet inte är tillräckligt utvecklat ännu.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Vid den här tiden är det vanligt att din mage börjar bli större och det kan bli dags för dig att köpa nya kläder som sitter bekvämt på din gravidkropp.',
          'För att din kropp ska klara av att tillföra syre både till dig och till ditt foster kommer ditt hjärta nu att ha cirka 20 procent högre kapacitet och slå med 10–20 fler slag per minut.',
          'Kom ihåg att få i dig livsmedel som innehåller kalcium, kalcium är värdefullt för att utveckla och stärka fostrets skelett. Under graviditeten kan hormonerna orsaka inflammation i tänder och tandkött vilket gör de mer mottagliga för plack och bakterier. Tänk på att sköta dina tänder och att din munhygien är extra viktig.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Graviditetstiden går fortare än vad man tror och det kan vara en bra idé att boka in ett möte med din chef eller HR-avdelning på jobbet för att informera om er graviditet och kommande barn. Allt för att inte behöva stressa de sista veckorna av graviditeten där du har många andra tankar.'
        ]
      }
    ]
  },
  {
    week: 16,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 16 centimeter långt och väger ungefär 150 gram. Fostrets längd mäts nu inte längre mellan huvud och stjärt utan mellan huvud och fot. Vid den här tiden borde ni ha fått en tid för ett ultraljud som vanligtvis genomförs mellan vecka 17–20. Fostrets skelett blir allt hårdare och nervsystemet fungerar allt bättre. Vid det kommande ultraljudet kommer fostrets utveckling att synas genom att hen rör på sig med synkroniserade rörelser. Det är inte säkert att du känner av att det är fostret som rör sig, många kvinnor förknippar fosterrörelserna med tarmrörelser. Trots att fostret är omgivet av fostervatten som dämpar ljudnivån kan fostret reagera på plötsliga ljud nära magen.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Det är inte säkert att du känner av att det är fostret som rör sig i din mage, många kvinnor förknippar fosterrörelserna med pirrande bubblor och tarmrörelser. Trots att du inte anstränger dig är det normalt att du känner dig andfådd, det beror på att ditt hjärta pumpar runt en större mängd blod än vanligt. Din mage fortsätter att växa och du kan få ont i bäcken, rygg, ljumskar och höfter. Det beror på att bäckenlederna mjukas upp för att utvidga och göra bäckenet mer rörligt inför förlossning. Prata med din barnmorska eller läkare om besvären blir allt för stora.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Vid den här tiden borde ni ha fått en tid för ett ultraljud som vanligtvis genomförsmellan vecka 17–20. Vid det kommande ultraljudet kan ni få veta om det är en pojke eller flicka. Prata gärna med din partner innan ultraljudet om ni vill veta vilket kön det är eller om ni vill vänta till förlossningen och se det som en överraskning.'
        ]
      }
    ]
  },
  {
    week: 17,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 18 centimeter långt och väger ungefär 180 gram. Fostret börjar få allt mer barnlika proportioner och kroppen håller på att växa ikapp huvudet. Vid födsel kommer barnets huvud att utgöra en tredjedel av den totala längden. Fostrets ögonbryn och ögonfransar fortsätter att växa och ögonen är fortsatt slutna men har blivit större. För att fostret ska klara av att ligga i vatten under hela graviditeten utan att skada den ömtåliga huden håller fosterfett på att bildas. För att fostret ska kunna skydda de inre organen samt hålla sig varmt efter födseln lagrar det brunt fett i kroppen.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Gravidhormonerna gör att en del kvinnor känner att kroppens slemhinnor har svullnat. Symptomen kan vara olika och vissa får ett känsligare tandkött som blöder lätt medan andra kvinnor kan drabbas av nästäppa och lättare blöda näsblod. Vid nästäppa rekommenderar vi dig att använda koksaltlösning snarare än nässpray.De svullna slemhinnorna kan göra att du blir känsligare vid samlag, använd gärna glidmedel för en skönare känsla. Du kan även uppleva fler flytningar (sekret) än vanligt från slidan, så länge flytningarna inte luktar något ärdet inget du behöver vara orolig för. Om flytningarna börjar lukta ska du prata med din barnmorska eller din läkare.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Du och din partner kan fortfarande ha ett aktivt sexliv så länge det känns bra för er båda, något som är viktigt att tänka på är att använda glidmedel under samlagdå gravidhormoner gör att slidan blir känsligare. Prata med din partner om du upplever något som inte känns rätt gällande ert sexliv.'
        ]
      }
    ]
  },
  {
    week: 18,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 20 centimeter långt och väger ungefär 250 gram. Fostret fortsätter att vara väldigt aktivt och vid ett ultraljud kan du förutom rörelser kanske få möjlighet att se en gäspning. Fingeravtrycken börjar synas i form av små linjer på fostrets fingrar och även tårna har blivit allt mer utvecklade. Fostrets nervsystem fortsätter att utvecklas i snabb takt och nerverna i hjärnan fokuserar på de funktioner som kommer att styra hörsel, känsel, lukt, smak och syn. Ögonen kan nu reagera på ljus.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Din mage fortsätter att växa och du har troligtvis gått upp några kilo. Under graviditeten förändras du både fysiskt och psykiskt och det är vanligt att du börjar se hudbristningar och åderbråck på din kropp. Smörj in din kropp med mjukgörande krämer för att minimera bristningarna och bär stödstrumpor för att hjälpa blodcirkulationen. Om du vaknar på natten med kramper i dina vader är det ingenting du behöver vara orolig över. Det är oklart vad det är som påverkar dessa kramper men att mjuka upp vaderna eller massera vaderna innan du går och lägger dig kan minska symptomen.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Har du tänkt på något namn till ert kommande barn?Oavsett om du vet barnets kön eller inte kan det vara roligt att göra namnlistor och skriva ner era favoritnamn som ni sedan berättar för varandra. Jämför namnlistorna och se om ni har några gemensamma favoritnamn.'
        ]
      }
    ]
  },
  {
    week: 19,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 22 centimeter långt och väger ungefär 280 gram. Fostret blir allt mer barnlikt och dess armar och ben är nu i rätt proportioner till varandra jämförtmed resten av kroppen. Nervsystemet och nerverna blir allt mer utvecklade och fostret kan nu göra medvetna rörelser. Fostrets mjölktänder är utvecklade och formade men ännu inte synliga, anlagen till tänderna som barnet ska få senare i livet håller på att bildas under mjölktänderna. Den känsliga kroppen är fortfarande täckt av små tunna hårstrån som skyddar huden i vattnet.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Det kan vara så att ni tidigare har fått ett beräknat förlossningsdatum av er barnmorska. Vid det kommande ultraljudet som görs runt den här perioden kommer barnmorskan att fastställa ett beräknat förlossningsdatum, om ni tidigare har fått ett datum kan det komma att ändras.',
          'Din livmoder är ungefär lika stor som en liten galiamelon eller huvudet på ett nyfött barn. Under de kommande veckorna kommer du att bli större och din magekommer att växa i snabbare takt. Det är möjligt att känna din livmoder med handen om du trycker försiktigt under naveln. Att du börjar växa snabbare under de närmsta veckorna kommer innebära ytterligare belastningar för din rygg. Försök att tänka på din hållning och svanka så lite som möjligt för att minska smärtan.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det lilla fostret i din partners mage är nu ungefär lika stort som en liten galiamelon eller huvudet på ett nyfött barn. Din partners mage växer och hennes kropp blir allt större, med stor sannolikhet kan du se bristningar på huden eller andra hudförändringar. För att få en trevlig stund tillsammans tycker vi att du kanerbjuda dig att smörja in din partners kropp med mjukgörande lotion för att minimera bristningarna.Passa även på att massera din partner.'
        ]
      }
    ]
  },
  {
    week: 20,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 24 centimeter långt och väger ungefär 350 gram. Halva graviditeten har passerat och fram tills nu har alla foster vuxit i rätt så jämn takt. Från vecka 20 och framåt kommer det att bli större skillnader mellan olika foster och fostrets mätangivelser blir mindre exakta. Fostret fortsätter att vara väldigt aktivt och rör på sig mycket, rörelserna blir allt mer avancerade och nu kan fostret till och med göra framåt- och bakåtkullerbyttor. Svettkörtlarna är färdigutvecklade och trots att fostret rör på sig mycket kommer hen inte att börjasvettas förrän efter födsel. Fostret fortsätter att utveckla sina sinnen, hen har fåttkänsel och kan känna smärta samt känna igen din röst. Förutom ögonlock finns nu även ögonfransar på ögonen som fostret har lärt sig att blinka med.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Halva graviditeten har passerat, din livmoder och mage växer och på en del kvinnor kan naveln börja stå ut. Om din mage ännu inte syns så mycket kommer den att göra det inom de närmsta veckorna. När du är gravid ökar blodvolymen i din kropp, järn är ett ämne som transporterar syre runt i blodet och är viktigt både för dig själv och ditt foster. Under graviditeten behöver du få i dig extra järn genom din kost eller genom järntillskott. Ditt järnvärde kommer att kontrolleras flera gånger under graviditeten av din barnmorska som kommer att säga till om du behöver få i dig mer järn.',
          'Om du inte redan har fått det kommer du runt den här perioden att få ett moderskapsintyg från din barnmorska som du ska skicka in till försäkringskassan.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Nu har halva graviditeten passerat!Den sista tiden kommer att gå fortare än vad du tror och ett tips är att redan nu börja köpa eller i alla fall kolla på nödvändiga barnsaker som ni kommer att behöva efter födsel. Förutom att ni slipper stressa över era beslut sprider ni även ut kostnaderna.'
        ]
      }
    ]
  },
  {
    week: 21,
    categories: [
      {
        context: 'Baby',
        sections: [
          'Fostret är cirka 26 centimeter långt och väger ungefär 400 gram. Hen kan reagera på både ljud och ljus och sover ungefär 16 timmar per dygn. Trots att fostrets alla organ är bildade kommer det att ta flera veckor innan organen är färdigutvecklade och fungerar för ett liv utanför magen. Fostret lever i ett viktlösttillstånd i livmodern och gör därför inte av med mycket energi. För att få i sig den näring och vätska som behövs sväljer fostret lite fostervatten varje dag. Genom att svälja fostervatten förbereder sig fostret på att smälta mat. Fostret har utvecklat smaklökar på tungan.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Fostret rör sig fritt i fostervattnet och det finns en möjlighet att du känner fostret sparka nere vid blygdbenet och långt upp i magen. Din kropp förbereder sig och utvecklas för varje vecka som går, vid den här tidpunkten kan det börja läcka vätska från dina bröstvårtor, det beror på att din kropp förbereder sig på att amma det kommande barnet.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Både du och din partner kan känna er stressade under graviditeten och inför den kommande förlossningen. För att ni ska få mer energi, bli lugnare och må bättre rekommenderar vi er att prova på andningsövningar. Prova er fram och hitta gärna den andningsövningen eller avslappningsmetoden som fungerar för er.'
        ]
      }
    ]
  },
  {
    week: 22,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 27 centimeter långt och väger ungefär 450 gram. Med dagens nyföddhetssjukvård kan barn räddas från och med vecka 22 och om fostret skullefödas nu definieras det juridiskt som barn. Fostret fortsätter att utveckla sin hjärna, sina sinnen och sin kropp och har nu utvecklat sin egen dygnsrytm. Fostrets dygnsrytm stämmer troligtvis inte överens med din egen. Med stor sannolikhet kommer fostret att börja röra på sig när du tar det lugnt och vilar ochsomnar när du vaggar hen till sömns genom att röra på dig. Trots att ögonlocken som täcker ögonen är slutna kan fostret se ljus och mörker. '
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Vid den här tiden i graviditeten mår du troligtvis rätt så bra. Du kommer känna av många symptom under hela graviditeten och även en stund efter förlossningen, men förhoppningsvis är du inte lika illamående och trött som du tidigare har varit. Din mage börjar växa allt mer men är inte så pass stor att den begränsar dig allt för mycket i din rörlighet och vardag. Under graviditeten rekommenderar vi dig att undvika stark sol för att pigmentförändringar runt fräknar, födelsemärken eller vårtgårdar inte ska bli permanenta.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Förhoppningsvis mår din partner betydligt bättre än vad hon tidigare har gjort. Föreslå för din partner att ni ska boka in en profylaxkurs tillsammans för att förbereda er inför förlossningen. Under kursen kommer du att få lära dig metoderoch tekniker för att kunna stötta din partner under värkar och förlossning. Prata med din mödravårdscentral för att få tips på vart ni kan gå på kursen.'
        ]
      }
    ]
  },
  {
    week: 23,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 28 centimeter långt och väger ungefär 550 gram. Fostret har omkring 1 % kroppsfett vilket gör det möjligt att lägga märke till fostrets skelett genom den tunna huden. Huden är fortfarande genomskinlig eftersom fostret växer snabbare än fettlagerna hinner fyllas på. Snart kommer huden bli mer fyllig, fettdepåerna kommer att fyllas på och fostret kommer att öka i vikt. Fostrets hörsel har blivit så pass utvecklat att höga ljud kan skrämma fostret och få det att röra på sig. Fostret kan även skilja på olika ljud, tonlägen och rytmer. '
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Om du ännu inte har gått upp så mycket i vikt kan du förvänta dig att göra det nu. Under de kommande fyra veckorna kommer ditt foster att fördubbla sin vikt och den större viktuppgången påbörjas nu för många kvinnor. Du kan känna att det drar och smärtar i sidan av magen. Det beror på att ligamenten som håller i livmodern töjer på sig när fostret rör sig. Denna smärta är helt normal och oftast ofarlig. Om smärtan inte har gått över när du har vilat en stund rekommenderar vi dig att kontakta din MVC eller läkare.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Ditt kommande barn har fått sin hörsel så pass utvecklat att det nu kan känna igen din röst på tonläget och rytm. Sjung och prata för barnet så kommer det att känna igen din röst vid födseln. Din partner kommer de närmsta veckorna att gå upp i vikt och vara hungrigare än vanligt. Ett tips kan vara att köpa hem allsidig och näringsrik kost som din partner kan småäta på när hon blir sugen. '
        ]
      }
    ]
  },
  {
    week: 24,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 30 centimeter långt och väger ungefär 600 gram. Den genomskinliga, tunna huden börjar bli allt tjockare och täcks nu av fosterfett och hår. Vid födsel kan kroppshåret fortfarande finnas kvar på barnet men det vanligaste är att fostret tappar håret innan själva förlossningen. Det organ som tar längst tid för fostret att utveckla är lungorna. Lungorna kommer att utvecklas ett bra tag till och andningsvägarna håller på att ta form. Mellan vecka 16 och 24 växer de små blodkärlen i lungorna (kapillärerna) som mest, vilket innebär att om fostret skulle födas så här tidigt är det först nu det kan börja andas luft. Vid förlossningen kommer den vätska som fostrets lungor är fyllda med att pressas ut och fostret kommer att andas normalt via sina lungor. '
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Under hela din graviditet kommer din livmodermuskel att tränas så att den kan ge dig starka och effektiva värkar inför förlossningen. Muskeln tränas genom att då och då dra ihop sig i sammandragningar. Sammandragningarna är ofarliga ochkan kännas olika starkt beroende på om du väntar ditt första barn eller är omföderska. Om dina ben och fötter är mer svullna än vanligt rekommenderar vi dig att skaffaett par stödstrumpor och lägga upp benen i högläge så ofta du kan. Svullnaden varierar från kvinna till kvinna och beror på att vätska samlas i ben och fötter.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det är inte ovanligt att din partners bröst läcker lite råmjölk, råmjölk är ert barns första kost och finns där innan den riktiga bröstmjölken kommer. Hjälp din partnermed att upptäcka om det har läckt lite mjölk och ha gärna med dig ett extra ombyte till henne.'
        ]
      }
    ]
  },
  {
    week: 25,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 33 centimeter långt och väger ungefär 700 gram. Fostrets känsel håller på att utvecklas och det kan nu reagera på beröring. Fostret fortsätter att utveckla sin motorik och kan både knyta sina händer och greppa tag om sina fötter. För att förbereda sig inför ett liv utanför livmodern håller fostrets näsborrar, som tidigare varit igentäppta, på att öppna sig. Det finns inget syre i livmodern men när näsborrarna väl är öppna kommer fostret att börja träna på sin andning i fostervattnet.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Om du upplever smärta i bäckenområdet kan vara ett tecken på foglossning. Foglossning beror på att lederna som normalt håller din bäcken på plats blir rörligare och slappa. Att lederna blir rörligare är en naturlig del av förberedelserna inför förlossningen. Ett tips för att stärka lederna och minska smärtan är att göra knipövningar. Vi rekommenderar dig att göra knipövningar dagligen för att stärka bäckenbottenmusklerna. Förutom att minska smärtan och läckage av urin kan även knipövningarna ge er ett skönare sexliv.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Efter vecka 25 brukar föräldrakurserna att start, kom gärna med förslag och pratamed din partner vart hon vill att ni ska göra er föräldrautbildning någonstans. Utbildningen kan ske i mindre eller större grupper, vid enstaka tillfällen eller flera tillfällen. Under kurserna kommer ni att gå igenom och diskutera allt ifrån graviditet och föräldraskap till relationer. Tänk på att ingen fråga är för dum eller oviktig, ställ de frågorna som just du vill ha svar på. Det är smart att gå på de här föräldragrupperna, för som föräldraledig kan en annan föräldraledig vän vara värdefull. '
        ]
      }
    ]
  },
  {
    week: 26,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 35 centimeter långt och väger ungefär 800 – 900 gram. Under tiden ögonen har varit stängda har fostret utvecklat sin näthinna för att kunna reagera på ljus och mörker. Från och med denna vecka kan fostret öppna och stänga sina ögon och med begränsad syn kunna se vad som händer. Ett tips om du vill väcka en reaktion och känna ditt foster röra på sig är att hålla en ficklampamot magen.Utvecklingen av fostrets lungor fortsätter och fostret tränar på att andas genom att dra in och ut fostervatten i lungorna.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Under graviditeten kan du få utvidgade och synliga ådror på benen, i underlivet eller i ändtarmen (hemorrojder), så kallat åderbråck. Åderbrock beror på att graviditetshormonerna gör vävnaden i ådrorna lösare. Åderbrock i underlivet kan kännas som ett tryck och få dina blygdläppar att svullna upp. Du kan lindra dina besvär mot åderbrock i underlivet genom att vila. För att lindra dina besvär mot åderbrock i benen kan du använda stödstrumpor och mot åderbrock i ändtarmen finns det lindrande medel att köpa på apoteket. Åderbrock är ingenting som kommer att påverka din förlossning och besvären försvinner vanligtvis efter förlossningen.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Som förälder vill man inte att ens barn ska födas för tidigt, men tänk på att fostret juridiskt sett nu är ett barn och ungefär 85% av alla barn som föds i vecka 26 överlever med dagens nyföddhetssjukvård. Om din partner känner sammandragningar eller andra tecken på tidigare värkar rekommenderar vi er attringa er MVC eller läkare. Ett tips är att ha alla viktiga telefonnummer sparade i din mobil så att du vet vem du ska kontakta vid en eventuell misstanke.'
        ]
      }
    ]
  },
  {
    week: 27,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 37 centimeter långt och väger ungefär 1 kilo. Trots att fostret växer snabbt finns det fortfarande gott om utrymme i livmodern att röra sig på. Fostret samlar på sig allt mer underhudsfett och dess hud får näring och skyddas av ett fettlager som kallas fosterfett eller vernix. Vid en födsel i vecka 27 har fostrets tarmar blivit så pass utvecklade att fostret med stor sannolikhet skulle klara av att överleva och kunna ta emot modersmjölk. Det är långt ifrån riskfritt att födas så här tidigt och barnet skulle behöva mycket vård. Varje vecka som går gör stor skillnad i fostrets utveckling och chans att överleva. '
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Hormonerna kommer att påverka din hud under graviditeten och det är inte ovanligt att huden på din mage börjar klia eller att du får bristningar (strior) på mage och lår. Om det börjar klia på dina handflator eller fotsulor kan det vara ett tecken på klåda. Klåda kan orsakas av förhöjda levervärden eller bero på vätskebrist. Prata med din barnmorska om det börjar klia och du får besvär på handflator eller fotsulor så att en eventuell behandling eller utredning kan göras. '
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Om du lägger ditt öra mot din partners mage kan du med stor sannolikhet få höraett snabbt hjärtljud. Tänk på att ditt barns hjärta slår betydligt snabbare än vad ditt eget gör så du behöver inte bli orolig om det slår väldigt fort.'
        ]
      }
    ]
  },
  {
    week: 28,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 39 centimeter långt och väger ungefär 1 kilo. De flesta foster ligger nu rätt inför förlossningen med huvudet nedåt i födelsekanalen, men det ärfortfarande möjligt för barnet att röra på sig och lägga sig på sidan eller med stjärten nedåt. Än så länge är det ingen fara om fostret inte ligger i rätt position, det finns fortfarande tid kvar för fostret att lägga sig till rätta. Fostrets ögonbryn och ögonfransar har vuxit fram och i munnen håller mjölktänder på att bildas.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Graviditeten brukar delas in i tre delar (trimestrar). Du har nu klivit in i den tredje och sista delen av graviditeten. Den första trimestern utgör vecka 1–12, den andra trimestern utgör vecka 13–26 och den tredje trimestern utgör vecka 28–40.I den tredje trimestern börjar barnet bli riktigt stort och den sista delen av graviditeten kan ofta kännas som betydligt längre än de tidigare delarna.  Din livmoder börjar bli så pass stor att den kan påverka kroppens rörelser och ge ett obehagligt tryck upp emot revbenen och lungorna. Fortsätt att vara aktiv menundvik hård träning och kontaktsporter, din kropp kommer att säga ifrån om den anser att det blir för mycket.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Nu kliver du och din partner in i den sista delen av graviditeten, vecka 28–40 och ert beräknade förlossningsdatum kommer allt närmre. För att undvika och kunna hantera en stressad situation på bästa möjliga sätt (när det väl är skarpt läge) rekommenderar vi dig att åka vägen till ert förväntade förlossningssjukhus. På så sätt kan du ta er dit utan att bli allt för påverkad av situationen.'
        ]
      }
    ]
  },
  {
    week: 29,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 40 centimeter långt och väger ungefär 1,2 kilo. När det kommer till storlek och utseende börjar fostret att se ut som en liten bebis. De kvarvarande veckorna kommer din mage att fortsätta växa och fostret ska mer än fördubbla sin vikt, vilket innebär att de inre organen får det allt trängre. Du kan känna smärta eller sammandragningar när fostret sparkar dig mot revbenen eller slår mot din urinblåsa. Det är även möjligt att kunna se fostrets rörelser utanpå magen eller se utbuktningar på magen beroende på hur fostret ligger.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Du kan känna en strålande smärta från livmodern ner mot ljumsken och blygdläpparna, så kallade ligamentsmärtor. Ligamentsmärtor uppstår när livmodern växer och livmoderbanden som går från livmodern ner mot ljumsken töjs ut. Besvären kommer att gå över efter förlossningen då banden drar ihop sig.Om du ännu inte har tänkt eller bestämt dig för om du ska amma eller ge ersättning till ditt barn rekommenderar vi dig att prata med din MVC och din partner om vad som verkar bäst för dig. Att gå på en amningsföreläsning kan också vara bra för att få en bättre förståelse för amning och hela processen. Tänkpå att i slutändan är det du själv som bestämmer.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Din partner kan komma till dig med frågan om hon ska amma eller ge ersättning till ert kommande barn. Tänk på att du har en stor påverkan på din partners beslut och det är dig hon kommer att vända sig till när det känns jobbigt. Berätta för din partner att du gärna pratar med er MVC eller följer med på en amningsföreläsning för att lära dig mer om amning och hjälpa henne ta det beslutet som verkar bäst. Stötta din partner oavsett vilket beslut hon tar.'
        ]
      }
    ]
  },
  {
    week: 30,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 41 centimeter långt och väger ungefär 1,4 kilo. Fram till förlossningen kommer fostret att fortsätta växa och öka i vikt med ungefär 200 gram i veckan. Hur stort barnet blir beror dels på era gener men även på moderkakans storlek och kapacitet. Fostrets kropp har tidigare varit täckt av hår (lanugohår) för att hålla rätt kroppstemperatur. Håret börjar försvinna sakta men säkert eftersom hjärnan och fettcellerna nu kontrollerar kroppstemperaturen. Vid för tidigt födda barn kan det finnas en del hår kvar på kroppen som kommer att försvinna ett par veckor efter förlossningen. Om barnet föds vid beräknat förlossningsdatum kan det finnas lite fjun kvar på kroppen eller inget hår alls. '
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu borde det vara dags att besöka er barnmorska igen. Vid besöket kommer barnmorskan att kontrollera hur du mår, hur din livmoder växer, ditt blodtryck och att fostret mår bra. Vid behov kontrolleras även ditt blodvärde, ditt blodsocker samt ett urinprov. Veckorna kvar till förlossning kommer du att besökadin barnmorska mer regelbundet och ni kommer att ses varannan eller var tredje vecka.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Det är vanligt att din partner får tillbaka en del av sina gamla gravidsymptom som trötthet, humörförändringar och andfåddhet i slutet av graviditeten. Det är nu du ska hjälpa till så mycket du bara kan i vardagslivet med hushållssysslor för att underlätta de 10 sista veckorna för din partner.'
        ]
      }
    ]
  },
  {
    week: 31,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 43 centimeter långt och väger ungefär 1,6 kilo. Fostrets organ är nästintill färdigutvecklade förutom lungorna som blir färdigbildat sist av alla organ. Fram till förlossningen kommer fostret att lägga mycket fokus på att gå upp i vikt.Vilken ögonfärg fostret kommer att få bestäms runt den här veckan och beror på vilka gener fostret har ärvt från sina föräldrar. Ögonen behöver ljus för att pigmenten ska kunna bildas vilket innebär att fostrets riktiga ögonfärg inte kommer att visa sig förrän 6 till 9 månader efter förlossningen'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu är det inte långt kvar och du börjar kanske förbereda dig mentalt inför din förlossning. Om du ännu inte har gjort det rekommenderar vi dig att skriva ett förlossningsbrev så att din partner och förlossningspersonal vet vad du är orolig för eller önskar under förlossningen. Det är omöjligt att i förhand veta hur en förlossning kommer att bli, men att skriva ett förlossningsbrev är en bra förberedelse. Tänk på det är du själv som bestämmer vad som ska stå i brevet och hur långt det ska vara. '
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Din partner har redan eller håller kanske på och skriver ett förlossningsbrev. I förlossningsbrevet tar din partner upp tankar, orosmoment och önskemål kring förlossningen. Prata med din partner för att veta hur hon vill att du ska bete dig under förlossningen och vilken roll du ska ta för att kunna stötta henne på bästa möjliga sätt. Glöm inte bort att berätta för din partner om dina tankar, önskemål eller rädslor kring förlossningen, det kan också vara bra att ha med i förlossningsbrevet.'
        ]
      }
    ]
  },
  {
    week: 32,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 44 centimeter långt och väger ungefär 1,8 kilo. Utrymmet i fostervattnet är begränsat och fostret får anstränga sig för att kunna röra sig fritt.Fostret är nu så pass stort att när det sparkar eller slår blir det mer som knuffar. Mycket av fostrets utveckling ligger i att få igång hjärnaktiviteten och anslutningar mellan nervceller. Fostrets fem sinnen är utvecklade och fullt fungerande och fostret kan både uppfatta ljud, reagera på ljus samt känna smärta och smak. Däremot kommer fostret inte att kunna känna lukt förrän efter födsel och sitt första andetag. Så länge fostret ligger i fostervattnet så andas det inte, vilket innebär att det inte kommer kunna känna någon lukt. '
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Under den senare delen av graviditeten är det vanligt att drabbas av magproblem och förstoppning. Det finns olika orsaker till magproblemen men detkan bero på att dina inre organ som lungor, magsäck och urinblåsa har fått ett begränsat utrymme på grund av den stora magen. Om du snabbt känner dig mätt när du äter beror det på att magsäcken har blivit hoppressad, försök att äta mindre portioner men oftare. Om du har en stillasittande livsstil eller äter järntabletter så rekommenderar vi dig att dricka mycket vatten, äta mycket fibreroch hålla dig aktiv för att minska dina magsymptom. '
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Har din partner eller du packat en förlossningsväska som ni ska ta med er till förlossningen? Glöm inte bort att packa din egen förlossningsväska med saker som kan vara lämpliga att ha med sig. Det kan vara allt ifrån ombyte, underkläder och deodorant till mobil, mobilladdare och hörlurar.'
        ]
      }
    ]
  },
  {
    week: 33,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 45 centimeter långt och väger ungefär 2 kilo. Fram till förlossningen kommer fostret att fortsätta öka i vikt med cirka 200 gram i veckan. Fostervattnet har nått sin lägstanivå och kommer inte att fortsätta öka i mängd. Det finns ungefär 1 liter fostervatten vilket innebär att det nu finns mer foster än vätska i livmodern. Fostervattnet hjälper fostret att röra på sig och undviker att livmodern trycker direkt mot fostret.',
          'Fostrets naglar har vuxit och blivit så pass långa att de täcker fingertopparna. Fostret kan riva sig själv i ansiktet inne i magen men det är inget att oroa sig för. Vid födsel kan naglarna behöva klippas ned för att undvika att barnet river sig själv.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu är det troligtvis dags för ett återbesök hos din barnmorska, om din barnmorska ännu inte har sagt något kan du fråga om du har en ökad risk för havandeskapsförgiftning. Två tecken på att du håller på att få havandeskapsförgiftning är om det finns protein i urinen eller om ditt blodtryck börjar att stiga. Havandeskapsförgiftning kommer vanligtvis efter vecka 34 och en del kvinnor upplever inga symptom alls medan andra kan uppleva symptom som: plötslig huvudvärk, illamående, synbesvär eller plötslig svullnad i ansiktet, händer eller fötter. Sök vård direkt hos en förlossningsmottagning om du får svåra besvär.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Du kanske upplever att din partner är glömsk och klumpig, oroa dig inte, det är vanliga symptom under graviditeten och beror på gravidhormonerna, din partners stora och tunga kropp samt stress. Försök att ha förstående för din partner och bli inte irriterad om hon inte kommer ihåg vad hon sagt eller glömmer bort vad ni ska göra. Tänk på att du kan behöva upprepa saker flera gånger och vara väldigt tydlig i din kommunikation.'
        ]
      }
    ]
  },
  {
    week: 34,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 46 centimeter långt och väger ungefär 2,3 kilo. Om fostret skulle födas nu räknas det fortfarande som prematur/för tidigt fött. Barnet skulle klara av att andas själv och inte behöva ligga i kuvös men troligtvis behöva hjälp med att få i sig näring och hålla rätt kroppstemperatur.',
          'Majoriteten av alla foster ligger redan med huvudet nedåt i födelsekanalen (bäckeningången) inför förlossningen. Drygt 5% av alla foster ligger med benen eller stjärten nedåt i bäckeningången, om sätesbjudning upptäcks kommer ett vändningsförsök att göras för att få fostret att lägga sig rätt.',
          'Vid ett vändningsförsök kommer en läkare att trycka med sina händer på din mage för att få fostret att vända sig till rätt position. Ibland fungerar inte vändningsförsöket och då kan läkaren rekommendera ett nytt vändningsförsök, kejsarsnitt eller vaginal förlossning beroende på omständigheterna.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Du kanske känner att din livmoder drar ihop sig och bli alldeles spänd, det kallas förvärkar och beror på att din livmoder håller på och tränar inför förlossningen. När din kropp börjar bli redo för förlossning övergår sammandragningarna till förvärkar. Förvärkar kommer regelbundet och känns ofta som värk från ländryggen och ner mot ljumskarna. En del förvärkar känns mycket, en del känns mindre och en del känns inte alls. Förvärkar kan kännas obehagligt men brukar vanligtvis inte vara förknippat med stor smärta, riktigt starka förvärkar brukar jämföras med mensvärk. Om dina värkar blir mer regelbundna eller du upptäcker blod eller mycket slem i samband med värkarna ska du kontakta vården.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Om du har börjat fixa väldigt mycket hemma för att ditt barn ska komma hem så är det inget ovanligt, det är ett fenomen som kallas för ”boa”. Vad du köper och fixar med i hemmet är väldigt individuellt och att boa handlar inte bara om att det är mysigt, utan det handlar om att vara väl förberedd inför ditt kommande barns hemkomst.'
        ]
      }
    ]
  },
  {
    week: 35,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 47 centimeter långt och väger ungefär 2,4 kilo. Fostret har en fettprocent på 15% och huden som är tjockare, mindre genomskinlig och lenare än tidigare är nu täckt med skyddande fosterfett. Om fostret skulle födas nu skulle huden vara vit, insmord och kletig av allt fett och det ludna hår som tidigare funnits på kroppen skulle vara borta.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Din livmoder har blivit så stor att den känns upp mot revbenen, din mage står vid den här veckan som högst och barnet trycker på överallt på dina inre organ. Det är vanligt att uppleva andfåddhet och svårigheter att andas på grund av magens höga position. Magen kommer de kommande veckorna fram till förlossningen att sjunka ner lite när fostret lägger sig tillrätta i bäckenet, vilket kommer göra det lättare för dig att andas igen.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Trots att din partner har en stor mage och att det inte är många veckor kvar till beräknat förlossningsdatum så är det inte skadligt för din partner eller för fostret med samlag. Om din partner vill och känner sig bekväm med samlag är det ingenting du behöver oroa dig för. Tänk på att magen kan vara i vägen och hitta en ställning som är bekväm för er båda.'
        ]
      }
    ]
  },
  {
    week: 36,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 47 centimeter långt och väger ungefär 2,8 kilo. Hjärnan är färdigväxt och dess kritiska fas är över. Fostrets blodcirkulation fungerar som den ska och immunförsvaret är tillräckligt utvecklat för att kunna skydda barnet mot virus, bakterier och sjukdomar i ett liv utanför magen. Fostret förbereder sig på att födas och har längre perioder av aktivitet och sömn.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Din mage kommer sakta men säkert att sjunka ner till en lägre position och förhoppningsvis kommer det bli lättare för dig att andas. Att magen sänker sig beror på att fostret sjunker ner i ditt bäcken och förbereder sig inför förlossningen. Tyvärr kan fostret och magens nya position göra det otympligt för dig att gå och du kan behöva vicka fram och tillbaka när du går för att göra det mindre obekvämt. Eftersom din livmoder nu trycker på urinblåsan kan du behöva springa och kissa mer än vanligt, trots det får du inte glömma att få i dig mycket vätska.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Nu är det inte långt kvar tills dess att barnet ska eller kan komma. Vi rekommenderar dig att skippa alkoholen helt och hållet de veckorna som är kvar för att kunna köra bil vilken dag och tid som helst.  Oavsett om du kör bil eller inte så avstå från alkoholen, du kommer behöva vara i full sinnesnärvaro eftersom det kan uppstå stressade eller oväntade situationer.'
        ]
      }
    ]
  },
  {
    week: 37,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 48 centimeter långt och väger ungefär 3 kilo. Fostret tränar på att andas genom att dra in och trycka ut fostervatten. För att barnet ska kunna amma efter förlossning tränar fostret sina sugreflexer genom att suga på sin tumme. För att klara av de eventuella påfrestningar som uppstår vid en förlossning samlar fostret extra näring i sina organ som hen kan använda.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu är det troligtvis dags för ett återbesök hos barnmorskan för att kontrollera hur din livmoder och foster växer samt sammanfatta graviditeten i din mödravårdsjournal. Vid besöket kommer dina värden att kontrolleras och barnmorskan kommer att lyssna på fostrets hjärta, vid behov kommer ytterligare ett urinprov att tas. Om fostrets huvud har sjunkit ännu längre ner i bäckenet och inte längre går att justera utifrån brukar barnmorskan säga att huvudet är fixerat.',
          'Tänk på att du bör känna fostrets rörelser varje dag, om du inte känner fostrets rörelser dagligen ska du kontakta din barnmorskemottagning eller förlossningssjukhus.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Tänk på att du har rätt att få ersättning för 10-dagars ledighet i samband med att barnet föds. Ersättningen heter tillfällig föräldrapenning och ska ge dig en möjlighet att få vara med ditt barn och knyta band den första tiden samt stötta din partner. Du måste ansöka om tillfällig föräldrapenning hos försäkringskassan.'
        ]
      }
    ]
  },
  {
    week: 38,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 49 centimeter långt och väger ungefär 3 kilo. I Sverige föds de flesta barn mellan vecka 37+0 och vecka 41+6. Beräknat från befruktningsögonblicket betraktas nu fostret som fullgånget och är redo för att födas. Fram till förlossningen kommer fostret att fortsätta växa och lägga på sig mer fett och det ludna hår (lanugohår) och vita fettlager (vernix) som tidigare har funnit på fostrets hud är till största delen försvunnet. Om fostret är en pojke kommer hans testiklar nu att vandra ner i pungen och om det är en flicka kommer hennes blygdläppar att bli fullt utvecklade.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'I din livmodertapp finns slemproppen, för att underlätta förlossningen börjar din livmodertapp i regel att mjukas upp, förkortas och öppna sig. När det sker kan du uppleva ökade flytningar eller hela klumpar i dina trosor eller när du torkar dig efter ett toalettbesök. Att slemproppen har lossnat är en tidig indikation på att förlossningen börjar närma sig, men det innebär nödvändigtvis inte att förlossningen är på gång.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Ditt kommande barn är nu fullgånget och redo för att födas. I Sverige föds de flesta barn mellan vecka 37+0 och vecka 41+6. Titta gärna på förlossningsfilmer för att vara förbered och förstå vad det är som händer på förlossningssjukhuset och under förlossningens olika faser.'
        ]
      }
    ]
  },
  {
    week: 39,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 50 centimeter långt och väger ungefär 3,2 kilo. Fostret känner på sig att förlossningen närmar sig och samlar därför på sig mycket energi och antikroppar från moderkakan som kommer att skydda barnet den första tiden. Om en eventuell syrebrist skulle uppstå vid förlossningen har fostrets hjärta och lever lagrat näring som fostret kan utnyttja samt använda som reservdepå de första dygnen. Fostrets hjärna kommer fortsätta att utvecklas under lång tid och kommer inte vara färdigt förrän barnet är cirka två år.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Det är vanligt att dina bröst läcker mjölk, så kallad råmjölk. Råmjölken är en tunn gulaktig vätska som är extra nyttig för barnet eftersom den innehåller mycket protein och mindre fett och socker än bröstmjölken. Råmjölken är barnets första kost och innehåller även antikroppar som ger ett visst skydd mot infektioner. Det kan ta några dagar innan råmjölken övergår till mogen bröstmjölk och fram till dess kommer barnet att livnära sig på den.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Snart är förlossningen här och om det är ert första barn ska du vara förberedd på att förlossningen kan ta ett par dagar. Försök att vila så mycket du kan så att du är väl förberedd och har krafter för ett par dygn utan någon sömn.'
        ]
      }
    ]
  },
  {
    week: 40,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är cirka 51 centimeter långt och väger ungefär 3,6 kilo. Moderkakan kommer fortsätta ge fostret näring och vid födsel kommer moderkakan att lossna från livmoderväggen. När barnet tar sina första andetag efter födsel kommer navelsträngen att sluta transportera syre till fostret och barnet kommer att andas på egen hand. Om det upptäcks att navelsträngen har fastnat eller är på väg att fastna runt barnets hals kommer vårdpersonalen att agera därefter, annars kommer navelsträngen att klippas ett par minuter efter födseln.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu är graviditeten i antalet veckor fullgången och många kvinnor försöker med olika huskurer att få igång förlossningen. Det är tyvärr inte möjligt oavsett vad du har läst, vad dina bekanta säger eller vad du tror. En förlossning kan inte tvingas igång och barnet kommer att komma när det känner sig redo. Om du är otålig ska du försöka fokusera på att göra andra saker än att leva i en konstant väntan.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Om du och din partner inte är gifta måste du ansöka och skriva under en blankett gällande föräldraskap hos socialstyrelsen som intygar att du är medförälder. Tillsammans med din partner kommer ni även att skriva under om ni ska ha gemensam vårdnad av barnet eller någon annan lösning.'
        ]
      }
    ]
  },
  {
    week: 41,
    categories: [
      {
        context: 'baby',
        sections: [
          'Fostret är färdigutvecklat och det händer inte så mycket i dess utveckling. Att förlossningen ännu inte har satts igång betyder inte att det är en överburen graviditet, en graviditet räknas som överburen när du har varit gravid i mer än 42 veckor. Förlossningen kommer att sättas igång när fostret väl är redo och majoriteten av alla barn kommer att födas innan vecka 43. Efter 43 fullgångna graviditetsveckor börjar moderkakan gradvis att fungera sämre och kan inte längre ge fostret den näring som behövs, vilket innebär att förlossningen brukar sättas igång innan dess.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'Nu har ditt beräknade förlossningsdatum passerat och det kan vara frustrerande att förlossningen ännu inte har satts igång. Genom att vara gravid länge hinner din kropp mogna, din livmodertapp blir mjuk och hormonet relaxin mjukar upp dina bäckenfogar ytterligare. Alla dessa förberedelser är fördelar som kan komma att underlätta din förlossning.',
          'Från vecka 40 kommer du att träffa din barnmorska varje vecka för att göra de vanliga kontrollerna samt få information om en eventuell igångsättning.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'Din partner har nu gått över ert beräknade förlossningsdatum men hon räknas ännu inte som en överburen graviditet, det görs först när din partner har varit gravid i mer än 42 veckor. När barnet väl är fött kommer familj och vänner att vilja hälsa på er för att få träffa ert barn. Ett tips för att vara förberedda på besök och få den sista graviditetstiden att gå snabbare är att baka eller laga mat som ni kan frysa in och ta fram när ni får gäster.'
        ]
      }
    ]
  },
  {
    week: 42,
    categories: [
      {
        context: 'baby',
        sections: [
          'När du har varit gravid i mer än 42 veckor kallas graviditeten för överburen. Det finns olika anledningar till varför du har gått över tiden men det kan bero på om du är förstföderska, om du är äldre än 30 år, om du har fetma eller att du väntar en pojke, ungefär 5% av alla kvinnor får en överburen graviditet.',
          'När graviditeten har gått två veckor över tiden finns det olika alternativ för förlossning som du kommer att få diskutera med en läkare. Tillsammans kommer ni att välja det alternativet som är mest lämpligt för dig och ditt barn. Det kan antingen vara att fortsätta din graviditet och komma på undersökningar varannan dag för att se om förlossningen är på gång. Du kan bli igångsatt vilket innebär att du får hjälp med att sätta igång en vaginal förlossning. Alternativet till en vaginal förlossning är kejsarsnitt, om det är nödvändigt för ditt eller barnet tillstånd kan du behöva föda via kejsarsnitt.',
          'Tänk på att du själv kan och ska vara med och påverka det som passar dig bäst.'
        ]
      },
      {
        context: 'Mother',
        sections: [
          'När du har varit gravid i mer än 42 veckor kallas graviditeten för överburen. Det finns olika anledningar till varför du har gått över tiden men det kan bero på om du är förstföderska, om du är äldre än 30 år, om du har fetma eller att du väntar en pojke, ungefär 5% av alla kvinnor får en överburen graviditet.',
          'När graviditeten har gått två veckor över tiden finns det olika alternativ för förlossning som du kommer att få diskutera med en läkare. Tillsammans kommer ni att välja det alternativet som är mest lämpligt för dig och ditt barn. Det kan antingen vara att fortsätta din graviditet och komma på undersökningar varannan dag för att se om förlossningen är på gång. Du kan bli igångsatt vilket innebär att du får hjälp med att sätta igång en vaginal förlossning. Alternativet till en vaginal förlossning är kejsarsnitt, om det är nödvändigt för ditt eller barnet tillstånd kan du behöva föda via kejsarsnitt.',
          'Tänk på att du själv kan och ska vara med och påverka det som passar dig bäst.'
        ]
      },
      {
        context: 'Partner',
        sections: [
          'När du har varit gravid i mer än 42 veckor kallas graviditeten för överburen. Det finns olika anledningar till varför du har gått över tiden men det kan bero på om du är förstföderska, om du är äldre än 30 år, om du har fetma eller att du väntar en pojke, ungefär 5% av alla kvinnor får en överburen graviditet.',
          'När graviditeten har gått två veckor över tiden finns det olika alternativ för förlossning som du kommer att få diskutera med en läkare. Tillsammans kommer ni att välja det alternativet som är mest lämpligt för dig och ditt barn. Det kan antingen vara att fortsätta din graviditet och komma på undersökningar varannan dag för att se om förlossningen är på gång. Du kan bli igångsatt vilket innebär att du får hjälp med att sätta igång en vaginal förlossning. Alternativet till en vaginal förlossning är kejsarsnitt, om det är nödvändigt för ditt eller barnet tillstånd kan du behöva föda via kejsarsnitt.',
          'Tänk på att du själv kan och ska vara med och påverka det som passar dig bäst.'
        ]
      }
    ]
  }
]

export default weekArticles
