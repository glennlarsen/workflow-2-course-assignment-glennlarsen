// API url: https://graphqlzero.almansi.me/api
import 'regenerator-runtime/runtime';

import ApolloClient, { gql } from 'apollo-boost';
import { orderBy } from "lodash";

const listContainer = document.querySelector("ul");

async function makeGQLCall() {
  const gqlUrl = "https://graphqlzero.almansi.me/api";

  const client = new ApolloClient({
    uri: gqlUrl,
  });

  const json = await client.query({
    query: gql`
        {
          posts {
              data {
                id
                title
              }
            }
        }
      `});
  const posts = json.data.posts.data;

  const orderedPosts = orderBy(posts, ["id"], ["desc"]);

  listContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {

    listContainer.innerHTML += `<li><span>${orderedPosts[i].id}</span>
          <h2>${orderedPosts[i].title}</h2></li>`;
  }
}

makeGQLCall();

