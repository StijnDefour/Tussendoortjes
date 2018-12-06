import { ThemaItem } from './ThemaItem';
import { SidebarItem } from './SidebarItem';

export class SidebarItems {
  items: SidebarItem[];

  constructor() {
    this.items = [
      new SidebarItem("rgb(233, 37, 45)", "far fa-heart", "assets/Images/backgrounds/bg_1.jpeg",
          "Ik kan op een warme en communicatieve wijze in relatie treden met mezelf en met anderen.",
          new ThemaItem("Socio-emotionele ontwikkeling",
                        ["Relationele vaardigheden", "Omgaan met gevoelens en behoeften","Inlevingsvermogen","Seksueel bewustzijn"])),
      new SidebarItem("rgb(237, 121, 40)", "far fa-compass", "assets/Images/backgrounds/bg_2.jpeg",
          "In dialoog met de a/Andere(n ) leer ik mezelf en waartoe ik word uitgenodigd kennen. Ik kan richting geven aan mijn leven. Ik reageer veerkrachtig.",
          new ThemaItem("Ontwikkeling van een innerlijk kompas",
                        ["Identiteit","Levensbeschouwelijke grondhouding","Waarde gevoeligheid en normsbesef","Veerkracht"])),
      new SidebarItem("rgb(247, 152, 57)", "far fa-paper-plane", "assets/Images/backgrounds/bg_3.jpeg",
          "Ik neem verantwoordelijkheid op voor mezelf en voor anderen. Ik neem initiatief en kan vrij en zelfstandig functioneren. Ik ontwikkel kritische zin, kan dingen onderzoeken en ben creatief.",
          new ThemaItem("Ontwikkeling van initiatief en verantwoordelijkheid",
                        ["Zelfregulerend vermoge","Onderzoekscompetentie","Gezonde en veilige levenstijl","Engagement voor duurzame levenstijl"])),
      new SidebarItem("rgb(246, 189, 22)", "fas fa-running", "assets/Images/backgrounds/bg_5.jpeg",
          "Ik ben nieuwsgierig naar de wereld waarin ik leef. Ik exploreer mijn omgeving en verwerf inzicht in de wereld in al zijn dimensies.",
          new ThemaItem("Ontwikkeling van oriëntatie op de wereld",
                        ["Oriëntatie op de samenleveing","Oriëntatie op bewegingscultuur","Oriëntatie op tijd","Oriëntatie op de ruimte","Oriëntatie op techniek","Oriëntatie op natuur"])),
      new SidebarItem("rgb(177, 208, 61)", "fas fa-globe-americas", "assets/Images/backgrounds/bg_4.jpeg",
          "Ik beschik over voldoende (psycho)motorische en zintuiglijke basisvaardigheden om zelfredzaam te functioneren.",
          new ThemaItem("Motorische en zintuiglijke ontwikkeling",
                        ["Zintuiglijke ontwikkeling","Lichaams- en bewegingsperceptie","Omgaan met bewegingsruimte- en tijd","Grootmotorisch bewegen","Kleinmotorisch bewegen"])),
      new SidebarItem("rgb(140, 184, 58)", "fas fa-camera", "assets/Images/backgrounds/bg_6.jpeg",
          "Ik ga op een enthousiaste, zelfredzame en kritische manier om met media en mediacontent.",
          new ThemaItem("Mediakundige ontwikkeling",
                        ["Mediawijsheid","Mediegeletterdheid","Mediavaardigheid"])),
      new SidebarItem("rgb(70, 185, 143)", "fas fa-music", "assets/Images/backgrounds/bg_7.jpeg",
          "Ik geniet van kunst en expressie en kan me muzisch en kunstzinnig uitdrukken.",
          new ThemaItem("Muzische ontwikkeling",
                        ["Muzische grondhouding","Muzische geletterdheid","Muzische vaardigheid"])),
      new SidebarItem("rgb(110, 205, 226)", "far fa-comment-dots", "assets/Images/backgrounds/bg_8.jpeg",
          "Ik verken talen en talige diversiteit om me heen. Ik zet mijn talige vaardigheden steeds efficiënter in om betekenisvolle situaties met taal aan te pakken.",
          new ThemaItem("Taakontwikkeling",
                        ["Talige grondhouding","Mondelinge taalvaardigheid Nederlands","Mondelinge taalvaardigheid Frans","Schriftelijke taalvaardigheid Nederlands",
                        "Schriftelijke taalvaardigheid Nederlands","Schriftelijke taalvaardigheid Frans","Taalbeschouwing Nederlands"])),
      new SidebarItem("rgb(10, 130, 190)", "fas fa-calculator", "assets/Images/backgrounds/bg_9.jpeg",
          "Ik bedenk hoe ik mijn wiskundige bagage kan gebruiken om een probleem aan te pakken. Ik doe dit met vertrouwen en plezier.",
          new ThemaItem("Ontwikkeling van wiskundig denken",
                        ["Logisch en wiskundig denken","Getallenkennis","Rekenvaardigheid","Meetkunde","Meten en metend rekenen"])),
      new SidebarItem("rgb(91, 84, 164)", "fas fa-bible", "assets/Images/backgrounds/bg_10.jpg",
          "Ik sta open voor een diepere dimensie in het leven. Ik maak kennis met en ga in dialoog met de katholieke geloofstraditie. Ik groei op levensbeschouwelijk, religieus en/of godsdienstig vlak.",
          new ThemaItem("Rooms-katholieke godsdienst",
                        ["Levensbeschouwelijke, religieus en/of godsdienstig groeien","Vertrouwen en wantrouwen, mogelijkheden en beperkingen",
                        "Verbondenheid met zichzelf, andere, gemeenschappen, natuur en cultuur", "Gevoeligheid voor goed en kwaad",
                        "Openkomen voor geloofstaal, symboliek en rituelen"]))
    ];
  }
}
