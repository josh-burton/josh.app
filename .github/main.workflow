workflow "Build gatsby and deploy to github pages" {
  on = "push"
  resolves = ["Move public folder to docs"]
}

action "npm install" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Gatsby build" {
  uses = "actions/npm@e7aaefe"
  needs = ["npm install"]
  args = "build"
}

action "Move public folder to docs" {
  uses = "actions/action-builder/shell@master"
  runs = "mv"
  args = "public docs"
  needs = ["Gatsby build"]
}
