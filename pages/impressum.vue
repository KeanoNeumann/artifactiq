<template>
  <div class="sm:mx-16 mx-2 mt-6">
    <v-row>
      <v-col cols="12"> <h1 class="mb-6 mt-4">Kontakt</h1></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <h3>Angaben gemäß § 5 TMG</h3>
        <b style="color: #0f5f96">NewDot Digital</b><br />
        Keano Neumann<br />
        Hauptstraße 8<br />
        49326 Melle<br />
      </v-col>
      <v-col cols="12" sm="6">
        <h3>Kontakt</h3>
        <b>Tel: </b>
        <a class="links" href="tel:+4954283639990">+49 (0)5428 36399 90</a
        ><br />
        <b>E-Mail: </b>
        <a class="links" href="mailto:info@newdot.digital"
          >info@newdot.digital</a
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 v-if="!isMobile">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <h3 v-else>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.

        <h3>Haftung für Inhalte</h3>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.

        <h3>Haftung für Links</h3>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

        <h3>Urheberrecht</h3>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.<br /><br />

        <b>Quelle: </b>
        <a class="links" href="https://www.e-recht24.de"
          >https://www.e-recht24.de</a
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
</script>

<style>
.links {
  color: #0f5f96;
}

.links:hover {
  color: #0f5f96;
  text-decoration: underline;
}
</style>
