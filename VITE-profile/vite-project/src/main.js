import api from "./services/api";

document.addEventListener("DOMContentLoaded", function () {
  const username = "miguelvv2";

  api
    .get(`/users/${username}`)
    .then((response) => {
      const data = response.data;

      // Imagem de perfil
      const profileImage = document.querySelector(".profile-image");
      profileImage.src = data.avatar_url;
      profileImage.alt = data.name || username;

      // Nome
      const nameElement = document.getElementById("name");
      nameElement.textContent = data.name || username;

      // Bio
      const bioElement = document.getElementById("bio");
      bioElement.textContent = data.bio || "Sem bio disponível";

      // Seguidores
      const followersElement = document.getElementById("followers");
      followersElement.innerHTML = `${data.followers} seguidores`;

      // Repositórios públicos
      const reposElement = document.getElementById("repos");
      reposElement.innerHTML = `${data.public_repos} repositórios`;

      // Gists
      const gistsElement = document.getElementById("gists");
      gistsElement.innerHTML = `${data.public_gists} gists`;
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados do GitHub", error);
    });
});

