<template>
  <div class="home">
    <header class="profile-header">
      <h2>My Profile</h2>
      <hr />
      <h2>Profile for {{ user.name }}</h2>
    </header>

    <div v-if="user.avatar">
      <img :src="user.avatar" alt="" class="avatar" />
    </div>

    <div v-if="user.repos">
      {{ user.name }} possède {{ user.repos.length }} repos.
    </div>

    <div class="how-old">
      <div v-if="user.age >= 20">
        <p>Âge : {{ user.age }} (Extrêmement vieux)</p>
      </div>
      <div v-else-if="user.age >= 10 && user.age <= 20">
        <p>Âge : {{ user.age }} (Enfant)</p>
      </div>
      <div v-else>
        <p>Âge : {{ user.age }} (Doué pour utiliser un clavier)</p>
      </div>
      <div class="change-age">
        <input type="number" v-model="user.age" min="1" max="999" />
        <button>Devenir jeune</button>
        <button>Devenir vieux</button>
      </div>
    </div>

    <div class="my-friends">
      <div class="friend-list">
        <h2>Friends of {{ user.name }}</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">UUID</th>
              <th scope="col">Supprimer l'ami</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="friend in user.friends" :key="friend.uuid">
              <td>{{ friend.name }}</td>
              <td>{{ friend.uuid }}</td>
              <td>
                <button @click="removeFriend(friend.uuid)">
                  Détruire l'ami là
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <form class="friend-actions" @submit.prevent="addFriend(inputFriend)">
        <input type="text" v-model="inputFriend.name" />
        <button type="submit">Ajouter l'ami</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Profile",

  data() {
    return {
      user: {
        name: "Alexis",
        avatar: null,
        age: 21,
        repos: [],
        friends: [
          {
            uuid: "91261477-04fb-4052-8ef9-6041ad7afb7e",
            name: "Me"
          },
          {
            uuid: "c25880c8-4f04-432a-97bf-df639fff36e6",
            name: "Myself"
          },
          {
            uuid: "1cb4cdaf-6a37-49d4-a069-b8a516203cbd",
            name: "I"
          }
        ]
      },
      inputFriend: {
        uuid: "bc59c1c9-b5a0-4047-a21e-afd1efcc4b64", // should be random but hey, this should be a token anyways so
        name: ""
      }
    };
  },

  methods: {
    addFriend() {
      if (this.inputFriend.name) {
        this.user.friends.push({ ...this.inputFriend });
        this.inputFriend.name = "";
      } else {
        // todo: error handling
      }
    },

    removeFriend(uuid: string) {
      this.user.friends = this.user.friends.filter(
        friend => friend.uuid != uuid
      );
    }
  },

  mounted() {
    axios
      .get("https://api.github.com/users/alexisnp")
      .then(res => {
        this.user.avatar = res.data.avatar_url;
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/alexisnp/repos")
      .then(res => {
        this.user.repos = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
});
</script>

<style lang="scss">
.avatar {
  display: block;
  border-radius: 50%;
  max-width: 250px;
  max-height: 250px;
}
</style>
