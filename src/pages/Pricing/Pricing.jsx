import React from 'react'
import { Link } from 'react-router-dom'
const Pricing = () => {
  return (
    <div className='bg-[#ececec]'>
      <h1 className='text-center text-[4vw] font-black p-[2vw]'>Einmal zahlen, für immer nutzen</h1>
      <p className='text-center text-[1.5vw] font-bold mb-[3vw]'>Beginnen Sie mit dem Betriebsprotokoll des Fettabscheiders <br />Ihr Partner für die Küchenentwässerung</p>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='bg-white m-[20px] p-[20px] w-[500px] shadow-lg rounded-[0.7vw]'>
          <div>
            <h1 className='text-[30px] font-black'>Monthly</h1>
            <h2 className='text-[15px] font-semibold'>Only for</h2>
            <h1 className='flex flex-row items-center'><h1 className='font-semibold text-[45px]'>€</h1><h1 className='text-[65px] ml-[7px] font-black'>4.99</h1></h1>
            <button className='w-[460px] h-[50px] text-white rounded-[0.2vw] rounded-tl-[] bg-[#444444] hover:bg-black'>
            <Link to='/SubscriptionForm' className='text-[30px] '>
            Subscribe
        </Link>
            </button>
          </div>
          <ul>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p> Für nur 5 € pro Monat bietet unser gastronomisches Abo eine monatliche Entsorgungsdokumentation, eine Selbstkontrollprotokollverwaltung und eine praktische digitale Speicherung.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Gastronomie-Abo: einfache Entsorgungsdokumentation, gesetzeskonforme Aufzeichnungen, zugängliche historische Daten, alles zu einem geringen Preis.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p> Unser Abonnement verwaltet die Selbstkontrollunterlagen für Gastronomiebetriebe digital und stellt die Einhaltung gesetzlicher Vorschriften für 5 € monatlich sicher.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Für nur 5 € monatlich bietet unser Abonnement Gastronomiebetrieben eine sichere digitale Speicherung, die einfachen Zugriff und Datenintegrität gewährleistet.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p> Für 5 € monatlich unterstützt unser Abonnement Gastronomiebetriebe bei der digitalen Verwaltung von Selbstkontrollunterlagen und sorgt so für die Einhaltung gesetzlicher Vorschriften und Sicherheit.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p> Unser Abonnement für 5 €/Monat bietet Gastronomiebetrieben eine flexible, kostengünstige Lösung für die Verwaltung von Betriebsunterlagen, die Sicherstellung von Compliance und eine maßgeschneiderte digitale Speicherung.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p> Unser auf Gastronomiebetriebe zugeschnittenes Abonnement für 5 €/Monat bietet eine umfassende Lösung zur Verwaltung der Eigenkontrolle und Entsorgungsdokumentation.</p></li>
          </ul>
        </div>
          <div className='bg-white m-[20px] p-[20px] w-[500px] shadow-lg rounded-[0.7vw] '>
          <div>
          <h1 className='text-[30px] font-black'>Yearly</h1>
          <h2 className='text-[15px] font-semibold'>Only for</h2>
          <h1 className='flex flex-row items-center'><h1 className='font-semibold text-[45px]'>€</h1><h1 className='text-[65px] ml-[7px] font-black'>49.99</h1></h1>
          </div>
          <button className='w-[460px]  h-[50px] text-white rounded-[0.2vw] bg-[#444444] hover:bg-black'>
            <Link to='/SubFormYear' className='text-[30px] '>
            Subscribe
        </Link>
            </button>
          <ul>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Unser Jahresabonnement zum Preis von 50 € gewährleistet eine mühelose digitale Dokumentenspeicherung, schnellen Zugriff auf historische Daten und die Einhaltung gesetzlicher Vorschriften.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Für eine Pauschalgebühr von 50 € pro Jahr bietet unser Abonnement eine nahtlose digitale Dokumentenspeicherung, schnellen Zugriff auf historische Daten und die Einhaltung gesetzlicher Vorschriften für Gastronomiebetriebe.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Jahresabonnement: 50 €. Zuverlässiger digitaler Speicher für die Gastronomie. Schneller Datenzugriff, Einhaltung gesetzlicher Vorschriften.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Abonnement für 50 €/Jahr: Steigern Sie die Effizienz mit der problemlosen digitalen Dokumentenspeicherung für die Gastronomie und stellen Sie so die Compliance sicher.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Gastronomieorientiertes Jahresabonnement: sichere, effiziente digitale Speicherung, Compliance, 50 €/Jahr.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Steigern Sie die Effizienz: Jahresabonnement für 50 €, das digitalen Speicher, schnellen Datenzugriff und die Einhaltung gesetzlicher Vorschriften bietet.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="/images/tick.png" className='w-[30px] mr-[7px]' alt="" /><p>Erschwingliches und komfortables Jahresabonnement: umfassende digitale Dokumentenablage für Gastronomiebetriebe zur Compliance-Gewährleistung für 50 €/Jahr.</p></li>
          </ul>
        </div>
        </div>
      <h1 className='text-center text-[4vw] font-black p-[2vw]'>Compare Plan & Feature</h1>
      <div className='flex justify-center items-center '>
        <table className='w-[900px] bg-white'>
          <thead className=''>
            <tr>
              <th className='text-[25px] py-[20px]'>Features</th>
              <th className='text-[25px] py-[20px]'>Monthly</th>
              <th className='text-[25px] py-[20px]'>Yearly</th>
            </tr>
          </thead>
          <tbody className=' p-[100px]'>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Monatliche Entsorgungsdokumentation. <strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Entwickelt für die Gastronomie.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Verwaltung von Selbstinspektionsaufzeichnungen.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Zugänglicher digitaler Speicher.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Sorgt für die Einhaltung von Vorschriften.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Bequemer Zugriff auf historische Daten.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Kosteneffiziente Lösung.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Flexible und erschwingliche Preisgestaltung.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Umfassendes Betriebsdatenmanagement.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Maßgeschneiderte Lösung für Gastronomiebetriebe.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Echtzeit-Sichtbarkeit der Leistung des Fettabscheiders.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Technischer Support für digitale Plattformen.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Verfolgung historischer Datentrends.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Remote access to operating logs.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Ungenauigkeiten aufgrund inkonsistenter Dateneingabe.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Schwierigkeiten bei der Integration in bestehende Systeme oder Arbeitsabläufe.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Begrenzte Verfügbarkeit des technischen Supports.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Komplexität bei der Verwaltung von Zugriffsrechten.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Unfähigkeit, den Wartungs- und Reparaturverlauf effektiv zu verfolgen.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Hohe Kosten im Zusammenhang mit der manuellen Aufzeichnung.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pricing


