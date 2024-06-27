<template>
  <q-page>
    <q-page-container>
      <q-page-padding>
        <q-card-section>
          <div class="text-h4 q-mt-xl">Conditions Générales d'Utilisation</div>
        </q-card-section>

        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Introduction</h3>
          <p class="q-pb-md">
            Bienvenue sur ThiBlog (ci-après "le Site"), un blog personnel dédié
            à suivre le parcours de son auteur dans le domaine du développement
            web. En accédant et en utilisant le Site, vous acceptez de vous
            conformer aux présentes Conditions Générales d'Utilisation (ci-après
            "CGU"). Si vous n'acceptez pas ces termes, nous vous invitons à ne
            pas utiliser le Site.
          </p>
          <p class="q-pb-md">
            ThiBlog propose des articles de blog couvrant divers aspects du
            développement web. Les utilisateurs peuvent naviguer sur le Site
            pour lire ces articles et, dans un futur proche, s'abonner à une
            newsletter.
          </p>
          <p>
            Le Site s'adresse principalement aux développeurs web et à toute
            personne intéressée par le développement web. Les CGU ont pour but
            de définir les modalités d'utilisation du Site et les
            responsabilités des utilisateurs.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Accès au site</h3>
          <p class="q-pb-md">
            Le site ThiBlog est accessible gratuitement à tout utilisateur
            disposant d'un accès à internet. Il n'y a pas d'âge minimum requis
            pour accéder au Site. Aucune inscription ou création de compte n'est
            nécessaire pour parcourir le Site et consulter les articles de blog.
          </p>
          <p>
            ThiBlog se réserve le droit de modifier, suspendre ou interrompre,
            temporairement ou définitivement, tout ou partie du Site sans
            préavis. ThiBlog ne pourra être tenu responsable des modifications,
            suspensions ou interruptions du Site.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Contenu du site</h3>
          <p class="q-pb-md">
            ThiBlog propose des articles de blog rédigés par l'auteur, qui
            décrivent son parcours de développeur web et les projets sur
            lesquels il travaille. Les articles peuvent être rédigés avec l'aide
            d'outils divers, y compris des intelligences artificielles, pour
            faciliter leur création.
          </p>
          <p class="q-pb-md">
            L'auteur se réserve le droit de modifier, de mettre à jour ou de
            supprimer tout contenu publié sur le Site sans préavis. Le contenu
            du Site est fourni à titre informatif et reflète les opinions et
            expériences personnelles de l'auteur.
          </p>
          <h4 class="text-h6 q-mb-sm">Contributions des utilisateurs</h4>
          <p>
            Les utilisateurs auront la possibilité de commenter les articles de
            blog et d'échanger entre eux dans la section commentaires. En
            publiant un commentaire, les utilisateurs acceptent de respecter les
            règles de courtoisie et de ne pas publier de contenu illicite,
            offensant, ou en violation des droits d'autrui. ThiBlog se réserve
            le droit de modérer, éditer ou supprimer tout commentaire qui ne
            respecterait pas ces règles.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Propriété intellectuelle</h3>
          <p class="q-pb-md">
            L'ensemble du contenu publié sur ThiBlog, y compris les articles de
            blog, les images, les vidéos et tout autre matériel, est protégé par
            les lois sur la propriété intellectuelle et est la propriété
            exclusive de l'auteur, sauf indication contraire.
          </p>
          <h4 class="text-h6 q-mb-sm">Utilisation du contenu</h4>
          <p class="q-pb-sm">
            Les utilisateurs ne sont pas autorisés à reproduire, distribuer,
            modifier ou publier le contenu du Site sans l'autorisation préalable
            écrite de l'auteur. Pour obtenir une autorisation, les utilisateurs
            doivent contacter l'auteur via l'adresse email
            <a
              class="text-weight-bold"
              :class="getTextColorClass('text-dark')"
              href="mailto:thibault.guilhem@gmail.com"
              >thibault.guilhem@gmail.com</a
            >.
          </p>
          <p>
            Toute utilisation non autorisée du contenu peut entraîner des
            actions légales.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Responsabilités de l'utilisateur</h3>
          <p class="q-pb-md">
            En utilisant ThiBlog, les utilisateurs s'engagent à respecter les
            présentes CGU et à adopter un comportement respectueux et
            responsable. Les utilisateurs sont autorisés à interagir avec le
            Site principalement par la publication de commentaires et de
            réponses aux commentaires.
          </p>
          <h4 class="text-h6 q-mb-sm">Publication de commentaires</h4>
          <p class="q-pb-md">
            Les utilisateurs acceptent de ne pas publier de contenu illicite,
            offensant, diffamatoire, discriminatoire, ou portant atteinte aux
            droits d'autrui, y compris les droits de propriété intellectuelle.
            Sont également interdits les contenus incitant à la haine, à la
            violence ou à toute activité illégale.
          </p>
          <p class="q-pb-md">
            ThiBlog se réserve le droit de modérer, éditer ou supprimer tout
            commentaire qui ne respecterait pas ces règles, ainsi que de
            suspendre ou bannir l'utilisateur en cas de non-respect répété de
            ces obligations.
          </p>
          <h4 class="text-h6 q-mb-sm">Responsabilité des utilisateurs</h4>
          <p class="q-pb-md">
            Les utilisateurs sont seuls responsables du contenu qu'ils publient
            sur le Site. En publiant un commentaire, les utilisateurs
            garantissent qu'ils possèdent tous les droits nécessaires sur ce
            contenu et qu'il ne viole aucun droit de tiers.
          </p>
          <p>
            En cas de non-respect de ces règles, l'utilisateur s'engage à
            indemniser ThiBlog pour toute conséquence directe ou indirecte
            résultant de ses actions, y compris les frais juridiques et les
            dommages éventuels.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Protection des données personnelles</h3>
          <p class="q-pb-md">
            ThiBlog ne collecte aucune donnée personnelle identifiable de ses
            utilisateurs. Les interactions des utilisateurs avec le Site, telles
            que la publication de commentaires, ne nécessitent pas la fourniture
            de données personnelles.
          </p>
          <h4 class="text-h6 q-mb-sm">
            Utilisation des cookies et stockage local
          </h4>
          <p class="q-pb-md">
            ThiBlog utilise des cookies et le stockage local (localStorage ou
            sessionStorage) uniquement pour mémoriser les préférences de
            l'utilisateur, telles que le mode d'affichage (par exemple, mode
            sombre). Aucune donnée personnelle n'est stockée dans ces cookies ou
            dans le stockage local.
          </p>
          <h4 class="text-h6 q-mb-sm">Engagement de confidentialité</h4>
          <p>
            ThiBlog s'engage à respecter la confidentialité et la sécurité des
            informations non personnelles collectées et à ne pas les utiliser à
            des fins commerciales ou de suivi.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Limitation de responsabilité</h3>
          <p class="q-pb-md">
            ThiBlog est un blog personnel maintenu par un développeur
            indépendant. En utilisant le Site, vous acceptez les limitations de
            responsabilité suivantes :
          </p>
          <h4 class="text-h6 q-mb-sm">Absence de garantie</h4>
          <p class="q-pb-md">
            ThiBlog est fourni "tel quel" et sans aucune garantie de quelque
            nature que ce soit. L'auteur ne garantit pas que le contenu sera
            toujours disponible, à jour, exempt d'erreurs ou complet. Le Site
            peut être modifié, suspendu ou supprimé à tout moment et sans
            préavis.
          </p>
          <h4 class="text-h6 q-mb-sm">Problèmes techniques</h4>
          <p class="q-pb-md">
            ThiBlog décline toute responsabilité en cas de problèmes techniques,
            tels que des interruptions de service, des bugs, des virus ou tout
            autre problème pouvant survenir lors de l'utilisation du Site. Les
            utilisateurs sont encouragés à prendre leurs propres précautions
            pour se protéger contre de tels risques.
          </p>
          <h4 class="text-h6 q-mb-sm">Utilisation du contenu</h4>
          <p class="q-pb-md">
            L'utilisation du contenu publié sur ThiBlog se fait aux risques et
            périls des utilisateurs. L'auteur ne pourra être tenu responsable
            des dommages directs ou indirects résultant de l'utilisation ou de
            l'incapacité à utiliser le Site, ou de toute action entreprise sur
            la base du contenu du Site.
          </p>
          <h4 class="text-h6 q-mb-sm">Liens externes</h4>
          <p>
            ThiBlog peut contenir des liens vers des sites externes. L'auteur
            n'assume aucune responsabilité quant au contenu de ces sites
            externes et aux conséquences de leur utilisation. Les utilisateurs
            sont invités à consulter les CGU et politiques de confidentialité de
            ces sites.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">Modification des CGU</h3>
          <p class="q-pb-md">
            ThiBlog se réserve le droit de modifier les présentes Conditions
            Générales d'Utilisation à tout moment et sans préavis. Les
            modifications entreront en vigueur dès leur publication sur le Site.
          </p>
          <p class="q-pb-md">
            Les utilisateurs sont invités à consulter régulièrement les CGU pour
            prendre connaissance des éventuelles modifications. La date de la
            dernière modification sera indiquée en haut des CGU.
          </p>
          <p>
            En continuant à utiliser le Site après la publication des
            modifications, les utilisateurs acceptent les CGU révisées.
          </p>
        </q-card-section>
        <q-card-section class="q-mb-xs">
          <h3 class="text-h5 q-mb-sm">
            Droit applicable et juridiction compétente
          </h3>
          <p class="q-pb-md">
            Les présentes Conditions Générales d'Utilisation sont régies par le
            droit français. En cas de litige relatif à l'interprétation ou à
            l'exécution des CGU, les tribunaux français seront seuls compétents.
          </p>
          <h4 class="text-h6 q-mb-sm">Date de la dernière modification</h4>
          <p class="q-mb-xl">
            Ces Conditions Générales d'Utilisation ont été mises à jour pour la
            dernière fois le Jeudi 27 Juin 2024 à 11h38.
          </p>
        </q-card-section>
      </q-page-padding>
    </q-page-container>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "CguPage",
});

const props = defineProps({
  darkMode: Boolean,
});

function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-dark": "text-light",
  };
  return props.darkMode ? darkModeMapping[lightClass] : lightClass;
}
</script>

<style scoped>
p {
  line-height: 1.5rem;
  font-size: 1rem;
}
a {
  text-decoration: none;
  color: var(--q-color-primary);
}
</style>
