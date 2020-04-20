import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "./wiki.css";
import axios from "axios";

let searchUrl =
  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
let contentUrl =
  "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=";

//   After the closing of {{Infobox i think i get the content
// [[search| label]]
export default class Wiki extends Component {
  state = {
    search: "",
    searchResult: [],
    Amper:
      "{{For|the SI unit of electric current|Ampere}}\n{{short description|River in Germany}}\n{{Expand German|Amper|fa=yes|topic=geo|date=December 2009}}\n{{Infobox river\n| name              = Amper \n| subdivision_type1 = Country\n| subdivision_name1 = [[Germany]] \n| subdivision_type2 = Location\n| subdivision_name2 = [[Bavaria]], [[Germany]] \n| image             = Amper I.jpg \n| image_caption     = The Amper south of [[Fürstenfeldbruck]] \n| source1_location  = [[Northern Limestone Alps]] \n| mouth_location    = [[Isar]] \n| mouth_coordinates = {{coord|48|30|1|N|11|57|24|E|display=inline,title}}\n| progression       = {{RIsar}}\n| length            = {{convert|190|km|abbr=on}} \n| source1_elevation = \n| discharge1_avg    = ±{{convert|45|m3/s|abbr=on}}\n| basin_size        = {{convert|3248|km2|abbr=on}} {{GeoQuelle|DE-BY|GV}}\n}}\n\nThe '''Amper''', called the '''Ammer''' upstream of the [[Ammersee]], through which it runs, is the largest tributary of the [[Isar]] in southern [[Bavaria]], Germany. It flows generally north-eastward, reaching the Isar in [[Moosburg]], about {{convert|190|km}} from its source in the [[Ammergau Alps]], with a flow of 45&nbsp;m³/s. Including its tributary, [[Linder (river)|Linder]], it is {{convert|209.5|km|abbr=on}} long.<ref name=\"DE-BY_GV\" /> Major tributaries are the [[Glonn (Amper)|Glonn]], which springs near [[Augsburg]]; the [[Würm]], which is the outflow of [[Lake Starnberg]]; and the [[Maisach (Amper)|Maisach]].\n\n{{stack|[[File:Flusssystem Ammer Amper.png|thumb|upright|The Ammer/Amper system within the  [[Isar]] basin]]}}\n\nThe Ammer starts just south of the village of [[Oberammergau]]. Riverside cities include [[Fürstenfeldbruck]], [[Dachau]] and Moosburg.\n\n==References==\n{{reflist|30em}}\n\n==External links==\n*{{official website|http://www.wwa-m.bayern.de/fluesse_seen/gewaesserportraits/amper/index.htm}} {{in lang|de}}\n\n[[Category:Amper basin| ]]\n[[Category:Rivers of Bavaria]]\n[[Category:Ammersee]]\n\n{{Bavaria-river-stub}}",
    tesla:
      "{{short description|SI unit of magnetic field strength}}\n{{About|the unit of magnetic field|the person it was named after|Nikola Tesla|other uses|Tesla (disambiguation)}}\n{{Infobox Unit|name=Tesla|image=|caption=The tesla definition {{math|1=T = {{sfrac|Wb|m<sup>2</sup>}}}} is prominently depicted on the 100 [[Serbian dinar]]s banknote, along with the picture of [[Nikola Tesla]].|standard=[[SI derived unit]]|quantity=[[Magnetic flux density]]|symbol=T|dimension=M&sdot;T<sup>−2</sup>&sdot;I<sup>−1</sup>|namedafter=[[Nikola Tesla]]|extralabel=In [[SI base unit]]s:|extradata=[[kilogram|kg]]&sdot;[[second|s]]<sup>−2</sup>&sdot;[[ampere|A]]<sup>−1</sup>}}\n\nThe '''tesla''' (symbol: '''T''') is a [[SI derived unit|derived unit]] of the [[magnetic field|magnetic]] induction (also, [[magnetic flux]] density) <!--Because \"field strength\" is ambiguous; see link for discussion of H and B; EDIT: no it's not: B is the only fundamental field, H includes material's properties; the magnetic flux density is like finding the flux of B through dS, B*dS then dividing by dS--> in the [[International System of Units]]. <!--When written with capital T, Tesla usually means the inventor [[Nikola Tesla]]. When used as a unit for magnetic field strength, one must write \"tesla\".-->\n\nOne tesla is equal to one [[weber (unit)|weber]] per [[square metre]].  The unit was announced during the [[General Conference on Weights and Measures]] in 1960 and is named<ref>{{cite web|url=http://www.sizes.com/units/SI.htm |title=Details of SI units |publisher=sizes.com |date=2011-07-01 |accessdate=2011-10-04}}</ref> in honour of [[Nikola Tesla]], upon the proposal of the Slovenian electrical engineer [[France Avčin]].\n\nThe strongest fields encountered from permanent magnets on Earth are from [[Halbach sphere]]s and can be over 4.5&nbsp;T.  The record for the highest sustained pulsed magnetic field has been produced by scientists at the [[Los Alamos National Laboratory]] campus of the [[National High Magnetic Field Laboratory]], the world's first 100-tesla non-destructive magnetic field.<ref name=lanl>{{cite web|title=Strongest non-destructive magnetic field: world record set at 100-tesla level|url=https://www.lanl.gov/science-innovation/features/science-digests/world-record-set-magnetic-field.php|website=|publisher=Los Alamos National Laboratory|accessdate=6 November 2014|ref=lanl}}</ref> In September 2018 researchers at the [[University of Tokyo]] generated a field of 1200 T which lasted in the order of 100 microseconds using the electromagnetic flux-compression technique.<ref>''D. Nakamura, A. Ikeda, H. Sawabe, Y. H. Matsuda, and S. Takeyama (2018)'', [https://www.u-tokyo.ac.jp/focus/en/press/z0508_00008.html Magnetic field milestone]</ref>\n\n== Definition ==\nA particle, carrying a charge of one [[coulomb]], and moving perpendicularly through a magnetic field of one tesla, at a speed of one metre per second, experiences a force with magnitude one [[newton (unit)|newton]], according to the [[Lorentz force law]].  As an [[SI derived unit]], the tesla can also be expressed as\n\n:<math> \\text{T} \n= \\dfrac{\\text{V}{\\cdot}{\\text{s}}}{\\text{m}^2} \n= \\dfrac{\\text{N}}{\\text{A}{\\cdot}\\text{m}} \n= \\dfrac{\\text{J}}{\\text{A}{\\cdot}\\text{m}^2} \n= \\dfrac{\\text{H}{\\cdot}\\text{A}}{\\text{m}^2}  \n= \\dfrac{\\text{Wb}}{\\text{m}^2}  \n= \\dfrac{\\text{kg}}{\\text{C}{\\cdot}\\text{s}} \n= \\dfrac{\\text{N}{\\cdot}\\text{s}}{\\text{C}{\\cdot}\\text{m}}\n= \\dfrac{\\text{kg}}{\\text{A}{\\cdot}\\text{s}^2} </math>\n\n(The last equivalent is in [[SI base unit]]s).<ref>''The International System of Units (SI), 8th edition'', [[BIPM]], eds. (2006), {{ISBN|92-822-2213-6}}, [http://www.bipm.org/en/si/si_brochure/chapter2/2-2/table3.html Table 3. Coherent derived units in the SI with special names and symbols] {{webarchive|url=https://web.archive.org/web/20070618123613/http://www.bipm.org/en/si/si_brochure/chapter2/2-2/table3.html |date=2007-06-18 }}</ref>\n\nUnits used:\n: A = [[ampere]]\n: C = [[coulomb]]\n: kg = [[kilogram]]\n: m = [[metre]]\n: N = [[Newton_(unit)|newton]]\n: s = [[second]]\n: H = [[henry (unit)|henry]]\n: V = [[volt]]\n: J = [[joule]]\n: Wb = [[weber (unit)|weber]]\n\n== Electric vs. magnetic field ==\n\nIn the production of the [[Lorentz force]], the difference between electric fields and magnetic fields is that a force from a [[magnetic field]] on a charged particle is generally due to the charged particle's movement,<ref>{{cite book|last=Gregory|first=Frederick|year=2003|title=History of Science 1700 to Present|publisher=The Teaching Company}}</ref> while the force imparted by an electric field on a charged particle is not due to the charged particle's movement. This may be appreciated by looking at the units for each. The unit of [[electric field]] in the [[MKS system of units]] is newtons per coulomb, N/C, while the magnetic field (in teslas) can be written as N/(C·m/s). The dividing factor between the two types of field is metres per second (m/s), which is velocity. This relationship immediately highlights the fact that whether a static [[electromagnetic field]] is seen as purely magnetic, or purely electric, or some combination of these, is dependent upon one's [[frame of reference|reference frame]] (that is, one's velocity relative to the field).<ref>{{cite book|last=Parker|first=Eugene|year=2007|title=Conversations on electric and magnetic fields in the cosmos|publisher=Princeton University press|page=65|url=https://books.google.com/books?id=7gJ_i3CTcpQC&pg=PA65 |isbn=978-0691128412}}</ref><ref>{{cite book|last=Kurt|first=Oughstun|year=2006|title=Electromagnetic and optical pulse propagation|publisher=Springer|page=81|url=https://books.google.com/books?id=behRnNRiueAC&pg=PA81 |isbn=9780387345994}}</ref>\n\nIn [[ferromagnets]], the movement creating the magnetic field is the [[electron spin]]<ref>{{cite book|last=Herman|first=Stephen|year=2003|title=Delmar's standard textbook of electricity|publisher=Delmar Publishers|page=97|url=https://books.google.com/books?id=kddgHk0P3NcC&pg=PA97 |isbn=978-1401825652}}</ref> (and to a lesser extent electron [[Angular momentum operator#Orbital angular momentum operator|orbital angular momentum]]). In a current-carrying wire ([[electromagnet]]s) the movement is due to electrons moving through the wire (whether the wire is straight or circular).\n\n== Conversions ==\nOne tesla is equivalent to:<ref>McGraw Hill Encyclopaedia of Physics (2nd Edition), C.B. Parker, 1994, {{ISBN|0-07-051400-3}}</ref>{{pn|date=June 2017}}\n: 10,000 (or 10<sup>4</sup>) G ([[Gauss (unit)|Gauss]]), used in the [[CGS]] system. Thus, 10&nbsp;kG = 1&nbsp;T (tesla), and 1&nbsp;G = 10<sup>−4</sup>&nbsp;T = 100 μT (microtesla).\n: 1,000,000,000 (or 10<sup>9</sup>)&nbsp;γ (gamma), used in [[geophysics]].<ref name=NGDC>{{cite web |url=http://www.ngdc.noaa.gov/geomag/faqgeom.shtml |title=Geomagnetism Frequently Asked Questions |publisher=National Geophysical Data Center |accessdate=21 October 2013}}</ref> Thus, 1&nbsp;γ = 1&nbsp;nT (nanotesla).\n: 42.6&nbsp;MHz of the <sup>1</sup>H nucleus frequency, in [[NMR]]. Thus, the magnetic field associated with NMR at 1&nbsp;GHz is 23.5 T.\n\nOne tesla is equal to 1 V·s/m<sup>2</sup>.  This can be shown by starting with the speed of light in vacuum,<ref>Panofsky, W. K. H.; Phillips, M. (1962). Classical Electricity and Magnetism. Addison-Wesley. p. 182. {{ISBN|978-0-201-05702-7}}.</ref> ''c'' = (ε<sub>0</sub>μ<sub>0</sub>)<sup>−1/2</sup>, and inserting the [[International System of Units|SI values and units]] for ''c'' ({{val|2.998|e=8|u=m/s}}), the [[vacuum permittivity]] ε<sub>0</sub> ({{val|8.85|e=-12|u=A·s/(V·m)}}), and the [[vacuum permeability]] μ<sub>0</sub> ({{val|12.566|e=-7|u=T·m/A}}).  Cancellation of numbers and units then produces this relation.\n\nFor the relation to the units of the [[Effective magnetic field|magnetising field]] (ampere per metre or [[Oersted]]), see the article on [[Permeability (electromagnetism)|permeability]].\n\n== Examples ==\n{{Main article|Orders of magnitude (magnetic field)}}\nThe following examples are listed in ascending order of field strength.\n\n* 3.2&nbsp;×&nbsp;10<sup>−5</sup>&nbsp;T (31.869&nbsp;μT) – strength of [[Earth's magnetic field]] at 0° latitude, 0° longitude \n* 5&nbsp;×&nbsp;10<sup>−3</sup>&nbsp;T (5&nbsp;mT) – the strength of a typical [[refrigerator magnet]]\n* 0.3&nbsp;T – the strength of solar sunspots\n* 1.25&nbsp;T – magnetic flux density at the surface of a [[neodymium magnet]]\n* 1&nbsp;T to 2.4&nbsp;T – coil gap of a typical loudspeaker magnet\n* 1.5&nbsp;T to 3&nbsp;T – strength of medical [[magnetic resonance imaging]] systems in practice, experimentally up to 17 T<ref>{{cite web|url=http://www.bruker-biospin.com/uhf-mri.html |title=Ultra-High Field |publisher=Bruker BioSpin |date= |accessdate=2011-10-04}}</ref>\n* 4&nbsp;T – strength of the [[Superconductivity|superconducting]] magnet built around the [[Compact Muon Solenoid|CMS]] detector at [[CERN]]<ref>{{cite web|title=Superconducting Magnet in CMS|url=http://cms.web.cern.ch/news/superconducting-magnet|accessdate=9 February 2013}}</ref> \n* 8&nbsp;T – the strength of [[LHC]] magnets\n* 11.75&nbsp;T – the strength of INUMAC magnets, largest [[MRI scanner]]<ref>{{cite web|title=ISEULT - INUMAC|url=http://irfu.cea.fr/en/Phocea/Vie_des_labos/Ast/ast_technique.php?id_ast=2305|accessdate=17 February 2014}}</ref>\n* 13&nbsp;T – strength of the superconducting [[ITER]] magnet system<ref>{{cite web|url=http://www.iter.org/mach/magnets |title=ITER – the way to new energy |accessdate=2012-04-19}}</ref>\n*14.1 T – highest magnetic field strength ever recorded for an accelerator steering magnet at [[Fermilab]]<ref>{{Cite web|url=https://news.fnal.gov/2019/09/fermilab-achieves-world-record-field-strength-for-accelerator-magnet/|title=Fermilab achieves world-record field strength for accelerator magnet|last=Hesla|first=Leah|language=en-US|access-date=2020-02-20}}</ref>\n* 16&nbsp;T – magnetic field strength required to levitate a [[frog]]<ref>{{cite web|title=Of Flying Frogs and Levitrons\" by M. V. Berry and A. K. Geim, European Journal of Physics, v. 18, 1997, p. 307–13 |url=https://www.ru.nl/publish/pages/682806/frog-ejp.pdf |accessdate=12 May 2013}}</ref> (by [[Magnetic levitation#Diamagnetism|diamagnetic levitation]] of the water in its body tissues) according to the 2000 [[Ig Nobel Prize]] in Physics<ref>{{cite web|title=The 2000 Ig Nobel Prize Winners|url=http://www.improbable.com/ig/winners/#ig2000|accessdate=12 May 2013}})</ref>\n* 17.6&nbsp;T – strongest field trapped in a superconductor in a lab as of July 2014<ref>{{cite web|url=http://www.popsci.com/article/technology/superconductor-traps-strongest-magnetic-field-yet |title=Superconductor Traps The Strongest Magnetic Field Yet|accessdate=2 July 2014}}</ref>\n* 27 T – maximal field strengths of [[Superconducting magnet|superconducting electromagnets]] at cryogenic temperatures\n* 35.4 T – the current (2009) world record for a superconducting electromagnet in a background magnetic field <ref name=\"MagnetLab\">{{cite web\n  | last =\n  | first =\n  | authorlink =\n  | title = Mag Lab World Records\n  | website = Media Center\n  | publisher = National High Magnetic Field Laboratory, USA\n  | year = 2008\n  | url = https://nationalmaglab.org/about/facts-figures/world-records\n  | doi =\n  | accessdate = 2015-10-24 }}</ref>\n* 45 T – the current (2015) world record for continuous field magnets <ref name=\"MagnetLab\"/>\n* 100 T – approximate magnetic field strength of a typical [[White dwarf]] star\n* 10<sup>8</sup> – 10<sup>11</sup>&nbsp;T (100&nbsp;MT – 100&nbsp;GT) – magnetic strength range of [[magnetar]] neutron stars\n\n== Notes and references ==\n{{Reflist|2}}\n\n== External links ==\n{{Wiktionary|tesla}}\n*[http://www.magnii.com/magnetic-units-converter.html Gauss ↔ Tesla Conversion Tool]\n\n{{SI units}}\n\n{{DEFAULTSORT:Tesla (Unit)}}\n[[Category:SI derived units]]\n[[Category:Nikola Tesla]]\n[[Category:Units of magnetic flux density]]"
  };

  getTextStart = text => {
    let StartIndex = text.indexOf("{{Infobox");
    let lastIndex = text.indexOf("}}", StartIndex);
    let ss = text.substring(StartIndex, lastIndex);
    let notclose = ss.includes("{{");
    let counter = 0;

    console.log("StartIndex",StartIndex)
    console.log("lastIndex",lastIndex)
    console.log("text",text)
    while (true) {
      counter++;
      console.log("ss",ss)
      console.log("time",counter)
      // may be the closing tage of the infobox
      // create a string tha may be the full infobox
      // check if that string is not the full infobox (ther's an other {{ inside the {{  so it's the closing of the first {{ )
      // get a new lastIndex
      if (!notclose) {
        console.log("found at ",lastIndex)
        break;
      }else{
        StartIndex = text.indexOf("{{",StartIndex+2);
        lastIndex = text.indexOf("}}", lastIndex + 2);
        ss = text.substring(StartIndex, lastIndex);
        notclose = ss.includes("{{");
      }

      if (counter > 100) {
        console.log(counter)
        break;
      }
      
    }
  };

  getSplit=text=>{
let ss = text.split("{{")
ss.forEach(s=>{
  let first=s.indexOf("}}")
  if(first!==-1){
    let second=s.indexOf("}}",first+2)
    if(second!==-1){
      console.log("second",second)
      if(s.includes("}}"))
  if(s.includes("}}"))
  console.log("found",text[second])
  console.log("foundAt-->",s)

    }
  }
})
console.log(ss)  
}

  handleChange = e => {
    const value = e.currentTarget.value;
    // let search = contentUrl + value;
    // axios.get(search).then(data => {
    //   let pages = data.query.pages;
    //   const allPages = Object.keys(pages);
    //   const pageId = pages[allPages][0];
    //   console.log(pageId);

    //   console.log(data.query.pages.pageId.revisions[0]["*"]);
    // }).then(err=>{
    //     console.log(err)
    // })
    // do requiest here

    console.log(value);
  };

  componentDidMount() {
    const p = this.state.tesla;
    // this.getTextStart(p);
    this.getSplit(p)
  }

  render() {
    return (
      <div className="wiki">
        <Typography variant="h6" align="center">
          WikiPedia
        </Typography>
        <div className="wikisearch">
          <TextField
            name="wiki"
            label="Search on WikiPedia"
            variant="outlined"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <Typography>{this.state.tesla}</Typography>
      </div>
    );
  }
}