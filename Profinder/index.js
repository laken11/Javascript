// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

const secret = '4e211e11f5ef8a32c28597af8b76a9dac50875b5'
const CLIENT_ID = '72afa0f926d7846aa07c'

async function getUser(name) {
    const res = await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${secret}`)
    const profile = await res.json()
    return profile;
}

let getRepo = async (profile) => {
    const repo = await fetch(`${profile.repos_url}?client_id=${CLIENT_ID}&client_secret=${secret}`)
    const data = await repo.json()
    return data
}

document.querySelector("#search").addEventListener('submit', async (event) => {
    event.preventDefault();
    let val = document.querySelector("#findByUsername").value
    document.querySelector(".user-details").style.display = 'none'
    document.querySelector(".notFound").style.display = 'none'
    if (val.length > 0) {
        document.querySelector(".loader").style.display = 'block'
        const profile = await getUser(val)
        document.querySelector(".loader").style.display = 'none'
        if (profile.message === "Not Found") {
            document.querySelector(".user-details").style.display = 'none'
            document.querySelector(".notFound").style.display = 'block'
        } else {
            document.querySelector(".notFound").style.display = 'none'
            document.querySelector(".user-details").style.display = 'flex'
            const repos = await getRepo(profile)
            showProfile(profile);
            showRepo(repos);
        }
    }
})

let showProfile = (profile) => {
document.querySelector(".profile").innerHTML = `
          <img
            src="${profile.avatar_url}"
            alt="letstrie"
          />
          <p class="name">${profile.name}</p>
          <p class="username login">${profile.login}</p>
          <p class="bio">
            Simplifying things for fun
          </p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> ${profile.followers} </span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> ${profile.following} </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
            Symfony/Blackfire
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>Lille, France
          </p>`
}

let showRepo = (repos) => {
    let repoHtml = ``
    repos.forEach(repo => {
        repoHtml += `<div class="repo">
              <div class="repo_name">
                <a href="${repo.html_url}">${repo.name}</a>
              </div>
              <p>
                <span class="circle"></span> ${repo.language}
                <ion-icon name="star-outline"></ion-icon> ${repo.watchers_count}
                <ion-icon name="git-branch-outline"></ion-icon> ${repo.forks_count}
              </p>
            </div>`
    });
    document.querySelector(".repos").innerHTML = repoHtml
}