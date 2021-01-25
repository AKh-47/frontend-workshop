const form = document.getElementById("form");

const title = document.getElementById("title");
const author = document.getElementById("author");
const date = document.getElementById("date");
const content = document.getElementById("content");

const articles = document.querySelector(".articles");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!title || !author || !date || !content) return;

  const articleElement = document.createElement("article");

  const titleElement = document.createElement("h3");
  titleElement.innerText = title.value;

  const authorElement = document.createElement("small");
  authorElement.innerText = `Posted by ${author.value} on ${date.value}`;

  const contentElement = document.createElement("p");
  contentElement.innerText = content.value;

  const linkElement = document.createElement("a");
  linkElement.href = "#";
  linkElement.innerText = "Read More";

  articleElement.appendChild(titleElement);
  articleElement.appendChild(authorElement);
  articleElement.appendChild(contentElement);
  articleElement.appendChild(linkElement);

  console.log(articleElement);

  articles.appendChild(articleElement);

  //   <articleElement>
  //   <h3>The Manhattan Project</h3>
  //   <small>Posted by Insha on july 17</small>

  //   <p>The Manhattan Project was a research and development undertaking during World War II that produced the first nuclear weapons. It was led by the United States with the support of the United Kingdom and Canada.</p>
  //   <a href="#">Read More</a>
  // </articleElement>
});
