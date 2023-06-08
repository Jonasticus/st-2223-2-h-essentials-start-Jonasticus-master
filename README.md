# Essentials H4 DOM
Maak volgende opdrachten in EssentialsDOM.html

+ Plaats een div met id feedback in de pagina, wijzig de inhoud van deze div mbv Javascript.

+ Plaats 2 linken in de pagina, gebruik de gepaste DOM-instructie om beide linken eenzelfde targetadres mee te geven (gebruik adres www.howest.be)? 

+ Plaats een button met klass *btn-yellow* in de pagina, wijzig de klasse van deze button in klasse *btn-pink*    

+ Maak in de pagina mbv Javascript een paragraaf aan met volgende tekstinhoud. (*Dit is een paragraaf aangemaakt in Javascript*).
---

# Essentials H5 Events
Maak volgende opdrachten in EssentialsEvents.html

+ Plaats een div met id *start* in de pagina, roep deze mbv het DOM op.
+ Plaats een div met id *end* in de pagina, roep deze mbv het DOM op.
+ Koppel aan de startdiv een *doubleclick*- event die de functie **changeContentStart** oproept. In deze functie wijzig je de inhoud van de div met id *start*. Gebruik *tekstinhoud werd aangepast* als aangepaste tekst.
+ Koppel aan de div met id *end* een *mousemove*- event die de functie **hideDivStart** oproept. In deze functie verberg je de div met id *start* en verwijder je de handler die op de div met id *start* werd ingesteld.
---

# Essentials H7 Functies
Maak volgende opdrachten in EssentialsFunctions.html

+ Plaats een button met klasse *btn-yellow*, id *BMI* en opschrift *calculate BMI* in de pagina, roep deze via het DOM op.  
+ Koppel aan deze knop een *click-event* dat op zijn beurt de functie *calculateBMI* oproept.
+ Aan deze functie *calculateBMI* geef je de argumenten **length en weight** mee. De BMI bereken je met volgende rekenregel *weight/length²*
+ Toon het resultaat van de berekening in een console.
+ Gebruik je eigen gewicht en lengte in deze oefening.
+ Ga eerst na of je het correct aantal argumenten in de functie hebt meegegeven.

+ Plaats een button met klasse *btn-yellow*, id *Message* en opschrift *show Message* in de pagina, roep deze via het DOM op.  
+ Koppel aan deze knop een *doubleclick-event* die een *anonieme functie* oproept. Deze toont eent `alert()` met de boodschap *Warning!*.
---

# Essentials H8 Objecten
Maak volgende opdrachten in EssentialsObjects.html
Gebruik volgend luidspreker-object: 

```javascript
const loudspeaker = {
  brand: "Bose",
  model: "SoundLink Mini II",
  frequencyResponse: "50 Hz - 20 kHz",
  powerOutput: "10 W",
  connectivity: "Bluetooth"
};
```

* Plaats een button met klasse *btn-yellow*, id *btnshowDataObject* en opschrift *show DATA* in de pagina, roep deze via het DOM op.  
  * Koppel aan deze knop een *click-event* dat de functie *showData* oproept.

* In deze functie *showData* toon je de volgende opdrachten in de *console*:
  * Toon het *model* van de luidspreker, gebruik *de array-notatie*.
  * Toon het *merk* van de luidspreker, gebruik *de dot-notatie*.
  * Toon alle eigenschappen van het luidspreker-object, gebruik een passende lus.
  * Toon alle waarden van het luidspreker-object, gebruik een passende lus.
  * Toon alle eigenschappen en waarden van het luidpreker-object, gebruik volgende vorm **waarde (eigenschap)**, gebruik een passende lus.
---

# Essentials H9 Arrays
Maak volgende opdrachten in EssentialsArrays.html
Gebruik volgende array met luidspreker-objecten: 

```javascript
const loudspeakers = [
  { brand: "Bose", model: "SoundLink Mini II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "10 W", connectivity: "Bluetooth" },
  { brand: "JBL", model: "Flip 5", frequencyResponse: "70 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" },
  { brand: "Sonos", model: "One", frequencyResponse: "60 Hz - 20 kHz", powerOutput: "6 W", connectivity: "Wi-Fi, Bluetooth" },
  { brand: "Beats", model: "Pill+", frequencyResponse: "40 Hz - 20 kHz", powerOutput: "12 W", connectivity: "Bluetooth" },
  { brand: "Marshall", model: "Stockwell II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" }
];
```

+ Plaats op de pagina een button met klasse *btn-yellow*, id *btnshowDataArray* en opschrift *show DATA* in de pagina, roep deze via het DOM op.  
+ Koppel aan deze knop een *click-event* dat de functie *showDataArray* oproept.
+ In deze functie *showDataArray* toon je het resultaat van volgende functies *op de pagina*:
  + Functie **showBrands**: Toon alle brands, gebruik een passende lus.
  + Functie **showBluetoothOnlyModels**: Toon alle modellen die enkel *Bluetooth* als connectie-mogelijkheid hebben, gebruik een passende lus. **Tip: gebruik filter**
  + Functie **addSpeaker**: Voeg een **zelf-gekozen** speaker-object toe aan de array. 
  + Functie **removeLastSpeaker**: Verwijder het laatst toegevoegde speaker-object uit de array. 
---

# Essentials H11 Formulier-objecten
Maak volgende opdrachten in EssentialsForms.html
Gebruik volgende array met luidspreker-objecten: 

```javascript
const loudspeakers = [
  { brand: "Bose", model: "SoundLink Mini II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "10 W", connectivity: "Bluetooth" },
  { brand: "JBL", model: "Flip 5", frequencyResponse: "70 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" },
  { brand: "Sonos", model: "One", frequencyResponse: "60 Hz - 20 kHz", powerOutput: "6 W", connectivity: "Wi-Fi, Bluetooth" },
  { brand: "Beats", model: "Pill+", frequencyResponse: "40 Hz - 20 kHz", powerOutput: "12 W", connectivity: "Bluetooth" },
  { brand: "Marshall", model: "Stockwell II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" }
];
```

* Plaats een *select* op de pagina, vul deze op met de *brands* uit de array *loudspeakers*
* Koppel aan deze *select* een *change-event* dat de functie *showDataSelectedSpeaker* oproept.
* In deze functie *showDataSelectedSpeaker* toon je het **model** en de **powerOutput** van de speaker van de geselecteerde **brand**. Toon deze informatie in een *paragraaf*

* Plaats een *checkbox* op de pagina, geef deze het opschrift *20 W*.
* Koppel aan deze *checkbox* een *change-event* dat de functie *showData20WSpeakers* oproept.
* In deze functie *showData20WSpeakers* toon je het **model** en de **connectivity** van de speaker van de speakers met een **powerOutput** van **20 W**.
* Toon deze informatie in een *paragraaf* dat je zelf via het DOM aan maakt.
---

# Essentials H12 JSON
Maak volgende opdrachten in EssentialsJSON.html
Gebruik volgende JSON object. 

```json
{
  "loudspeakers": [
    {
      "brand": "Bose",
      "model": "SoundLink Mini II",
      "frequencyResponse": "50 Hz - 20 kHz",
      "powerOutput": "10 W",
      "connectivity": ["Bluetooth"]
    },
    {
      "brand": "JBL",
      "model": "Flip 5",
      "frequencyResponse": "70 Hz - 20 kHz",
      "powerOutput": "20 W",
      "connectivity": ["Bluetooth", "NFC"]
    }
  ],
  "amplifiers": [
    {
      "brand": "Marantz",
      "model": "PM6006",
      "powerOutput": "45 W per channel",
      "inputs": ["Analog RCA", "Optical", "Coaxial"]
    },
    {
      "brand": "Denon",
      "model": "PMA-600NE",
      "powerOutput": "45 W per channel",
      "inputs": ["Analog RCA", "Optical", "Coaxial"]
    },
    {
      "brand": "NAD",
      "model": "C316BEE V2",
      "powerOutput": "40 W per channel",
      "inputs": ["Analog RCA", "Optical"]
    }
  ]
}
```

* Plaats een *select* op de pagina, vul deze op met de *keys* (loudspeakers, amplifiers)

* Koppel aan deze *select* een *change-event* dat de functie *showDataSelection* oproept.

* In deze functie *showDataSelection* toon je alle data van de gekozen *key*. Gebruik hier de gepaste lussen. Ga na of de sleutel een object of array is.

* Toon deze informatie in een *paragraaf* dat je zelf via het DOM aan maakt, gebruik volgende vorm.

**voor de loudspeakers:**
BRAND | model (connectivity), powerOutput
***voorbeeld:***
JBL | Flip 5 (Bluetooth,NFC), 20W


**voor de amplifiers:**
BRAND | model (inputs), powerOutput
***voorbeeld:***
NAD | C316BEE V2 (Analog RCA,Optical), 40 W per channel

