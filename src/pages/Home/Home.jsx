import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Home = () => {

  const [visibleDiv, setVisibleDiv] = useState(null);

  const toggleVisibility = (divId) => {
    setVisibleDiv((prevVisibleDiv) =>
      prevVisibleDiv === divId ? null : divId
    );
  };

  return (
    <div >
      <div className="bg-white w-[100vw] h-full ">
        <h1 className="text-[2.5vw] font-bold text-center py-[2vw]">
        Verwalten Sie Ihre Fettabscheiderprotokolle digital
        </h1>
        <div className="flex flex-row">
          <div className="w-[50vw] h-full">
            <h1 className="text-[1.7vw] font-bold px-[4vw] py-[1vw]">Vereinfachen Sie die Compliance und optimieren Sie den Betrieb Ihres Catering-Unternehmens</h1>
            <p className="text-[1.3vw] text-center px-[4vw]">Willkommen bei GreaseLog – Ihrer Lösung für die problemlose Verwaltung von Fettabscheidern. Verabschieden Sie sich von verlorenem Papierkram und manuellen Fehlern und freuen Sie sich auf mühelose Compliance und Sicherheit. Mit unserer digitalen Plattform können Sie jederzeit und überall problemlos Entsorgungsaufzeichnungen eingeben, monatliche Selbstinspektionen durchführen und auf historische Daten zugreifen. Optimieren Sie die Zusammenarbeit mit Ihrem Team und Ihren Lieferanten und stellen Sie gleichzeitig problemlos die Einhaltung gesetzlicher Vorschriften sicher. Sind Sie bereit, Ihr Fettabscheidermanagement zu revolutionieren?</p>
            <Link to="/login" >
            <button className="bg-[#444444] hover:bg-[#666666] text-white text-[1.3vw] px-[1vw] py-[0.5vw] rounded-[3px] mx-[20vw] my-[2vw]">Loslegen</button>
            </Link>
          </div>
          <div className="w-[50vw] h-[30vw]">
            <img src="public/greaseseperator.png" className="w-[35vw]" alt="" />
          </div>
        </div>
        
      </div>
      <div className='flex flex-col bg-[#ececec] gap-[2vw] p-[2vw] '>
        <h1 className="text-left text-[5vw] flex flex-col font-bold"><p>Lass uns Holen</p> <p>Um uns kennenzulernen</p></h1>
        <p className='h-full  flex flex-col  p-[2vw] items-right w-[60vw] ml-[30vw] gap-[1vw] rounded-md text-[1.6vw] "'>Unsere Website ist die Anlaufstelle für Fachleute aus der Gastronomiebranche, die auf der Suche nach effizienten Fettabscheiderlösungen sind. Mit einem umfassenden Verständnis der deutschen Vorschriften stellen wir sicher, dass jedes Restaurant die Compliance-Standards einhält. Von der Installation über die Wartung bis hin zu digitalen Betriebsprotokollen optimieren unsere Dienstleistungen das Abfallmanagement. Durch flexible Abonnementpläne bieten wir einen nahtlosen Datenzugriff bei Eigentümerwechseln und sorgen so für Sicherheit für unsere Kunden. Vertrauen Sie uns für zuverlässige Wartung und innovative technologische Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind.</p>
      </div>
      <div className="p-[2vw] w-[100vw] h-full ">
        <h1 className="text-center text-[2.8vw] font-bold">Problemstellung</h1>
        <div className="flex flex-col justify-center items-center  gap-[3vw]">
        <div className="flex flex-row items-center justify-center gap-[3vw] mt-[2vw]">
            <div className="w-[20vw] h-[20vw] bg-[#444444] shadow-2xl rounded-md p-[1vw]">
              <img src="public/Home/error.png" className="w-[10vw] mb-[3vw]" alt="" />
              <h1 className="text-[1.3vw] text-white font-bold">Verlorene Protokolle und manuelle Fehler</h1>
              <div className='text-left pt-[1vw]'><Link to="/Problems" className="">
          <button className=" font-bold text-[1vw] text-white">
            Learn more ↗
          </button>
        </Link></div>
            </div>
            <div className="w-[20vw] h-[20vw] bg-[#ececec] shadow-2xl rounded-md p-[1vw]">
              <img src="public/Home/critical.png" className="w-[10vw] mb-[3vw]" alt="" />
              <h1 className="text-[1.3vw] font-bold">Mangelnder Zugriff auf kritische Daten</h1>
              <div className='text-left pt-[1vw]'><Link to="/Problems" className="">
          <button className=" font-bold text-[1vw] text-[#444444]">
            Learn more ↗
          </button>
        </Link></div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[3vw] mb-[2vw]">
          <div className="w-[20vw] h-[20vw] bg-[#ececec] shadow-2xl rounded-md p-[1vw]">
              <img src="public/Home/manual.png" className="w-[10vw] mb-[3vw]" alt="" />
              <h1 className="text-[1.3vw] font-bold">Zeitaufwändige manuelle Eingabe</h1>
              <div className='text-left pt-[1vw]'><Link to="/Problems" className="">
          <button className=" font-bold text-[1vw] text-[#444444]">
            Learn more ↗
          </button>
        </Link></div>
            </div>
            <div className="w-[20vw] h-[20vw] bg-[#ececec] shadow-2xl rounded-md p-[1vw]">
              <img src="public/Home/Risks.png" className="w-[10vw] mb-[3vw]" alt="" />
              <h1 className="text-[1.3vw] font-bold">Compliance-Risiken und Betriebsstörungen</h1>
              <div className='text-left pt-[1vw]'><Link to="/Problems" className="">
          <button className=" font-bold text-[1vw] text-[#444444]">
            Learn more ↗
          </button>
        </Link></div>
            </div>
          </div>
        </div>
        <div className='p-[1vw] text-right px-[150px]'><Link to="/Problems" className=" mx-[2vw] ">
          <button className=" font-bold text-[20px] hover:text-[#444444]">
            Learn more →
          </button>
        </Link></div>
      </div>
      <div className=" mx-auto bg-[#ececec] h-[40vw] flex flex-col justify-center items-center ">
      <h1 className="text-center m-[1vw] text-[2.8vw] font-bold">Wie es funktioniert</h1>
        <div className="bg-white p-[2vw] mx-auto w-[80vw] h-[30vw] flex-col gap-[4vw] flex overflow-y-auto justify-evenly items-center">
          <div className=" w-[60vw] h-[25vw] flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
              <div className=" p-[2vw] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-full rounded-[2vw] h-full">
                <h1 className="text-[2vw] font-bold">Registrieren Sie sich für Ihr Konto:</h1>
                <p className="text-[1.3vw] my-[1vw]">Beginnen Sie mit GreaseLog, indem Sie sich für Ihr Konto anmelden. Geben Sie einfach Ihre E-Mail-Adresse an und erstellen Sie ein sicheres Passwort, um auf die Plattform zuzugreifen.</p>
              </div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">1</div>
            </div>
          </div>
          <div className=" w-[60vw] h-full flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
            <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">2</div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className=" p-[2vw] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-full rounded-[2vw] h-full">
                <h1 className="text-[2vw] font-bold">Eingabeentsorgungsaufzeichnungen</h1>
                <p className="text-[1.1vw] my-[1vw]">Sobald Sie angemeldet sind, beginnen Sie mit der Eingabe Ihrer Entsorgungsunterlagen und monatlichen Selbstkontrolldaten. Unsere intuitive Benutzeroberfläche erleichtert die Eingabe und Nachverfolgung aller relevanten Informationen und gewährleistet so eine genaue und konforme Dokumentation.</p>
              </div>
            </div>
          </div>
          <div className=" w-[60vw] h-[25vw] flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
              <div className=" p-[2vw] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-full rounded-[2vw] h-full">
                <h1 className="text-[1.8vw] font-bold">Zugriffsberechtigungen verwalten:</h1>
                <p className="text-[1vw] my-[1vw]">Kontrollieren Sie den Zugriff auf Ihre Daten ganz einfach. Mit GreaseLog können Sie Zugriffsberechtigungen für Ihr Team und Ihre Lieferanten verwalten und so sicherstellen, dass nur autorisierte Personen relevante Daten anzeigen oder ändern können. Richten Sie rollenbasierte Zugriffskontrollen ein, um Zugriffsebenen an bestimmte Benutzerrollen und Verantwortlichkeiten anzupassen.</p>
              </div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">3</div>
            </div>
          </div>
          <div className=" w-[60vw] h-[25vw] flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
            <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">4</div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className="p-[2vw] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-full rounded-[2vw] h-full">
                <h1 className="text-[1.4vw] font-bold">Historische Daten archivieren und darauf zugreifen:</h1>
                <p className="text-[1vw] my-[1vw]">Der Zugriff auf historische Daten ist mit GreaseLog einfach. Mit unserer Plattform können Sie frühere Aufzeichnungen mühelos archivieren und abrufen und erhalten so einen umfassenden Überblick über die Historie Ihrer Fettabscheiderverwaltung. Egal, ob Sie frühere Inspektionen überprüfen oder Compliance-Berichte erstellen müssen, GreaseLog ist für Sie da.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-[2vw]'>
        <h1 className="text-center text-[3vw] mt-[2vw] font-bold">Referenzen</h1>
        <div className="h-[30vw]  flex flex-row justify-evenly  items-center text-black">
          <div className="h-[20vw] shadow-lg flex flex-col p-[2vw] items-center w-[30vw] gap-[1vw] rounded-md  bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l">
            <div className="w-[4vw]"><img src="public/Home/profile.png"  alt="" /></div>
            <h1 className="text-[1.8vw]">Shoaib Ahmed</h1>
            <p className="text-[1.2vw] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloribus maxime ducimus, at aspernatur veritatis consequatur deleniti labore perspiciatis beatae?</p>
          </div>
          <div className="h-[20vw] shadow-lg flex flex-col p-[2vw] items-center w-[30vw] gap-[1vw] rounded-md  bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l">
            <div className="w-[4vw]"><img src="public/Home/profile.png"  alt="" /></div>
            <h1 className="text-[1.8vw]">Shoaib Ahmed</h1>
            <p className="text-[1.2vw] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloribus maxime ducimus, at aspernatur veritatis consequatur deleniti labore perspiciatis beatae?</p>
          </div>
          <div className="h-[20vw] shadow-lg flex flex-col p-[2vw] items-center w-[30vw] gap-[1vw] rounded-md  bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l">
            <div className="w-[4vw]"><img src="public/Home/profile.png"  alt="" /></div>
            <h1 className="text-[1.8vw]">Shoaib Ahmed</h1>
            <p className="text-[1.2vw] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloribus maxime ducimus, at aspernatur veritatis consequatur deleniti labore perspiciatis beatae?</p>
          </div>
        </div>
        <div className='p-[1vw] text-right px-[150px]'><Link to="/Feedback" className=" mx-[2vw] ">
          <button className=" font-bold text-[20px] hover:text-[#444444]">
            Learn more →
          </button>
        </Link></div>
      </div>
      <div className='bg-[#ececec] p-[2vw]'>
        <h1 className="text-center text-[3vw] font-bold">Preisgestaltung</h1>
        <div className="h-full p-[2vw] flex flex-row justify-evenly  items-center text-black">
          <div className="h-full shadow-lg flex flex-col p-[2vw] items-center w-[30vw] gap-[1vw] rounded-md hover:bg-[#ececec]  bg-[#D5D5D5]  ">
            <h1 className="text-[2vw] font-bold">Monatlich für 5€</h1>
            <p className="text-[1.2vw] text-center">
            <ul className='flex flex-col gap-[1vw]'>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Entwickelt für die Bedürfnisse der Gastronomie.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Inklusive monatlicher Entsorgungsdokumentation.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Verwaltet Selbstinspektionsaufzeichnungen.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Bietet zugänglichen digitalen Speicher.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Stellt die Einhaltung gesetzlicher Vorschriften sicher.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Kosten: 5 Euro pro Monat.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Flexible und kostengünstige Lösung.</h1></li>
            </ul>
            </p>
          </div>
          <div className="h-full shadow-lg flex flex-col p-[2vw] items-center w-[30vw] gap-[1vw] rounded-md hover:bg-[#ececec]  bg-[#D5D5D5]  ">
            <h1 className="text-[2vw] font-bold">Jährlich für 50€</h1>
            <p className="text-[1.2vw] text-center">
            <ul className='flex flex-col gap-[1vw]'>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Mühelose digitale Dokumentenspeicherung.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Schneller Zugriff auf historische Daten.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Garantiert die Einhaltung der Vorschriften.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Kosten: 50 Euro pro Jahr.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Bequeme und sichere Plattform.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Verbessert die betriebliche Effizienz.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="public/Home/tick.png" className='w-[20px]' alt="" /><h1 className='text-[15px]'>Unterstützt langfristige Kosteneinsparungen.</h1></li>
            </ul>
            </p>
          </div>
        </div>
        <div className='p-[1vw] text-right px-[150px]'><Link to="/Pricing" className=" mx-[2vw] ">
          <button className=" font-bold text-[20px] hover:text-[#444444]">
            Learn more →
          </button>
        </Link></div>
      </div>
      <div className="bg-white h-full p-[2vw]">
      <h1 className="text-center text-[3vw] font-bold">FAQs</h1>
      <div className="flex w-[40vw] flex-col mx-auto mt-[3vw] gap-[1vw]">
        <div className='flex flex-col gap-[0.5vw]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[5vw] flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div1" ? "active" : "" }`} onClick={() => toggleVisibility("div1")} ><h1 className='text-[1vw]'>Q1:Wozu dient ein Fettabscheider in der Gastronomie?</h1><img src="public/Home/arrow.png" className='w-[1vw]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] text-[1vw] h-[7vw] flex items-center rounded-sm ${ visibleDiv === "div1" ? "visible" : "hidden" }`} >Der Fettabscheider ist für die Entsorgung von Küchenabfällen in Restaurants unerlässlich. Es sammelt fetthaltiges Wasser aus Waschbecken, Bodenabläufen und Geschirrspülern, um Fettablagerungen in Abwassersystemen zu verhindern.</div>
        </div>
        <div className='flex flex-col gap-[0.5vw]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[5vw] flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div2" ? "active" : "" }`} onClick={() => toggleVisibility("div2")} ><h1 className='text-[1vw]'>Q2:Wie oft müssen Fettabscheider in Deutschland geleert werden?</h1><img src="public/Home/arrow.png" className='w-[1vw]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[7vw] text-[1vw] flex items-center rounded-sm ${ visibleDiv === "div2" ? "visible" : "hidden" }`} >In Deutschland müssen Fettabscheider monatlich geleert werden, um die ordnungsgemäße Funktion und Einhaltung der Vorschriften sicherzustellen.</div>
        </div>
        <div className='flex flex-col gap-[0.5vw]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[5vw] flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div3" ? "active" : "" }`} onClick={() => toggleVisibility("div3")} ><h1 className='text-[1vw]'>Q3: Wie funktioniert ein Fettabscheider?</h1><img src="public/Home/arrow.png" className='w-[1vw]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[7vw] text-[1vw] flex items-center rounded-sm ${ visibleDiv === "div3" ? "visible" : "hidden" }`} >Ein Fettabscheider sorgt dafür, dass sich fetthaltiges Wasser beruhigt, sodass das Fett nach oben steigt und gleichzeitig Wasser durchfließen kann. Eine Rückhaltevorrichtung fängt das Fett auf, das dann bei der Wartung entfernt wird.</div>
        </div>
        <div className='flex flex-col gap-[0.5vw]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[5vw] flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div4" ? "active" : "" }`} onClick={() => toggleVisibility("div4")} ><h1 className='text-[1vw]'>Q4: Welche Verantwortung haben Restaurantbetreiber in Bezug auf Fettabscheider?</h1><img src="public/Home/arrow.png" className='w-[1vw]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[7vw] text-[1vw] flex items-center rounded-sm ${ visibleDiv === "div4" ? "visible" : "hidden" }`} >Restaurantbetreiber sind für die Wartung und Reparatur von Fettabscheidern sowie die Führung eines digitalen Betriebsprotokolls über Wartungsarbeiten und Abfallentsorgungen verantwortlich.</div>
        </div>
        <div className='flex flex-col gap-[0.5vw]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[5vw] flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div5" ? "active" : "" }`} onClick={() => toggleVisibility("div5")} ><h1 className='text-[1vw]'>Q5:Was passiert mit dem Betriebsprotokoll, wenn ein Restaurant den Besitzer wechselt?</h1><img src="public/Home/arrow.png" className='w-[1vw]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[1vw] h-[7vw] text-[1vw] flex items-center rounded-sm ${ visibleDiv === "div5" ? "visible" : "hidden" }`} >Wenn ein Restaurant den Eigentümer wechselt, kann der neue Eigentümer Zugriff auf das bestehende Betriebsprotokoll erben und so die Kontinuität in der Abfallentsorgungsdokumentation gewährleisten.</div>
        </div>
      </div>
      </div>
      
        <img src="public/Footer.svg" alt="" />
    </div>
  );
};

export default Home;