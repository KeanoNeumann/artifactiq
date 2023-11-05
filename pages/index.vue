<template>
  <div>
    <v-row class="pt-8 pb-3" style="background-color: #f7fbfc">
      <v-col cols="12" sm="5">
        <div class="m-auto h-full w-full">
          <v-img src="img/macbook Kopie.png" class="h-full w-full"></v-img>
        </div>
      </v-col>

      <v-col cols="12" sm="5">
        <v-img src="logo.png"></v-img>
        <div class="grid place-items-center h-full" style="max-height: 256px">
          <h1 class="text-center text-2xl lg:text-3xl xl:text-4xl">
            Wir entwickeln die digitale Plattform für Sondengänger und
            Archäologen!
          </h1>
          <div class="mt-4 text-center xl:text-left">
            <nuxt-link to="#details">
              <v-btn
                class="lg:mr-8 mb-4 sm:mb-0"
                rounded="xl"
                variant="flat"
                color="#0f5f96"
                >Mehr erfahren</v-btn
              >
            </nuxt-link>
            <nuxt-link to="#newsletter">
              <v-btn rounded="xl" variant="flat" color="#0f5f96" class="mb-4"
                >Newsletter abonnieren</v-btn
              >
            </nuxt-link>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="2"
        ><v-img
          class="mt-10 sm:mt-0"
          style="max-height: 412px"
          src="img/iphone Kopie.png"
        ></v-img
      ></v-col>
    </v-row>
    <v-row
      class="pt-4 pb-64 md:mb-32"
      style="
        background-image: url(&quot;img/AdobeStock_212593816.jpeg&quot;);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <!-- <v-row>
        <v-col cols="2" v-if="!isMobile"></v-col>
        <v-col cols="12" sm="8">
          <div class="text-4xl text-center pt-4">
            Die innovative Plattform für Sondengänger: Erfasse, teile und
            diskutiere deine Entdeckungen.
          </div> 
        </v-col>
        <v-col cols="2" v-if="!isMobile"></v-col>
      </v-row> -->
    </v-row>
    <v-row>
      <v-col cols="6" class="my-auto lg:block hidden">
        <v-img src="img/9897.jpg" id="details"></v-img>
      </v-col>
      <v-col class="my-auto text-center sm:text-left w-full lg:w-1/2">
        <h3 class="mb-6 mt-4">
          Willkommen bei ArtifactIQ – Dem Portal für Sondengänger!
        </h3>
        <p>
          ArtifactIQ ist eine innovative Softwarelösung, die entwickelt wurde,
          um Sondengänger und Archäologen auf einer gemeinsamen Plattform zu
          verbinden. Unsere Plattform ist darauf ausgerichtet, das Erfassen,
          Dokumentieren und Analysieren von Fundstücken so einfach und
          interaktiv wie möglich zu gestalten. Mit unserer benutzerfreundlichen
          App bist du perfekt ausgerüstet, um deine archäologischen Funde direkt
          im Feld zu erfassen, Bilder hochzuladen und wichtige Dinge zu
          dokumentieren. Mit unserer innovativen Webplattform können Fundstücke
          weiter bearbeitet, inventarisiert und mit der Community bestimmt und
          bewertet werden. Darüber hinaus haben Archäologen die Möglichkeit sich
          an der Diskussion in der Community zu beteiligen und Fundstücke
          auszuwählen, die für die weitere Bearbeitung vorliegen haben wollen.
        </p>
        <br />

        <h4 class="text-xl mb-2">🚀 Aktuell im Aufbau!</h4>
        <p>
          ArtifactIQ ist ein Projekt, das sich derzeit noch in der
          Entwicklungsphase befindet. Wir arbeiten Hand in Hand, um ein Produkt
          zu schaffen, das nicht nur funktional, sondern auch inspirierend ist.
          Wir streben danach, sowohl den Sondengängern als auch den Archäologen
          leistungsstarke Werkzeuge an die Hand zu geben, die ihre Arbeit
          erleichtern und die archäologische Forschung voranbringen.
        </p>
        <br />
        <h4 class="text-xl mb-2">📣 Bleib auf dem Laufenden!</h4>
        <p>
          Um auf dem Laufenden zu bleiben und exklusive Einblicke in den
          Entwicklungsprozess zu erhalten, laden wir dich herzlich ein, unseren
          Newsletter zu abonnieren. So verpasst du keine wichtigen Updates,
          Ankündigungen von Beta-Tests oder spezielle Einladungen. Zusätzlich
          kannst du unsere Fortschritte und spannende Neuigkeiten auf unseren
          Social Media Kanälen verfolgen. Werde Teil unserer Community und hilf
          uns dabei, ArtifactIQ zu einem unverzichtbaren Werkzeug für jeden
          Sondengänger und Archäologen zu machen.
        </p>
        <nuxt-link to="#newsletter">
          <v-btn rounded="xl" variant="flat" color="#0f5f96" class="my-6"
            >Newsletter abonnieren</v-btn
          >
        </nuxt-link>
      </v-col>
      <v-col cols="12" lg="6" class="my-auto lg:hidden block">
        <v-img src="img/9897.jpg" id="details"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3"
        ><WebFeature
          title="Einfaches Inventar"
          text="Organisiere und katalogisiere deine Fundstücke in deinem persönlichen digitalen Inventar."
          icon="mdi-bookmark-check"
        ></WebFeature
      ></v-col>
      <v-col cols="12" md="3">
        <WebFeature
          title="Direkte Übertragung"
          text="Nahtlose Synchronisation zwischen mobiler App und Webapplikation. Dokumentiere unterwegs und bearbeite zu Hause."
          icon="mdi-antenna"
        ></WebFeature>
      </v-col>
      <v-col cols="12" md="3">
        <WebFeature
          title="Community"
          text="Teile deine Entdeckungen mit der Community. Erhalte Feedback und wertvolle Einsichten zu deinen Funden und tausche dich mit Gleichgesinnten aus."
          icon="mdi-chat"
        ></WebFeature>
      </v-col>
      <v-col cols="12" md="3">
        <WebFeature
          title="Verbindung zu Archäologen"
          text="Werde von Archäologischen Instituten eingeladen, gruppiere Funde und stelle relevante Entdeckungen direkt vor."
          icon="mdi-account-search"
        ></WebFeature>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" v-if="!isMobile"></v-col>
      <v-col cols="12" md="6">
        <h1
          class="text-center mb-8 underline underline-offset-8"
          style="text-decoration-color: #0f5f96; color: #0f5f96"
        >
          Häufig gestellte Fragen
        </h1>
        <v-expansion-panels>
          <v-expansion-panel
            title="Was ist das Hauptziel dieser Webapplikation und App?"
            text="Unser Hauptziel ist es, eine zentrale Plattform für ehrenamtliche Sondengänger und Archäologen zu schaffen. Hier können Funde erfasst, dokumentiert und bewertet werden. Außerdem bietet sie Archäologen und Behörden die Möglichkeit, relevante Funde auszuwählen und direkt mit den Sondengängern zu kommunizieren."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Ist die Webapplikation/App bereits verfügbar?"
            text="Unsere Webapplikation und App befinden sich derzeit noch in Entwicklung. Wir arbeiten hart daran, Ihnen bald eine voll funktionsfähige und benutzerfreundliche Plattform zur Verfügung zu stellen."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Wie kann ich über den Fortschritt der Entwicklung informiert bleiben?"
            text="Der beste Weg, um aktuelle Informationen zu erhalten, ist die Anmeldung zu unserem Newsletter. Hier teilen wir regelmäßige Updates zum Entwicklungsstand, geplante Veröffentlichungstermine und andere spannende Neuigkeiten."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Gibt es andere Möglichkeiten, um Neuigkeiten und Updates zu erhalten?"
            text="Ja! Folgen Sie uns auf unseren Social Media Kanälen. Wir posten regelmäßig Updates, Sneak Peeks und andere interessante Inhalte rund um unsere Applikation."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Warum sollte ich den Newsletter abonnieren?"
            text="Durch das Abonnieren unseres Newsletters erhalten Sie exklusive Einblicke in den Entwicklungsprozess, frühzeitigen Zugang zu Beta-Tests und werden immer über neue Funktionen und Veröffentlichungstermine informiert."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Sind meine Daten sicher, wenn ich mich für den Newsletter anmelde?"
            text="Ja, der Schutz Ihrer Daten ist uns sehr wichtig. Wir verwenden Ihre Daten ausschließlich, um Ihnen Updates und Informationen zu senden und geben sie nicht an Dritte weiter. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Wie kann ich mich aktiv an der Entwicklung oder dem Testen beteiligen?"
            text="Wir schätzen das Feedback unserer Community sehr. Wenn Sie sich aktiv beteiligen möchten, melden Sie sich für unseren Newsletter an. Dort werden wir gelegentlich Aufrufe für Beta-Tester und Umfragen versenden, um Ihre Meinung und Vorschläge zu sammeln."
          >
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="3" v-if="!isMobile"></v-col>
    </v-row>
    <v-row class="flex justify-center mt-16">
      <h3
        class="text-4xl text-center mb-8 underline underline-offset-8 font-bold"
        style="text-decoration-color: #0f5f96; color: #0f5f96"
      >
        Bleiben Sie auf dem aktuellen Stand
      </h3>
    </v-row>
    <v-row>
      <ClientOnly>
        <WebNewsletter id="newsletter"></WebNewsletter>
      </ClientOnly>
    </v-row>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();

definePageMeta({
  layout: "web",
});
</script>

<style></style>
