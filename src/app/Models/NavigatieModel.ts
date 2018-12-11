import { ThemaModel } from './ThemaModel';
import { VaardigheidModel } from './VaardigheidModel';
import { DoelModel } from './DoelModel';

export class NavigatieModel {
    public themas: ThemaModel[];
    public vaardigheden: VaardigheidModel[];
    public doelen: DoelModel[];
    constructor() {
        this.themas = [
            new ThemaModel('SE', 'Socio-emotionele ontwikkeling', 'rgb(233, 37, 45)', 'far fa-heart'),
            new ThemaModel('IK', 'Ontwikkeling van een innerlijk kompas', 'rgb(237, 121, 40)', 'far fa-compass'),
            new ThemaModel('IV', 'Ontwikkeling van initiatief en verantwoordelijkheid', 'rgb(247, 152, 57)', 'far fa-paper-plane'),
            new ThemaModel('MZ', 'Motorische en zintuiglijke ontwikkeling', 'rgb(246, 189, 22)', 'fas fa-running'),
            new ThemaModel('OW', 'Ontwikkeling van oriëntatie op de wereld', 'rgb(177, 208, 61)', 'fas fa-globe-americas'),
            new ThemaModel('ME', 'Mediakundige ontwikkeling', 'rgb(140, 184, 58)', 'fas fa-camera'),
            new ThemaModel('MU', 'Muzische ontwikkeling', 'rgb(70, 185, 143)', 'fas fa-music'),
            new ThemaModel('TO', 'Taalontwikkeling', 'rgb(110, 205, 226)', 'far fa-comment-dots'),
            new ThemaModel('WD', 'Ontwikkeling van wiskundig denken', 'rgb(10, 130, 190)', 'fas fa-calculator'),
            new ThemaModel('RK', 'Rooms-katholieke godsdienst', 'rgb(91, 84, 164)', 'fas fa-bible'),
        ];
        this.vaardigheden = [
            // 0
            new VaardigheidModel('rv', 'Relationele vaardigheden',
                `Ik wil en kan met anderen samenleven, samenwerken en communiceren.`, 'SE'),
            new VaardigheidModel('gb', 'Omgaan met gevoelens en behoeften',
                `Ik kan omgaan met gevoelens en behoeften van mezelf en anderen.`, 'SE'),
            new VaardigheidModel('iv', 'Inlevingsvermogen',
                `Ik kan me inleven in anderen, in andere standpunten en situaties.`, 'SE'),
            new VaardigheidModel('sb', 'Seksueel bewustzijn',
                `Ik word me bewust van mijn seksuele ontwikkeling. Ik respecteer mijn seksuele identiteit en die van anderen.`, 'SE'),
            // 1
            new VaardigheidModel('id', 'Identiteit',
                `Ik ontdek wie ik ben, waartoe ik word uitgenodigd en wie ik wil worden in een groter geheel. Ik durf en mag
                mezelf zijn.`, 'IK'),
            new VaardigheidModel('lg', 'Levensbeschouwelijke grondhouding',
                `Ik sta stil bij levensvragen en ga daarover in dialoog met de christelijke geloofstraditie en andere
                levensbeschouwingen.`, 'IK'),
            new VaardigheidModel('wn', 'Waarde gevoeligheid en normsbesef',
                `Ik ben gevoelig voor en kan nadenken over wat waardevol is voor mezelf, voor anderen en mijn omgeving.
                Ik handel gewetensvol.`, 'IK'),
            new VaardigheidModel('vk', 'Veerkracht',
                `Ik geloof in mijn ontwikkelkracht en kan genieten. Ik ben op een passende manier weerbaar. Ik geloof dat ik
                ondanks tegenslag en ontmoediging steeds weer kan opstaan.`, 'IK'),
            // 2
            new VaardigheidModel('zv', 'Zelfregulerend vermogen',
                `Ik ervaar hoe ik mezelf kan aansturen. Ik kan zelfredzaam en efficiënt handelen en leren.`, 'IV'),
            new VaardigheidModel('oc', 'Onderzoekscompetentie',
                `Ik ben nieuwsgierig en kritisch. Ik wil en kan de wereld rondom mij onderzoeken.`, 'IV'),
            new VaardigheidModel('oz', 'Onderzoekscompetentie',
                `Ik zoek naar creatieve oplossingen. Ik neem initiatief en durf iets teweeg brengen dat voor mezelf
                vernieuwend en grensverleggend is.`, 'IV'),
            new VaardigheidModel('gv', 'Gezonde en veilige levenstijl',
                `Ik leef gezond. Ik heb oog voor mijn eigen veiligheid en die van anderen.`, 'IV'),
            new VaardigheidModel('ds', 'Engagement voor duurzame levenstijl',
                `Ik denk na over en werk aan een leefbare wereld, nu en in de toekomst, voor mezelf en anderen
                hier en elders op de planeet.`, 'IV'),
            // 3
            new VaardigheidModel('zo', 'Zintuiglijke ontwikkeling',
                `Ik kan mijn zintuigen optimaal gebruiken.`, 'MZ'),
            new VaardigheidModel('lb', 'Lichaams- en bewegingsperceptie',
                `Ik ken mijn lichaam en beschik over een goede lichaamscoördinatie .`, 'MZ'),
            new VaardigheidModel('rt', 'Omgaan met bewegingsruimte- en tijd',
                `Ik kan mijn bewegingen afstemmen op tijd en ruimte.`, 'MZ'),
            new VaardigheidModel('gm', 'Grootmotorisch bewegen',
                `Ik beweeg vlot en behendig.`, 'MZ'),
            new VaardigheidModel('km', 'Kleinmotorisch bewegen',
                `Ik ben behendig in manipulatieve handelingen en kan functionele grepen gedifferentieerd gebruiken.
                Ik beheers mijn spraak- en gezichtsmotoriek en schrijf vloeiend.`, 'MZ'),
            // 4
            new VaardigheidModel('sa', 'Oriëntatie op de samenleveing',
                `Ik ben nieuwsgierig naar en draag bij tot het samenleven van mensen. Ik zie in hoe samenlevingen functioneren.`, 'OW'),
            new VaardigheidModel('bc', 'Oriëntatie op bewegingscultuur',
                `Ik ben geïnteresseerd in bewegingscultuur . Ik speel, sport en beweeg.`, 'OW'),
            new VaardigheidModel('ti', 'Oriëntatie op tijd',
                `Ik ben nieuwsgierig naar evolutie en ontwikkel historisch besef. Ik kan tijd inschatten, plannen en ordenen.`, 'OW'),
            new VaardigheidModel('ru', 'Oriëntatie op de ruimte',
                `Ik verken en waardeer mijn omgeving en ontwikkel geografisch besef. Ik beweeg me veilig in het verkeer.`, 'OW'),
            new VaardigheidModel('te', 'Oriëntatie op techniek',
                `Ik ben nieuwsgierig naar technische systemen en processen en pas ze toe. Ik zie in hoe techniek ,
                wetenschap en samenleving elkaar beïnvloeden.`, 'OW'),
            new VaardigheidModel('na', 'Oriëntatie op natuur',
                `Ik verken de natuur en ben er dankbaar voor. Ik wil meer te weten komen over de natuur en de kosmos.`, 'OW'),
            // 5
            new VaardigheidModel('mw', 'Mediawijsheid',
                `Ik sta open voor en ga wijs om met media.`, 'ME'),
            new VaardigheidModel('ge', 'Mediegeletterdheid',
                `Ik ben me bewust van de eigenheid van verschillende media en hun
                toepassingen. Ik zet media creatief en doelgericht in.`, 'ME'),
            new VaardigheidModel('va', 'Mediavaardigheid',
                `Ik gebruik mediamiddelen efficiënt.`, 'ME'),
            // 6
            new VaardigheidModel('gr', 'Muzische grondhouding',
                `Ik sta open voor het kunstzinnige. Ik durf verbeelden en creatief vorm geven.`, 'MU'),
            new VaardigheidModel('ge', 'Muzische geletterdheid',
                `Ik ben me bewust van de eigenheid van beeld, muziek, dans en drama. Ik kan muzisch uitdrukken wat in me leeft.`, 'MU'),
            new VaardigheidModel('va', 'Muzische vaardigheid',
                `Ik beschik over voldoende technische en instrumentele kennis en vaardigheid om me
                creatief en kunstzinnig te uiten.`, 'MU'),
            // 7
            new VaardigheidModel('tg', 'Talige grondhouding',
                `Ik sta open voor talen en talige diversiteit. Ik durf en wil me zo goed mogelijk (meer)talig uitdrukken.`, 'TO'),
            new VaardigheidModel('mn', 'Mondelinge taalvaardigheid Nederlands',
                `Ik begrijp en breng een mondelinge boodschap over in betekenisvolle situaties.`, 'TO'),
            new VaardigheidModel('mf', 'Mondelinge taalvaardigheid Frans',
                `Ik begrijp en breng een mondelinge boodschap in het Frans over in betekenisvolle situaties.`, 'TO'),
            new VaardigheidModel('sn', 'Schriftelijke taalvaardigheid Nederlands',
                `Ik begrijp en breng een schriftelijke boodschap over in betekenisvolle situaties.`, 'TO'),
            new VaardigheidModel('sf', 'Schriftelijke taalvaardigheid Frans',
                `Ik begrijp een schriftelijke boodschap in het Frans. Ik breng ze met hulpmiddelen over
                in betekenisvolle situaties.`, 'TO'),
            new VaardigheidModel('tn', 'Taalbeschouwing Nederlands',
                `Ik denk in of vanuit een betekenisvolle situatie na over taal, over mijn taalgebruik en dat van anderen.
                Ik pas de inzichten toe in mijn talig handelen.`, 'TO'),
            // 8
            new VaardigheidModel('lw', 'Logisch en wiskundig denken',
                `Ik kan logisch redeneren en zet wiskunde handig en inzichtelijk in.`, 'WD'),
            new VaardigheidModel('gk', 'Getallenkennis',
                `Ik ben thuis in de wereld van getallen.`, 'WD'),
            new VaardigheidModel('rv', 'Rekenvaardigheid',
                `Ik reken handig en kies de meest geschikte rekenwijze.`, 'WD'),
            new VaardigheidModel('mk', 'Rekenvaardigheid',
                `Ik verwerf inzicht in de ruimte, in meetkundige objecten en in meetkundige relaties.`, 'WD'),
            new VaardigheidModel('mm', 'Meten en metend rekenen',
                `k ontwikkel maatbesef en ken referentiematen. Ik meet en reken met standaardeenheden.`, 'WD'),
            // 9
            new VaardigheidModel('lg', 'Levensbeschouwelijke, religieus en/of godsdienstig groeien',
                `Ik oriënteer mij doorheen de ontmoeting met anderen in een proces van zin zoeken en zin ontvangen.`, 'RK'),
            new VaardigheidModel('vm', 'Vertrouwen en wantrouwen, mogelijkheden en beperkingen',
                `Ik ontdek, doorheen mogelijkheden en beperkingen, dat vertrouwen kan groeien in mezelf en in andere mensen
                en dat dit voor christenen kan groeien dankzij een liefdevolle God.`, 'RK'),
            new VaardigheidModel('ve', 'Verbondenheid met zichzelf, andere, gemeenschappen, natuur en cultuur',
                `Ik ontwikkel een cultuur van innerlijkheid. Ik groei in verbondenheid met mezelf, anderen en gemeenschappen en
                ontdek hoe God voor christenen bron van liefde is. Ik kom tot bewondering voor het scheppingswerk van God en mens.`, 'RK'),
            new VaardigheidModel('gk', 'Gevoeligheid voor goed en kwaad',
                `Ik ga bewust om met goed en kwaad. Ik laat me inspireren door Jezus en mensen die zoals Hij anderen
                liefhebben in hun kwetsbaarheid en kracht.`, 'RK'),
            new VaardigheidModel('gs', 'Openkomen voor geloofstaal, symboliek en rituelen',
                `Ik word vertrouwd met symbolen, geloofstaal, Bijbelverhalen, rituelen en vieringen.
                Hierin kom ik een diepere dimensie van het leven op het spoor.`, 'RK'),
        ];
        this.doelen = [
        //////// 0
        // 0
            new DoelModel(0, 'SErv', `Zich engageren in relaties, daar deugd aan beleven en zich daarover uitdrukken`, 0),
            new DoelModel(1, 'SErv', `De verscheidenheid van mensen als een rijkdom ervaren en deze benutten`, 0),
            new DoelModel(2, 'SErv', `Samenwerken met anderen en zo bijdragen aan het realiseren van een gemeenschappelijk doel`, 0),
            new DoelModel(3, 'SErv', `Bewust sociale rollen opnemen die zowel het individueel als het groepsbelang ten goede komen in
                                        diverse situaties en contexten`, 0),
            new DoelModel(4, 'SErv', `Oplossingsgericht omgaan met conflictsituaties, in respect voor zichzelf en de ander(en)`, 0),
        // 1
            new DoelModel(1, 'SEgb', `Gevoelens en behoeften bij zichzelf en anderen beleven, aanvaarden, herkennen en in
                                        taal uitdrukken`, 1),
            new DoelModel(2, 'SEgb', `Bewust omgaan met gevoelens en behoeften en deze binnen aanvaardbare grenzen uiten.
                                        Zelfbeheersing ontwikkelen`, 1),
            new DoelModel(3, 'SEgb', `Zoeken naar mogelijkheden om, in respect voor zichzelf en de ander, aan eigen behoeften en
                                        die van anderen tegemoet te komen`, 1),
        // 2
            new DoelModel(1, 'SEiv', `Zich inleven in anderen, andere standpunten en situaties, zonder de eigen identiteit
                                        te verliezen`, 2),
            new DoelModel(2, 'SEiv', `De eigenheid en grenzen van anderen respecteren`, 2),
            new DoelModel(3, 'SEiv', `In het eigen gedrag rekening houden met de gevoelens en de behoeften van anderen
                                        zonder zichzelf te verliezen`, 2),
        // 3
            new DoelModel(1, 'SEsb', `Ervaren hoe mensen met de mogelijkheden van hun lichaam uitdrukking geven aan
                                        liefde en tederheid`, 3),
            new DoelModel(2, 'SEsb', `Gezond en liefdevol fysiek contact ervaren en erkennen als een basisbehoefte`, 3),
            new DoelModel(3, 'SEsb', `Respectvol en met de gepaste taal communiceren over seksualiteit`, 3),
            new DoelModel(4, 'SEsb', `Genderbewust zijn, gendervriendelijk handelen en verschillende relatievormen (h)erkennen`, 3),
        //////// 1
        // 4
            new DoelModel(1, 'IKid', `Basisvertrouwen ontwikkelen`, 4),
            new DoelModel(2, 'IKid', `Een positief, realistisch zelfbeeld opbouwen`, 4),
            new DoelModel(3, 'IKid', `Zichzelf worden in verbondenheid met anderen`, 4),
        // 5
            new DoelModel(1, 'IKlg', `Dieper ingaan op de eigen levensbeschouwelijke en spirituele ontvankelijkheid en groei`, 5),
            new DoelModel(2, 'IKlg', `De eigen levensbeschouwelijke en spirituele kijk verruimen door in ontmoeting en in
                                        dialoog te treden met anderen`, 5),
        // 6
            new DoelModel(1, 'IKwn', `Gevoelig zijn voor wat zinvol, goed, schoon, waardevol … is voor zichzelf én voor anderen.
                                        Een persoonlijk geweten ontwikkelen`, 6),
            new DoelModel(2, 'IKwn', `Gewetensvol en verantwoord handelen`, 6),
            new DoelModel(3, 'IKwn', `Ervaren hoe waarden en normen kunnen verschillen naar gelang de context en de
                                        levensbeschouwelijke traditie`, 6),
        // 7
            new DoelModel(1, 'IKvk', `Plezier beleven en voldoening ervaren bij spelen, leren en leven`, 7),
            new DoelModel(2, 'IKvk', `Hoopvol geloven in en vertrouwen op de eigen leef-, leer- en ontwikkelkracht`, 7),
            new DoelModel(3, 'IKvk', `Flexibel omgaan met veranderende omstandigheden`, 7),
            new DoelModel(4, 'IKvk', `Situaties die als moeilijk ervaren worden en frustraties ombuigen door te zoeken
                                        naar mogelijkheden om er bevrijdend mee om te gaan`, 7),
            new DoelModel(5, 'IKvk', `Grensoverschrijdend gedrag herkennen en er weerbaar mee omgaan`, 7),
        //////// 2
        // 8
            new DoelModel(1, 'IVzv', `Keuzes willen, durven en kunnen maken door betekenis te geven aan die keuzes en
                                        daar de verantwoordelijkheid voor opnemen`, 8),
            new DoelModel(2, 'IVzv', `Op een efficiënte manier informatie en leerervaringen opnemen, verwerken,
                                        weergeven (delen) en deze onthouden en inzetten bij nieuwe ervaringen en in
                                        complexere situaties`, 8),
            new DoelModel(3, 'IVzv', `Doelgericht en efficiënt handelen door taken te plannen, uit te voeren, erop te reflecteren
                                        en waar nodig bij te sturen in functie van zelfredzaam en zelfstandig functioneren`, 8),
            new DoelModel(4, 'IVzv', `Specifieke strategieën inzetten om vragen, opdrachten, uitdagingen en problemen
                                        efficiënt aan te pakken`, 8),
            new DoelModel(5, 'IVzv', `Op een constructieve manier met feedback omgaan`, 8),
        // 9
            new DoelModel(1, 'IVoc', `Nieuwsgierig zijn naar en bereidheid tonen om het nieuwe te ontdekken en erover te leren`, 9),
            new DoelModel(2, 'IVoc', `Exploreren en experimenteren in de wereld rondom zich`, 9),
            new DoelModel(3, 'IVoc', `Onderzoeksvragen formuleren, naar een antwoord zoeken en bevindingen formuleren`, 9),
            new DoelModel(4, 'IVoc', `Alleen en met anderen kritisch reflecteren op ervaringen en bevindingen en daaruit leren`, 9),
            new DoelModel(5, 'IVoc', `Informatiebronnen hanteren`, 9),
        // 10
            new DoelModel(1, 'IVoz', `Initiatief nemen. Een eigen idee, beweging, project of activiteit enthousiast en
                                        volhardend vorm en inhoud geven`, 10),
            new DoelModel(2, 'IVoz', `Creatief denken en daarbij nieuwe paden durven bewandelen`, 10),
            new DoelModel(3, 'IVoz', `Noden en uitdagingen detecteren en er mogelijkheden en innovatieve oplossingen voor bedenken`, 10),
        // 11
            new DoelModel(1, 'IVgv', `Zorg dragen voor de eigen mentale, sociale en fysieke gezondheid en veiligheid en die van
                                        anderen en daarbij aandacht hebben voor:`, 11),
            new DoelModel(2, 'IVgv', `Inschatten hoe gedrags- en omgevingsfactoren de gezondheid en veiligheid beïnvloeden en op
                                        basis daarvan, binnen veilige grenzen, risico’s durven nemen`, 11),
            new DoelModel(3, 'IVgv', `Bereid zijn steun te vragen en/of te geven om de eigen gezondheid en veiligheid, en die
                                        van anderen te bewaken`, 11),
        // 12
            new DoelModel(1, 'IVds', `De complexiteit van gebeurtenissen in de wereld ervaren, vaststellen en uitdrukken welke
                                        de gevolgen ervan zijn hier en elders, nu en later`, 12),
            new DoelModel(2, 'IVds', `Beseffen dat wat we hier en nu doen gevolgen heeft voor later en voor anderen elders
                                        op de wereld`, 12),
            new DoelModel(3, 'IVds', `Bijdragen aan een zinvolle samenleving waar een plaats is voor iedereen en respectvol
                                        omgaan met en zorgen voor de kwetsbare ander`, 12),
            new DoelModel(4, 'IVds', `Zorgzaam omgaan met de schepping, zich inzetten voor een leefbare planeet`, 12),
            new DoelModel(5, 'IVds', `Bewust omgaan met consumeren`, 12),
        //////// 3
        // 13
            new DoelModel(1, 'MZzo', `Gericht en intens waarnemen met de zintuigen :`, 13),
            new DoelModel(2, 'MZzo', `Adequaat reageren op zintuiglijke impulsen`, 13),
        // 14
            new DoelModel(1, 'MZlb', `Het eigen lichaam aanvoelen en rekening houden met zijn lichaamsgrenzen en -verhoudingen`, 14),
            new DoelModel(2, 'MZlb', `Een goede lichaamshouding aannemen`, 14),
            new DoelModel(3, 'MZlb', `Bewegingsenergie en spierspanning doseren en tot rust komen`, 14),
            new DoelModel(4, 'MZlb', `Evenwicht behouden of herstellen en gecontroleerde aanpassingen maken`, 14),
            new DoelModel(5, 'MZlb', `Bewegen op en rond de lichaamsassen`, 14),
            new DoelModel(6, 'MZlb', `De voorkeurslichaamszijde, - bewegingsrichting en -bewegingsrotatie aanvoelen en
                                        deze efficiënt gebruiken`, 14),
            new DoelModel(7, 'MZlb', `Bewegingen gelijktijdig, opeenvolgend en afwisselend uitvoeren`, 14),
        // 15
            new DoelModel(1, 'MZrt', `Alleen of samen, een plaats innemen tegenover objecten, ruimteaanduidingen of personen
                                        en daarbij rekening houden met de ruimtelijke begrenzingen`, 15),
            new DoelModel(2, 'MZrt', `De eigen bewegingen aanpassen aan statische en dynamische objecten door af te remmen, te stoppen, te
                                        vertragen, te versnellen en/of door van richting te veranderen, al dan niet met een voorwerp`, 15),
            new DoelModel(3, 'MZrt', `Afstanden, bewegingsrichtingen en -banen juist inschatten en de meest efficiënte kiezen`, 15),
            new DoelModel(4, 'MZrt', `De eigen bewegingen afstemmen op duur, tempo, tijdsvolgorde, metrum en ritme`, 15),
        // 16
            new DoelModel(1, 'MZgm', `Balanceren op:`, 16),
            new DoelModel(2, 'MZgm', `Een voorwerp in beweging brengen en/of houden`, 16),
            new DoelModel(3, 'MZgm', `Doelmatig en veilig voortbewegen in het water`, 16),
            new DoelModel(4, 'MZgm', `Zitten, staan of hangen aan/op een (meebewegend) toestel om de zwaai te starten, te vergroten,
                                        te onderhouden of af te remmen:`, 16),
            new DoelModel(5, 'MZgm', `Heffen, dragen en verplaatsen op een veilige en rugsparende manier`, 16),
            new DoelModel(6, 'MZgm', `Kruipen, klauteren of klimmen (en afdalen) op, over en van stabiele en onstabiele vlakken en
                                        toestellen`, 16),
            new DoelModel(7, 'MZgm', `Zich lopend verplaatsen en daarbij:`, 16),
            new DoelModel(8, 'MZgm', `Rond toestelassen draaien met een aangepaste lichaamshouding`, 16),
            new DoelModel(9, 'MZgm', `Voldoende basisvaardigheden beheersen om een bewegingsspel te spelen en daarbij
                                        eenvoudige spelideeën kunnen toepassen en slim spelen`, 16),
            new DoelModel(10, 'MZgm', `Vlot springen en landen`, 16),
            new DoelModel(11, 'MZgm', `Het eigen lichaamsgewicht dragen en steunen in diverse houdingen en bewegingen
                                        en op diverse lichaamsdelen`, 16),
            new DoelModel(12, 'MZgm', `Voldoende kracht, lenigheid, uithouding en snelheid ontwikkelen`, 16),
        // 17
            new DoelModel(1, 'MZkm', `Zelfredzaam zijn in het uitvoeren van manipulatieve handelingen in verschillende
                                        situaties; deze handelingen nauwkeurig, gedoseerd en ontspannen uitvoeren`, 17),
            new DoelModel(2, 'MZkm', `Functionele grepen gedifferentieerd gebruiken voor het hanteren van voorwerpen`, 17),
            new DoelModel(3, 'MZkm', `Spraak- en gezichtsmotoriek beheersen`, 17),
            new DoelModel(4, 'MZkm', `Vloeiend schrijven`, 17),
        //////// 4
        // 18
            new DoelModel(1, 'OWsa', `Ervaren, onderzoeken, vaststellen en illustreren hoe mensen op verschillende manieren
                                        samenleven en groepen vormen`, 18),
            new DoelModel(2, 'OWsa', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe mensen in hun levensonderhoud voorzien`, 18),
            new DoelModel(3, 'OWsa', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe mensen goederen en diensten produceren,
                                        verhandelen en consumeren en hoe dit hun leven beïnvloedt`, 18),
            new DoelModel(4, 'OWsa', `Ervaren en vaststellen welke aspecten ondernemen duurzaam maken en zich daarover uitdrukken`, 18),
            new DoelModel(5, 'OWsa', `De ongelijke verdeling van welvaart en het onderscheid tussen welvaart en welzijn onderzoeken en
                                        illustreren en solidariteit waarderen`, 18),
            new DoelModel(6, 'OWsa', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe migratie een rol speelt bij de ontwikkeling
                                        van onze multiculturele samenleving en de meerwaarde hiervan inzien`, 18),
            new DoelModel(7, 'OWsa', `Het nut en het belang ervaren, onderzoeken en illustreren van instellingen, organisaties en
                                        verenigingen die de kwaliteit van het samenleven bevorderen`, 18),
            new DoelModel(8, 'OWsa', `Het belang van de fundamentele rechten van de mens en de rechten van het kind illustreren
                                        en daarbij ervaren en inzien dat rechten en plichten complementair zijn`, 18),
            new DoelModel(9, 'OWsa', `Weten dat Vlaanderen, België en de Europese Unie elk een eigen bestuur hebben waar
                                        beslissingen worden genomen`, 18),
            new DoelModel(10, 'OWsa', `Ervaren, onderzoeken en uitdrukken hoe verkiezingen een basiselement zijn van een democratie`, 18),
        // 19
            new DoelModel(1, 'OWbc', `Kennismaken met en proeven van een waaier aan bewegingsdomeinen`, 19),
            new DoelModel(2, 'OWbc', `Kennismaken met verschillende organisatievormen om deel te nemen aan de bewegingscultuur`, 19),
            new DoelModel(2, 'OWbc', `Inzien hoe bewegingscultuur functioneert in de samenleving en hoe mensen daarmee omgaan`, 19),
            new DoelModel(3, 'OWbc', `Weten waarom men zelf of anderen participeren aan de bewegingscultuur`, 19),
        // 20
            new DoelModel(1, 'OWti', `Zich bewust worden van de persoonlijke en culturele beleving van tijd`, 20),
            new DoelModel(2, 'OWti', `Tijdsbegrippen en verschillende soorten kalenders functioneel gebruiken`, 20),
            new DoelModel(3, 'OWti', `Gebeurtenissen uit het eigen leven en uit de geschiedenis verkennen en in de tijd situeren`, 20),
            new DoelModel(4, 'OWti', `Vaststellen en uitdrukken hoe de geschiedenis doorwerkt in de samenleving van vandaag en morgen
                                        en hoe je als mens deel uitmaakt van de geschiedenis`, 20),
            new DoelModel(5, 'OWti', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe de werkelijkheid verandert en de kennis
                                        erover evolueert in de tijd`, 20),
            new DoelModel(6, 'OWti', `Zich ervan bewust worden dat er een verschil is tussen wat historisch is gebeurd en meningen
                                        over wat er is gebeurd`, 20),
            new DoelModel(7, 'OWti', `Ervaren, onderzoeken, vaststellen en uitdrukken waarom mensen sporen en verhalen uit hun
                                        leefwereld, die inzicht geven en herinneren aan een gedeeld verleden, bewaren`, 20),
        // 21
            new DoelModel(1, 'OWru', `Zich bewust worden van de persoonlijke beleving van ruimte en zich daarover uitdrukken`, 21),
            new DoelModel(2, 'OWru', `De eigen omgeving inrichten in functie van een beoogd doel`, 21),
            new DoelModel(3, 'OWru', `De aarde waarderen als een plaats om te leven en dit uitdrukken; levenswijzen hier en elders
                                        met elkaar vergelijken`, 21),
            new DoelModel(4, 'OWru', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe mensen ruimtes afbakenen en begrippen voor
                                        grenzen in de juiste context hanteren`, 21),
            new DoelModel(5, 'OWru', `Een landschap gericht waarnemen en op eenvoudige wijze onderzoeken waarom het er zo uit ziet`, 21),
            new DoelModel(6, 'OWru', `Kaartbegrip, oriëntatie- en kaartvaardigheid ontwikkelen`, 21),
            new DoelModel(7, 'OWru', `Als vaardige voetganger of fietser de verkeersregels kennen en toepassen en de veiligheid van
                                        verkeerssituaties in de omgeving inschatten`, 21),
            new DoelModel(8, 'OWru', `Een reisweg volgen, uitstippelen en begrijpelijk verwoorden`, 21),
            new DoelModel(9, 'OWru', `De voor- en nadelen van duurzame en niet-duurzame manieren om mensen, dieren en
                                        goederen te verplaatsen vergelijken en illustreren`, 21),
        // 22
            new DoelModel(1, 'OWte', `Ervaren, onderzoeken en vaststellen hoe eenvoudige technische systemen gemaakt
                                        zijn van grondstoffen , ingrediënten, materialen en/of onderdelen`, 22),
            new DoelModel(2, 'OWte', `Onderzoeken en illustreren volgens welke technische principes en natuurlijke
                                        verschijnselen eenvoudige technische systemen gemaakt zijn`, 22),
            new DoelModel(2, 'OWte', `Eenvoudige bestaande technische systemen uit de omgeving hanteren, begrijpen,
                                        vergelijken, (de)monteren, evalueren en onderhouden`, 22),
            new DoelModel(4, 'OWte', `Vanuit een behoefte een technische oplossing bedenken voor een probleem, daarbij de
                                        verschillende stappen van het technisch proces doorlopen`, 22),
            new DoelModel(5, 'OWte', `Vaststellen en uitdrukken hoe wetenschap , techniek en de samenleving elkaar beïnvloeden`, 22),
            new DoelModel(6, 'OWte', `In de toepassingsgebieden van techniek eenvoudige technische systemen, het technisch proces,
                                        hulpmiddelen en keuzes herkennen`, 22),
            new DoelModel(7, 'OWte', `Verschillende energiebronnen herkennen. Weten waarom energie nodig is`, 22),
            new DoelModel(8, 'OWte', `De relatieve waarde van techniek ervaren, vaststellen en hierover in interactie gaan`, 22),
            new DoelModel(9, 'OWte', `Vaststellen en uitdrukken dat technische systemen nuttig, duurzaam , gevaarlijk en/of schadelijk
                                        kunnen zijn voor zichzelf, anderen, natuur of milieu`, 22),
        // 23
            new DoelModel(1, 'OWna', `De natuur actief opzoeken en waarderen`, 23),
            new DoelModel(2, 'OWna', `In verschillende biotopen vaak voorkomende organismen waarnemen, onderzoeken,
                                        benoemen en ordenen`, 23),
            new DoelModel(3, 'OWna', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe mensen voor hun levensbehoeften
                                        sterk afhankelijk zijn van de natuur`, 23),
            new DoelModel(4, 'OWna', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe levende organismen groeien en zich
                                        voortplanten`, 23),
            new DoelModel(5, 'OWna', `Ervaren, onderzoeken, vaststellen en uitdrukken hoe levende organismen door een specifieke
                                        (lichaams)bouw,houding of handeling aangepast zijn om in hun omgeving te functioneren
                                        en te overleven`, 23),
            new DoelModel(6, 'OWna', `Het weer en het klimaat waarnemen, onderzoeken, beschrijven en vergelijken; aantonen hoe
                                        leefgewoonten mee bepaald worden door het weer en het klimaat`, 23),
            new DoelModel(7, 'OWna', `Ervaren, onderzoeken, vaststellen en illustreren hoe mensen de natuur en het milieu zowel op
                                        een positieve als negatieve wijze beïnvloeden`, 23),
            new DoelModel(8, 'OWna', `Natuurlijke verschijnselen en gangbare materialen waarnemen, onderzoeken en
                                        herkennen in de omgeving`, 23),
            new DoelModel(9, 'OWna', `Onderzoeken en illustreren hoe de aarde om de eigen as draait en hoe de aarde, de zon
                                        en de maan ten opzichte van elkaar bewegen`, 23),
        //////// 5
        // 24
            new DoelModel(1, 'MEmw', `Media enthousiast en positief aanwenden`, 24),
            new DoelModel(2, 'MEmw', `Mediacontent en mediagebruik van zichzelf en anderen kritisch beoordelen naar vorm en inhoud`, 24),
            new DoelModel(3, 'MEmw', `Media doordacht en zorgzaam aanwenden`, 24),
        // 25
            new DoelModel(1, 'MEge', `De eigenheid en mogelijkheden van verschillende mediamiddelen en hun toepassingen
                                        ontdekken en begrijpen`, 25),
            new DoelModel(2, 'MEge', `Passende mediamiddelen kiezen, gebruiken en combineren in functie van een beoogd doel`, 25),
            new DoelModel(3, 'MEge', `Mediacontent verwerken`, 25),
            new DoelModel(4, 'MEge', `De audiovisuele bouwstenen van media herkennen, onderzoeken en hanteren`, 25),
            new DoelModel(5, 'MEge', `De functie en de waarde van media in de eigen leefwereld ervaren en illustreren`, 25),
        // 26
            new DoelModel(1, 'MEva', `Technische en instrumentele computervaardigheden ontwikkelen`, 26),
            new DoelModel(2, 'MEva', `Digitale audiovisuele vaardigheden ontwikkelen`, 26),
            new DoelModel(3, 'MEva', `Digitale informatievaardigheden ontwikkelen`, 26),
            new DoelModel(4, 'MEva', `Digitale communicatievaardigheden ontwikkelen`, 26),
        //////// 6
        // 27
            new DoelModel(1, 'MUgr', `De wereld open benaderen met aandacht voor en goesting in het kunstzinnige,
                                        de verbeelding, de creativiteit en het esthetische`, 27),
            new DoelModel(2, 'MUgr', `Durven fantaseren en verbeelden`, 27),
            new DoelModel(3, 'MUgr', `Zich bewust worden van de eigen muzische en creatieve mogelijkheden (talenten) en die tonen`, 27),
            new DoelModel(4, 'MUgr', `Overal muzische mogelijkheden zien en benutten`, 27),
            new DoelModel(5, 'MUgr', `Inspelen op de muzische beleving van anderen: de uitvoerder of het publiek`, 27),
        // 28
            new DoelModel(1, 'MUge', `De wisselwerking tussen muzisch beschouwen en creëren illustreren`, 28),
            new DoelModel(2, 'MUge', `De muzische bouwstenen beleven, herkennen, onderzoeken en hanteren`, 28),
            new DoelModel(3, 'MUge', `Boodschappen en symboliek in kunst en muzische expressie begrijpen en verwerken`, 28),
            new DoelModel(4, 'MUge', `Diverse (kunstzinnige) cultuurervaringen opdoen en verwerken; de waarde en functie van
                                        kunst in de samenleving ervaren`, 28),
            new DoelModel(5, 'MUge', `Muzische domeinen, hun werkvormen en vormgevingsmiddelen ontdekken, doelgericht kiezen
                                        en combineren om zich expressief te uiten`, 28),
        // 29
            new DoelModel(1, 'MUva', `Tot kwaliteitsvol muzisch samenspel komen`, 29),
            new DoelModel(2, 'MUva', `Gericht beschouwen van beelden, muziek, dans en drama met oog voor de muzische bouwstenen,
                                        werkvormen en vormgevingsmiddelen :`, 29),
            new DoelModel(3, 'MUva', `De technische en expressieve vaardigheden die nodig zijn om zich muzisch uit te drukken in
                                        beeld, muziek, dans en drama verfijnen`, 29),
        //////// 7
        // 30
            new DoelModel(1, 'TOtg', `Plezier beleven aan taal en het spelen met taal`, 30),
            new DoelModel(2, 'TOtg', `Openstaan voor talige diversiteit en de gelijkwaardigheid van talen aanvaarden`, 30),
            new DoelModel(3, 'TOtg', `De meertalige identiteit van medeleerlingen erkennen en de eigen meertaligheid durven
                                        inzetten`, 30),
            new DoelModel(4, 'TOtg', `Mondeling en schriftelijk willen en durven communiceren en het nut daarvan inzien`, 30),
            new DoelModel(5, 'TOtg', `Bereid zijn om taal correct, verzorgd en gepast te gebruiken`, 30),
        // 31
            new DoelModel(1, 'TOmn', `Een mondelinge boodschap verwerken`, 31),
            new DoelModel(2, 'TOmn', `Een mondelinge boodschap overbrengen`, 31),
            new DoelModel(3, 'TOmn', `Actief deelnemen aan een gesprek`, 31),
        // 32
            new DoelModel(1, 'TOmf', `Een voor hen bestemde mondelinge boodschap in het Frans begrijpen`, 32),
            new DoelModel(2, 'TOmf', `Beluisterde en/of gelezen teksten in het Frans nazeggen en hardop lezen in
                                        betekenisvolle situaties`, 32),
            new DoelModel(3, 'TOmf', `Met een vorm van ondersteuning informatieve en narratieve teksten in het Frans navertellen
                                        in de vorm van een opsomming`, 32),
            new DoelModel(4, 'TOmf', `Met een vorm van ondersteuning een gebeurtenis, verhaal, iets of iemand in het Frans
                                        beschrijven in de vorm van een opsomming`, 32),
            new DoelModel(5, 'TOmf', `Deelnemen aan een eenvoudig gesprek in het Frans door vragen, antwoorden en uitspraken te
                                        begrijpen, erop te reageren, zelf vragen te stellen, antwoorden te geven en
                                        uitspraken te doen`, 32),
        // 33
            new DoelModel(1, 'TOsn', `Een schriftelijke boodschap verwerken`, 33),
            new DoelModel(2, 'TOsn', `Voldoende vlot kunnen lezen om leeftijdsadequate teksten te begrijpen`, 33),
            new DoelModel(3, 'TOsn', `Een schriftelijke boodschap overbrengen`, 33),
            new DoelModel(4, 'TOsn', `Bij het schrijven aandacht besteden aan zins- en tekststructuur, lay-out en beeldende
                                        elementen, leesbaarheid, spelling en interpunctie`, 33),
        // 34
            new DoelModel(1, 'TOsf', `Een voor hen bestemde schriftelijke boodschap in het Frans begrijpen`, 34),
            new DoelModel(2, 'TOsf', `Een boodschap in het Frans foutloos kopiëren in betekenisvolle situaties`, 34),
            new DoelModel(3, 'TOsf', `Een eenvoudige, functionele boodschap in het Frans schrijven door aan te vullen met
                                        gegeven woorden of samen te stellen aan de hand van aangereikte bouwstenen`, 34),
        // 35
            new DoelModel(1, 'TOtn', `Nadenken over taalgebruik en de belangrijkste factoren van een communicatieve situatie.
                                        Daarbij taalbeschouwelijke termen gebruiken`, 35),
            new DoelModel(2, 'TOtn', `Nadenken over de belangrijkste aspecten van het taalsysteem. Daarbij taalbeschouwelijke
                                        termen gebruiken`, 35),
        //////// 8
        // 36
            new DoelModel(1, 'WDlw', `nzien en vaststellen hoe men wiskunde en logisch denken kan gebruiken om problemen uit
                                        het dagelijkse leven op te lossen en daarbij waardering opbrengen voor wiskunde als
                                        dimensie van menselijke inventiviteit`, 36),
            new DoelModel(2, 'WDlw', `Wiskundige kennis en vaardigheden efficiënt en met inzicht hanteren`, 36),
            new DoelModel(3, 'WDlw', `Wiskundige problemen oplossen in betekenisvolle situaties binnen en buiten de klas en de
                                        redeneringen daarbij onderbouwen, vergelijken, bijsturen, weergeven en beoordelen`, 36),
            new DoelModel(4, 'WDlw', `Redeneren over wiskundige patronen en verbanden`, 36),
            new DoelModel(5, 'WDlw', `Wiskundige gegevens correct en nauwkeurig interpreteren en wiskundige redeneringen op
                                        verschillende manieren weergeven`, 36),
            new DoelModel(6, 'WDlw', `Inzicht verwerven in de wiskundige gelijkheid en de basisbewerkingen`, 36),
            new DoelModel(7, 'WDlw', `Logisch en algoritmisch denken`, 36),
            new DoelModel(8, 'WDlw', `Geloven in de eigen wiskundige bekwaamheid en groeikracht door actief en constructief problemen
                                        op te lossen. Inzicht verwerven in het nut van wiskunde in studies en beroepen`, 36),
        // 37
            new DoelModel(1, 'WDgk', `Inzicht verwerven in hoeveelheden`, 37),
            new DoelModel(2, 'WDgk', `Inzicht verwerven in tellen`, 37),
            new DoelModel(3, 'WDgk', `Inzicht verwerven in natuurlijke getallen`, 37),
            new DoelModel(4, 'WDgk', `Inzicht verwerven in breuken, kommagetallen, procenten en hun onderlinge relatie`, 37),
            new DoelModel(5, 'WDgk', `Schatten van hoeveelheden en afronden van getallen`, 37),
        // 38
            new DoelModel(1, 'WDrv', `De meest geschikte rekenwijze kiezen`, 38),
            new DoelModel(2, 'WDrv', `Schattend rekenen`, 38),
            new DoelModel(3, 'WDrv', `De rekenmachine met inzicht gebruiken`, 38),
            new DoelModel(4, 'WDrv', `Handig hoofdrekenen`, 38),
            new DoelModel(5, 'WDrv', `Inzicht hebben in de eigenschappen van en de relaties tussen bewerkingen`, 38),
            new DoelModel(6, 'WDrv', `Cijferen`, 38),
        // 39
            new DoelModel(1, 'WDmk', `Inzicht verwerven in ruimtelijke oriëntatie en ruimtelijke relaties`, 39),
            new DoelModel(2, 'WDmk', `Inzicht verwerven in meetkundige objecten`, 39),
            new DoelModel(3, 'WDmk', `Inzicht verwerven in meetkundige relaties`, 39),
        // 40
            new DoelModel(1, 'WDmm', `Vergelijken en ordenen zonder maateenheden`, 40),
            new DoelModel(2, 'WDmm', `Inzicht verwerven in het meetproces`, 40),
            new DoelModel(3, 'WDmm', `Schatten, meten en rekenen met maateenheden`, 40),
        //////// 9
        // 41
            new DoelModel(1, 'RKlg', `Attent worden voor de levensbeschouwelijke dimensie van de werkelijkheid en
                                        de uitnodiging tot een gelovige benadering van het leven`, 41),
            new DoelModel(2, 'RKlg', `Komen tot communicatie op levensbeschouwelijk, religieus en/of godsdienstig vlak,
                                        verbaal of niet-verbaal`, 41),
            new DoelModel(3, 'RKlg', `In Bijbelverhalen, geloofsverhalen, geloofsbeelden en rituelen op het spoor komen wat christenen
                                        beluisteren als Gods woord voor mensen vandaag. Het eigen verhaal hiermee verbinden`, 41),
            new DoelModel(4, 'RKlg', `Groeien in interlevensbeschouwelijk ontmoeten en samen leven`, 41),
            new DoelModel(5, 'RKlg', `Ontdekken en zelf ervaren hoe de diepere kant van het leven wordt beleefd in een waaier van tekens,
                                        rituelen, belevings- en vieringsmomenten`, 41),
        // 42
            new DoelModel(1, 'RKvm', `Zich bemind weten zoals men is, vertrouwvol openstaan voor de toekomst, in ontmoeting treden met het
                                        christelijk geloven in een liefhebbende God`, 42),
            new DoelModel(2, 'RKvm', `Erop vertrouwen dat er over schijnbaar dode punten heen nieuwe kansen liggen en een nieuw begin
                                        maken. Ontdekken wat ‘verrijzenis’ kan betekenen in het leven van mensen en
                                        mogelijk in het eigen leven`, 42),
        // 43
            new DoelModel(1, 'RKve', `Contact maken met de eigen binnenkant en zich van daaruit laten inspireren voor de keuzes die men
                                        maakt. Verschillende vormen van verstilling, meditatie, (christelijk) gebed en
                                        bezinning ontdekken`, 43),
            new DoelModel(2, 'RKve', `Zich gedragen weten door, verbonden voelen met en aangesproken door de andere. Zich laten inspireren
                                        door de wijze waarop Jezus met anderen omgaat en oproept tot ‘ver-ander-ing’`, 43),
            new DoelModel(3, 'RKve', `Zich gedragen weten door, verbonden voelen met en aangesproken door gemeenschappen dichtbij en
                                        veraf. Ontdekken hoe mensen (geloofs)gemeenschappen vormen`, 43),
            new DoelModel(4, 'RKve', `Groeien in verbondenheid met natuur en cultuur , ontdekken wat de christelijke
                                        scheppingsspiritualiteit betekent in het leven van mensen en mogelijk in het eigen leven`, 43),
        // 44
            new DoelModel(1, 'RKgk', `Zich aangesproken weten om goed te doen. Gewetensvol in het leven staan en zich hierbij mogelijk
                                        laten inspireren door mensen die God ontdekken in de kwetsbare ander`, 44),
        // 45
            new DoelModel(1, 'RKgs', `Openkomen voor symboliek in het leven van mensen. Symbolen van de christelijke traditie ontdekken
                                        en er zich mogelijk mee verbinden.`, 45),
            new DoelModel(2, 'RKgs', `Openkomen voor de betekenis(sen) van en zich laten inspireren door Jezusbeelden, godsbeelden,
                                        Bijbel - geloofsverhalen en andere levensbeschouwelijke verhalen.`, 45),
            new DoelModel(3, 'RKgs', `Openkomen voor de symboliek, geloofstaal , rituelen en vieringen in het leven van mensen op het
                                        ritme van het liturgisch jaar en deze mee beleven.`, 45)
        ];
    }
}
