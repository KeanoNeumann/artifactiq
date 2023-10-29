<template>
  <div>
    <v-row class="pt-8 pb-3" style="background-color: #f7fbfc">
      <v-col cols="5">
        <div class="m-auto h-full w-full">
          <v-img src="img/macbook Kopie.png" class="h-full w-full"></v-img>
        </div>
      </v-col>

      <v-col cols="5">
        <v-img src="logo.png"></v-img>
        <div class="grid place-items-center h-full" style="max-height: 256px">
          <h3 class="text-4xl text-center">
            Wir entwickeln die digitale Plattform für Sondengänger und
            Archäologen!
          </h3>
          <div class="mt-4">
            <nuxt-link to="#details">
              <v-btn class="mr-8" rounded="xl" variant="flat" color="#0f5f96"
                >Mehr erfahren</v-btn
              >
            </nuxt-link>
            <nuxt-link to="#newsletter">
              <v-btn rounded="xl" variant="flat" color="#0f5f96"
                >Newsletter abonnieren</v-btn
              >
            </nuxt-link>
          </div>
        </div>
      </v-col>
      <v-col cols="2"
        ><v-img style="max-height: 412px" src="img/iphone Kopie.png"></v-img
      ></v-col>
    </v-row>
    <v-row
      class="pt-4 pb-64"
      style="
        background-image: url(&quot;img/AdobeStock_212593816_Preview.png&quot;);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <!-- <div class="text-4xl text-center pt-4">
            Die innovative Plattform für Sondengänger: Erfasse, teile und
            diskutiere deine Entdeckungen.
          </div> -->
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-row>
    <v-row>
      <v-col cols="6" class="my-auto">
        <v-img src="img/9897.jpg" id="details"></v-img>
      </v-col>
      <v-col cols="6" class="my-auto">
        <h2 class="text-2xl mb-6 mt-4 font-semibold" style="color: #0f5f96">
          Willkommen bei ArtifactIQ – Dem Portal für Sondengänger!
        </h2>
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
    </v-row>
    <v-row>
      <v-col cols="3"
        ><feature
          title="Einfaches Inventar"
          text="Organisiere und katalogisiere deine Fundstücke in deinem persönlichen digitalen Inventar."
          icon="mdi-bookmark-check"
        ></feature
      ></v-col>
      <v-col cols="3">
        <feature
          title="Direkte Übertragung"
          text="Nahtlose Synchronisation zwischen mobiler App und Webapplikation. Dokumentiere unterwegs und bearbeite zu Hause."
          icon="mdi-antenna"
        ></feature>
      </v-col>
      <v-col cols="3">
        <feature
          title="Community"
          text="Teile deine Entdeckungen mit der Community. Erhalte Feedback und wertvolle Einsichten zu deinen Funden und tausche dich mit Gleichgesinnten aus."
          icon="mdi-chat"
        ></feature>
      </v-col>
      <v-col cols="3">
        <feature
          title="Verbindung zu Archäologen"
          text="Werde von Archäologischen Instituten eingeladen, gruppiere Funde und stelle relevante Entdeckungen direkt vor."
          icon="mdi-account-search"
        ></feature>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <h3
          class="text-4xl text-center mb-8 underline underline-offset-8 font-bold"
          style="text-decoration-color: #0f5f96; color: #0f5f96"
        >
          Häufig gestellte Fragen
        </h3>
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
      <v-col cols="3"></v-col>
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
        <newsletter id="newsletter"></newsletter>
      </ClientOnly>
    </v-row>
  </div>
</template>

<script>
import feature from "~/components/web/feature.vue";
import Newsletter from "~/components/web/newsletter.vue";
export default {
  components: { feature, Newsletter },
};
</script>

<style></style>
