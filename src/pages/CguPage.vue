<template>
  <q-page>
    <q-page-container>
      <q-page-padding>
        <q-card-section>
          <div class="text-h4">Conditions Générales d'Utilisation</div>
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
            <a class="text-weight-bold" href="mailto:thibault.guilhem@gmail.com"
              >thibault.guilhem@gmail.com</a
            >.
          </p>
          <p>
            Toute utilisation non autorisée du contenu peut entraîner des
            actions légales.
          </p>
        </q-card-section>
      </q-page-padding>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "CguPage",
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
p {
  line-height: 1.5rem;
  font-size: 1rem;
}
a {
  text-decoration: none;
}
</style>
