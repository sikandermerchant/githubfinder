class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  //Display Profile in UI
  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class ="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;

  }

  ///Display Repos in UI
  ///The output is an array of repos so we will loop through the array using ForEach and for each iteration will display the repo

showRepos(repos) {
  let output = '';

  repos.forEach((repo) => {
    output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
    `;
  });

  // Output repos
  document.getElementById('repos').innerHTML = output;
}
  //Clear profile when no input or input cleared
  clearProfile(){
    this.profile.innerHTML = '';
  }
///Show Alert message class
  showAlert(message,className){

    //Clear any current alert
    this.clearAlert();
    //Create a div element
    const div = document.createElement('div');

    //Add Class - here we we will add the class name and will also add in the className, which was passed through the class.

    div.className = `alert ${className}`;

    //Add Text Node using createTextNode() to the child element using appendChild() 
    div.appendChild(document.createTextNode(message));

    ///Get parent to append the div, which is the container 

    const container = document.querySelector('.searchContainer');

    ///We need to also get the div with class name 'search , as well have to place the alert message div before it

    const search = document.querySelector('.search');

    ///Now insert the alert div in the container before the div element

    container.insertBefore(div,search);

      //Timeout alert message after 3 seconds - here we pass the alert class to the timeout function to remove it
      setTimeout(()=>{ 
        this.clearAlert();
      }, 3000);
  }


  ///Class to clear current Alert messasge
  clearAlert(){
    const currentAlert = document.querySelector(`.alert`);
    if(currentAlert){
      currentAlert.remove();
    }

  }
}