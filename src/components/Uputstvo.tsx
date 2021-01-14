import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from './NavigationBar'

export default function Uputstvo() {
    return (
        <Container  >
            <NavigationBar />
            <h1>Uputsvo za koriscnjenje aplikacije</h1>
            <p>
                Aplikacija predstavlja kalkulator koji izvrsava osnovne matematicke operacije.
                Moguce je izvrsiti sledece matematicke operacije:
                <ul>
                    <li>
                        Sabiranje dva broja
                    </li>
                    <li>
                        Oduzimanje dva broja
                    </li>
                    <li>
                        Mnozenje dva broja
                    </li>
                    <li>
                        Deljenje dva broja
                    </li>
                    <li>
                        Promena znaka broja
                    </li>
                </ul>

            </p>
            <p>
                Klikom na dugme sa cifrom vrsi se dodavanje na kraj broja koji je prikazan na vrhu.
        </p>
            <p>
                Klikom na dugme +/- izvrsice se promena znaka broja
        </p>
            <p>
                Klikom na dugme = izvrsice se poslednja uneta operacija izmedju poslednja 2 uneta broja
        </p>
            <p>
                Klikom na dugme sa nekom od ostalih matematickih operacija postavice se trenutna operacija i korisnik ce moci da unese drugi broj.
                Ukoliko je operacija vec postavljena ona ce biti izvrsena a nova operacija ce se odnositi na rezultat prethodne i broj koji ce biti nakdnadno unesen.
        </p>
            <p>
                Klikom na dugme C vrednost tekuceg broja se postavlja na 0, a na CE vrsi se resetovanje oba broja kao i operacije.
        </p>
            <p>
                Sa desne strane moze se videti lista svih izvrsenih operacija. Ova lista se moze obrisati klikom na dugme.
        </p>
        </Container>
    )
}
