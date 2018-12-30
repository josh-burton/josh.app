workflow "Build gatsby and deploy to github pages" {
  on = "push"
  resolves = ["Gatsby build and deploy to docs folder"]
}

action "npm install" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Gatsby build and deploy to docs folder" {
  uses = "actions/npm@e7aaefe"
  needs = ["npm install"]
  args = "run build"
}