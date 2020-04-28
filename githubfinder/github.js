class GitHub{
  constructor(){
    this.client_id = 'faad2c1c5cf2d254f5bd';
    this.client_secret = '707bcefa599d139bd67301aba4d2cd3279b582c8';
    this.repos_count = 5;//this is declared so we can manage the number of repos display accordingly
    this.repos_sort = 'created: asc'

  }

  async getUser(user){
    ///await response of the fetch call for profiles
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    ///await response of the fetch call for repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //Only proceed once the fetch is resolved
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  
  }
}