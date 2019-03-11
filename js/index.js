// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const repoName = el.dataset.repository;
  const uri =
    rootURL + '/repos/' + el.dataset.username + '/' + repoName + '/commits';
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', displayCommits);
  xhr.open('GET', uri);
  xhr.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><h3>' +
        commit.commit.author.name +
        ' (' +
        commit.author.login +
        ') </h3> ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}

function getBranches(el) {
    const req = new XMLHttpRequest();
    const name = el.dataset.repo;
  req.addEventListener('load', displayBranches);
  req.open('GET', "rootURL + '/repos/' + el.dataset.username + '/' + repoName + '/commits");
  req.send();
}

function displayBranches() {

}