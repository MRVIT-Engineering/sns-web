import { Suspense } from 'react';
import Navbar from '@/components/navigation/Navbar';

export default function StatutPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <Suspense>
        <Navbar showSearchBar={false} />
      </Suspense>
      <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-center">
          STATUTUL
          <br />
          "SINDICATULUI NATIONAL SOLIDARITATEA"
          <br />
          <span className="text-lg font-normal">Adoptat in Adunarea Generala din 2025</span>
        </h1>
        <pre className="whitespace-pre-wrap text-gray-800 bg-white rounded-lg shadow-md p-6 text-base leading-relaxed">
          {`
Capitolul I
DISPOZIŢII GENERALE

Art. 1	Sindicatul National Solidaritatea, este o organizaţie sindicală care reuneşte, pe baza liberului consimţământ, toate categoriile de angajaţi, funcţionari publici şi personal contractual, din sectorul institutional al Ministerului Finantelor Publice. bugetar din Romania, in principal din administratia publica.
Art. 2 (1) Sindicatul National Solidaritatea îşi desfăşoară activitatea cu respectarea legislaţiei naţionale si a Uniunii Europene.
(2) Principiile fundamentale de organizare şi funcţionare ale S.N.S. National Solidaritatea sunt: egalitatea in drepturi, transparenta, profesionalismul si solidaritatea;
(3) Sediul S.N.S. National Solidaritatea este in Cluj-Napoca, Colonia Faget, nr. 10i, judeţ Cluj.
(4) In continuare, pentru denumirea Sindicatul National Solidaritatea din prezentul statut va fi folosit acronimul S.N.S.
(5) S.N.S. este independent fata de orice alte institutii sau organizatii de stat sau private si fata de partidele politice;

Capitolul II
OBIECTIVE

Art. 3	Sindicatul S.N.S. îşi propune următoarele obiective:
1. Apărarea si promovarea drepturilor si intereselor membrilor săi, inscrise in Constitutia Romaniei, Conventiile internationale la care Romania este parte, precum si in legislatia interna;
2. Sustinerea la toate nivelurile, a drepturilor si intereselor membrilor sai, prin reprezentarea acestora in fata instantelor de judecata, parlament, ministere sau alte institutii, in dialogul social bipartit si tripartit la toate nivelurile.
3. Apararea libertatii de actiune si de opinie a membrilor sai, prin desfasurarea de actiuni sindicale precum: mitinguri, pichetari, greve sau orice alte actiuni sindicale prevazute de lege.
4. Asigurarea si promovarea transparentei totale in intreaga activitate din cadrul Ministeruluil Finantelor Publice; sistemului bugetar din Romania;
5. Promovarea profesionalismului si a solidarităţii membrilor săi si îmbunătăţirea educaţiei sindicale;
6. Colaborarea pe orizontală şi verticală cu orice altă structură sindicală din alte ramuri de activitate in vederea asigurarii unei protectii maxime pentru membrii sai;
7. Formularea şi susţinerea de proiecte de acte normative, prevederi speciale funcţionarilor din finanţele publice sau modificări ale legislaţiei existente, referitoare la oricare dintre drepturile şi/sau interesele legitime ale membrilor săi;
6. obţinerea reprezentativităţii la nivelul sistemului instituţional al Ministerului Finanţelor Publice.
8. organizarea şi susţinerea unor acţiuni cu caracter profesional, social, economic, cultural şi sportiv;

... (rest of your text here, keep the same format)
`}
        </pre>
      </div>
    </div>
  );
}
