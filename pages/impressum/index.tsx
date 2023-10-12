import axios from 'axios';
import { Fragment } from 'react';

export default function Impressum(props:any) {
  const aboutMe = props.aboutMe;
  return ( <Fragment>

    <div className="container">
    <div className="row  d-flex justify-content-center">
        <div className="col-md-12 col-lg-12 text-color3">
            <div className="impressum-block">

                <h1 className="text-color3"><strong>Impressum:</strong></h1>
                <hr/>
                <h3 className="text-color3"><strong>Angaben gemäß § 5 TMG:</strong></h3>
                <br/>
                <div className="text-color4">{aboutMe.name}</div>
                <div className="text-color4">{aboutMe.street}</div>
                <div className="text-color4">{aboutMe.plz}</div>
                <hr/>
                <h3 className="text-color3"><strong>Kontakt:</strong></h3>
                <br/>
                <div className="text-color4">Telefon: {aboutMe.tel}</div>
                <div className="text-color4">E-Mail: {aboutMe.email}</div>
                <hr/>
                <h3 className="text-color3"><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2
                        RStV:</strong></h3>
                <br/>
                <div className="text-color4">{aboutMe.name}</div>
                <div className="text-color4">{aboutMe.street}</div>
                <div className="text-color4">{aboutMe.plz}</div>
                <hr/>
                <h3 className="text-color3"><strong>Haftungsausschluss:</strong></h3>
                <br/>
                <div className="text-color4">
                    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt und dienen ausschließlich als
                    persönliches Portfolio/CV. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme
                    ich jedoch keine Gewähr. Als Privatperson bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf dieser
                    Seite verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Privatperson jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                    die auf eine rechtswidrige Tätigkeit hinweisen. Die Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                    diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
                    Inhalte umgehend entfernen.
                </div>
                <hr/>
                <h3 className="text-color3"><strong>Urheberrecht:</strong></h3>
                <br/>
                <div className="text-color4">
                    Die durch mich erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen
                    Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                    Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur
                    für
                    den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von
                    mir
                    erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Solltest
                    du
                    trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden
                    Hinweis.
                    Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </div>
                <hr/>
                <h3 className="text-color3"><strong>Datenschutz:</strong></h3>
                <div className="text-color4">
                    Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                    meiner Seite personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben
                    werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne deine
                    ausdrückliche Zustimmung nicht an Dritte weitergegeben.

                    Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                    nicht möglich.

                    Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten
                    wie Postanschriften, Telefon- und Faxnummern sowie E-Mail-Adressen durch Dritte zur Übersendung von
                    nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die
                    Versender von sogenannten Spam-Mails bei Verstößen gegen dieses Verbot sind ausdrücklich
                    vorbehalten.

                    Dieses Impressum gilt auch für meine Social-Media-Profile (falls zutreffend) und meine dort
                    hinterlegten Kontaktdaten.
                </div>
            </div>
        </div>
    </div>
</div>
 </Fragment>
   )
 }
 
 export async function getServerSideProps()
 {

   const aboutMe = await axios.post('http://localhost:3000/api/aboutMe', {key:process.env.PROTECT_API}).then(x => {return x.data});
   
   return {
     props: {
       aboutMe
     }
   }
 }