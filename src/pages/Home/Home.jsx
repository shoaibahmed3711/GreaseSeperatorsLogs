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
      <div className="bg-white h-full ">
        <h1 className="text-[10px] md:text-[3vw]  font-bold text-center py-[5px] md:py-[20px]">
        Verwalten Sie Ihre Fettabscheiderprotokolle digital
        </h1>
        <div className="flex md:flex-row flex-col mx-auto">
          <div className="w-[50vw] mx-auto">
            <h1 className="md:text-[25px] text-[8px] font-bold md:px-[20px] md:py-[14px]">Vereinfachen Sie die Compliance und optimieren Sie den Betrieb Ihres Catering-Unternehmens</h1>
            <p className="md:text-[14px] text-[6px] text-left md:px-[20px]">Willkommen bei GreaseLog – Ihrer Lösung für die problemlose Verwaltung von Fettabscheidern. Verabschieden Sie sich von verlorenem Papierkram und manuellen Fehlern und freuen Sie sich auf mühelose Compliance und Sicherheit. Mit unserer digitalen Plattform können Sie jederzeit und überall problemlos Entsorgungsaufzeichnungen eingeben, monatliche Selbstinspektionen durchführen und auf historische Daten zugreifen. Optimieren Sie die Zusammenarbeit mit Ihrem Team und Ihren Lieferanten und stellen Sie gleichzeitig problemlos die Einhaltung gesetzlicher Vorschriften sicher. Sind Sie bereit, Ihr Fettabscheidermanagement zu revolutionieren?</p>
            <Link to="/login" >
            <button className="bg-[#444444] hover:bg-[#666666] text-white text-[6px] md:text-[16px] px-[5px] md:px-[10px] py-[2px] md:py-[5px] rounded-[3px] md:mx-[30px] md:my-[30px]">Loslegen</button>
            </Link>
          </div>
          <div className="w-[500px] mx-auto">
            <img src="/greaseseperator.png" className="w-[35vw]" alt="" />
          </div>
        </div>
        
      </div>
      <div className='flex flex-col bg-[#ececec] gap-[2vw] p-[2vw] '>
        <h1 className="text-left text-[5vw] flex flex-col font-bold"><p>Lass uns Holen</p> <p>Um uns kennenzulernen</p></h1>
        <p className='h-full flex flex-col p-[2vw] items-right w-[60vw] ml-[30vw] gap-[1vw] rounded-md text-[1.6vw] "'>Unsere Website ist die Anlaufstelle für Fachleute aus der Gastronomiebranche, die auf der Suche nach effizienten Fettabscheiderlösungen sind. Mit einem umfassenden Verständnis der deutschen Vorschriften stellen wir sicher, dass jedes Restaurant die Compliance-Standards einhält. Von der Installation über die Wartung bis hin zu digitalen Betriebsprotokollen optimieren unsere Dienstleistungen das Abfallmanagement. Durch flexible Abonnementpläne bieten wir einen nahtlosen Datenzugriff bei Eigentümerwechseln und sorgen so für Sicherheit für unsere Kunden. Vertrauen Sie uns für zuverlässige Wartung und innovative technologische Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind.</p>
      </div>
      <div className="p-[2vw]  h-full ">
        <h1 className="text-center text-[15px] md:text-[30px] font-bold">Problemstellung</h1>
        <div className="flex flex-col justify-center items-center  gap-[20px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] mt-[20px]">
            <div className="w-[200px]  md:w-[300px] h-full bg-[#444444] shadow-2xl rounded-md p-[20px]">
              <img src="/Home/error.png" className="w-[150px] mb-[30px]" alt="" />
              <h1 className="text-[20px] text-white font-bold">Verlorene Protokolle und manuelle Fehler</h1>
              <div className='text-left pt-[10px]'><Link to="/Problems" className="">
          <button className=" font-bold text-[15px] text-white">
            Learn more ↗
          </button>
          </Link></div>
            </div>
            <div className="w-[200px]  md:w-[300px] h-full bg-[#ececec] shadow-2xl rounded-md p-[20px]">
              <img src="/Home/critical.png" className="w-[150px] mb-[30px]" alt="" />
              <h1 className="text-[20px] font-bold">Mangelnder Zugriff auf kritische Daten</h1>
              <div className='text-left pt-[10px]'><Link to="/Problems" className="">
              <button className=" font-bold text-[15px] text-[#444444]">
            Learn more ↗
          </button>
        </Link></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] mb-[2vw]">
          <div className="w-[200px]  md:w-[300px] h-full bg-[#ececec] shadow-2xl rounded-md p-[20px]">
              <img src="/Home/manual.png" className="w-[150px] mb-[30px]" alt="" />
              <h1 className="text-[20px] font-bold">Zeitaufwändige manuelle Eingabe</h1>
              <div className='text-left pt-[10px]'><Link to="/Problems" className="">
              <button className=" font-bold text-[15px] text-[#444444]">
            Learn more ↗
          </button>
        </Link></div>
            </div>
            <div className="w-[200px]  md:w-[300px] h-full bg-[#ececec] shadow-2xl rounded-md p-[20px]">
              <img src="/Home/Risks.png" className="w-[150px] mb-[30px]" alt="" />
              <h1 className="text-[20px] font-bold">Compliance-Risiken und Betriebsstörungen</h1>
              <div className='text-left pt-[10px]'><Link to="/Problems" className="">
              <button className=" font-bold text-[15px] text-[#444444]">
            Learn more ↗
          </button>
        </Link></div>
            </div>
          </div>
        </div>
        <div className='p-[1vw] text-right px-[150px]'><Link to="/Problems" className=" mx-[2vw] ">
          <button className=" font-bold text-[2vw] hover:text-[#444444]">
            Learn more →
          </button>
        </Link></div>
      </div>
      <div className=" mx-auto bg-[#ececec] pb-[100px] flex flex-col justify-center items-center ">
      <h1 className="text-center m-[1vw] text-[30px] font-bold">Wie es funktioniert</h1>
        <div className="bg-white p-[2vw] mx-auto w-[80vw] h-[300px] flex-col gap-[4vw] flex overflow-y-auto justify-evenly items-center">
          <div className=" w-[60vw]  flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
              <div className=" p-[20px] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-[300px] rounded-[3px] h-full">
                <h1 className="text-[20px] font-bold">Registrieren Sie sich für Ihr Konto:</h1>
                <p className="text-[13px] my-[1vw]">Beginnen Sie mit GreaseLog, indem Sie sich für Ihr Konto anmelden. Geben Sie einfach Ihre E-Mail-Adresse an und erstellen Sie ein sicheres Passwort, um auf die Plattform zuzugreifen.</p>
              </div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">1</div>
            </div>
          </div>
          <div className=" w-[60vw]  flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
            <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">2</div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className=" p-[20px] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-[300px] rounded-[3px] h-full">
                <h1 className="text-[16px] font-bold">Eingabeentsorgungsaufzeichnungen</h1>
                <p className="text-[13px] my-[1vw]">Sobald Sie angemeldet sind, beginnen Sie mit der Eingabe Ihrer Entsorgungsunterlagen und monatlichen Selbstkontrolldaten. Unsere intuitive Benutzeroberfläche erleichtert die Eingabe und Nachverfolgung aller relevanten Informationen und gewährleistet so eine genaue und konforme Dokumentation.</p>
              </div>
            </div>
          </div>
          <div className=" w-[60vw]  flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
            <div className="p-[20px] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-[300px] rounded-[3px] h-full">
                <h1 className="text-[16px] font-bold">Zugriffsberechtigungen verwalten:</h1>
                <p className="text-[13px] my-[1vw]">Kontrollieren Sie den Zugriff auf Ihre Daten ganz einfach. Mit GreaseLog können Sie Zugriffsberechtigungen für Ihr Team und Ihre Lieferanten verwalten und so sicherstellen, dass nur autorisierte Personen relevante Daten anzeigen oder ändern können. Richten Sie rollenbasierte Zugriffskontrollen ein, um Zugriffsebenen an bestimmte Benutzerrollen und Verantwortlichkeiten anzupassen.</p>
              </div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">3</div>
            </div>
          </div>
          <div className=" w-[60vw]  flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
            <div className="border-[#ececec] border-[1vw] rounded-full p-[2.5vw] w-[10vw] font-bold text-center text-[2vw]">4</div>
              <div className="w-[12vw] bg-[#ececec] h-[1vw]"></div>
              <div className=" p-[20px] bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l w-[300px] rounded-[3px] h-full">
                <h1 className="text-[16px] font-bold">Historische Daten archivieren und darauf zugreifen:</h1>
                <p className="text-[13px] my-[1vw]">Der Zugriff auf historische Daten ist mit GreaseLog einfach. Mit unserer Plattform können Sie frühere Aufzeichnungen mühelos archivieren und abrufen und erhalten so einen umfassenden Überblick über die Historie Ihrer Fettabscheiderverwaltung. Egal, ob Sie frühere Inspektionen überprüfen oder Compliance-Berichte erstellen müssen, GreaseLog ist für Sie da.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-[20px]'>
        <h1 className="text-center text-[30px] mt-[2vw] font-bold">Referenzen</h1>
        <div className=" flex flex-col md:flex-row gap-[20px] justify-evenly  items-center text-black">
          <div className=" shadow-lg flex flex-col p-[30px] items-center w-[300px] gap-[1vw] rounded-md  bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l">
            <div className="w-[30px]"><img src="public/Home/profile.png"  alt="" /></div>
            <h1 className="text-[20px]">David J.</h1>
            <p className="text-[12px] text-center">“Fast services, Experienced employee and they really cleaned in just 1 day.“ </p>
          </div>
          <div className=" shadow-lg flex flex-col p-[30px] items-center w-[300px] gap-[1vw] rounded-md  bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l">
            <div className="w-[30px]"><img src="public/Home/profile.png"  alt="" /></div>
            <h1 className="text-[20px]">Cristen</h1>
            <p className="text-[12px] text-center">“Fettabscheider gives us the functionality and flexibility we need to manage our Kitchen pipeline while saving us $3000 annually.”</p>
          </div>
          <div className=" shadow-lg flex flex-col p-[30px] items-center w-[300px] gap-[1vw] rounded-md  bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l">
            <div className="w-[30px]"><img src="public/Home/profile.png"  alt="" /></div>
            <h1 className="text-[20px]">Muller</h1>
            <p className="text-[12px] text-center">“Fettabscheider employee services are much better than other cleaning companies.”</p>
          </div>
        </div>
        <div className='p-[1vw] text-right px-[80px]'><Link to="/Feedback" className=" mx-[2vw] ">
          <button className=" font-bold text-[10px] hover:text-[#444444]">
            Learn more →
          </button>
        </Link></div>
      </div>
      <div className='bg-[#ececec] p-[2vw]'>
        <h1 className="text-center text-[30px] font-bold">Preisgestaltung</h1>
        <div className="h-full p-[2vw] flex gap-[10px] flex-col lg:flex-row justify-evenly  items-center text-black">
          <div className="h-full shadow-lg flex flex-col py-[20px] px-[10px] items-center w-[300px] md:w-[400px] gap-[10px] rounded-[] hover:bg-[#ececec] bg-[#D5D5D5] ">
            <h1 className="text-[20px] font-bold">Monatlich für 5€</h1>
            <p className=" ">
            <ul className='flex flex-col gap-[10px]'>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Entwickelt für die Bedürfnisse der Gastronomie.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Inklusive monatlicher Entsorgungsdokumentation.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Verwaltet Selbstinspektionsaufzeichnungen.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Bietet zugänglichen digitalen Speicher.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Stellt die Einhaltung gesetzlicher Vorschriften sicher.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Kosten: 5 Euro pro Monat.</h1></li>
                <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Flexible und kostengünstige Lösung.</h1></li>
            </ul>
            </p>
          </div>
          <div className="h-full shadow-lg flex flex-col py-[20px] px-[10px] items-center w-[300px] md:w-[400px] gap-[10px] rounded-[] hover:bg-[#ececec] bg-[#D5D5D5] ">
            <h1 className="text-[20px] font-bold">Jährlich für 50€</h1>
            <p className="">
            <ul className='flex flex-col gap-[10px]'>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Mühelose digitale Dokumentenspeicherung.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Schneller Zugriff auf historische Daten.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Garantiert die Einhaltung der Vorschriften.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Kosten: 50 Euro pro Jahr.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Bequeme und sichere Plattform.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Verbessert die betriebliche Effizienz.</h1></li>
              <li className='flex flex-row items-center gap-[10px]'><img src="/Home/tick.png" className='w-[15px]' alt="" /><h1 className='text-[10px]'>Unterstützt langfristige Kosteneinsparungen.</h1></li>
            </ul>
            </p>
          </div>
        </div>
        <div className='p-[1vw] text-right px-[50px]'><Link to="/Pricing" className=" mx-[2vw] ">
          <button className=" font-bold text-[10px] hover:text-[#444444]">
            Learn more →
          </button>
        </Link></div>
      </div>
      <div className="bg-white h-full p-[2vw]">
      <h1 className="text-center text-[3vw] font-bold">FAQs</h1>
      <div className="flex w-[250px] md:w-[350px] flex-col mx-auto mt-[3vw] gap-[10px]">
        <div className='flex flex-col gap-[4px]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div1" ? "active" : "" }`} onClick={() => toggleVisibility("div1")} ><h1 className='text-[10px]'>Q1:Wozu dient ein Fettabscheider in der Gastronomie?</h1><img src="/Home/arrow.png" className='w-[10px]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] text-[10px] h-full flex items-center rounded-sm ${ visibleDiv === "div1" ? "visible" : "hidden" }`} >Der Fettabscheider ist für die Entsorgung von Küchenabfällen in Restaurants unerlässlich. Es sammelt fetthaltiges Wasser aus Waschbecken, Bodenabläufen und Geschirrspülern, um Fettablagerungen in Abwassersystemen zu verhindern.</div>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div2" ? "active" : "" }`} onClick={() => toggleVisibility("div2")} ><h1 className='text-[10px]'>Q2:Wie oft müssen Fettabscheider in Deutschland geleert werden?</h1><img src="/Home/arrow.png" className='w-[10px]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full text-[10px] flex items-center rounded-sm ${ visibleDiv === "div2" ? "visible" : "hidden" }`} >In Deutschland müssen Fettabscheider monatlich geleert werden, um die ordnungsgemäße Funktion und Einhaltung der Vorschriften sicherzustellen.</div>
        </div>
        <div className='flex flex-col gap-[4px] '>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div3" ? "active" : "" }`} onClick={() => toggleVisibility("div3")} ><h1 className='text-[10px]'>Q3: Wie funktioniert ein Fettabscheider?</h1><img src="/Home/arrow.png" className='w-[10px]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full text-[10px] flex items-center rounded-sm ${ visibleDiv === "div3" ? "visible" : "hidden" }`} >Ein Fettabscheider sorgt dafür, dass sich fetthaltiges Wasser beruhigt, sodass das Fett nach oben steigt und gleichzeitig Wasser durchfließen kann. Eine Rückhaltevorrichtung fängt das Fett auf, das dann bei der Wartung entfernt wird.</div>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div4" ? "active" : "" }`} onClick={() => toggleVisibility("div4")} ><h1 className='text-[10px]'>Q4: Welche Verantwortung haben Restaurantbetreiber in Bezug auf Fettabscheider?</h1><img src="/Home/arrow.png" className='w-[10px]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full text-[10px] flex items-center rounded-sm ${ visibleDiv === "div4" ? "visible" : "hidden" }`} >Restaurantbetreiber sind für die Wartung und Reparatur von Fettabscheidern sowie die Führung eines digitalen Betriebsprotokolls über Wartungsarbeiten und Abfallentsorgungen verantwortlich.</div>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full flex items-center justify-between rounded-sm cursor-pointer ${ visibleDiv === "div5" ? "active" : "" }`} onClick={() => toggleVisibility("div5")} ><h1 className='text-[10px]'>Q5:Was passiert mit dem Betriebsprotokoll, wenn ein Restaurant den Besitzer wechselt?</h1><img src="/Home/arrow.png" className='w-[10px]' alt="" /></div>
          <div className={`bg-gradient-to-r from-[#ececec]  to-[#D5D5D5] hover:bg-gradient-to-l shadow-lg p-[10px] h-full text-[10px] flex items-center rounded-sm ${ visibleDiv === "div5" ? "visible" : "hidden" }`} >Wenn ein Restaurant den Eigentümer wechselt, kann der neue Eigentümer Zugriff auf das bestehende Betriebsprotokoll erben und so die Kontinuität in der Abfallentsorgungsdokumentation gewährleisten.</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;