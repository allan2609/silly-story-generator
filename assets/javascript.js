const customName = document.getElementById("customname")
const customName2 = document.getElementById("customname2")
const randomize = document.querySelector(".randomize")
const story = document.querySelector(".story")

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length)
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

randomize.addEventListener("click", result)

function result() {
  let newStory = storyText
  let xItem = randomValueFromArray(insertX)
  let yItem = randomValueFromArray(insertY)
  let zItem = randomValueFromArray(insertZ)
  newStory = newStory.replace(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", zItem).replace(":insertx:", xItem)

  if (customName.value !== "") {
    const name = customName.value
    newStory = newStory.replace("Bob", name)
    console.log(customName2 + "1")
  }

  if (customName2.value !== "") {
    const name2 = customName2.value
    newStory = newStory.replace(":insertx:", name2)
    console.log(customName2)
  }

  if (document.getElementById("est").checked) {
    const weight = Math.round(300)
    const temperature =  Math.round(94)

  }

  story.textContent = newStory
  story.style.visibility = "visible"
}
