const customName = document.getElementById("customname")
const customName2 = document.getElementById("customname2")
const randomize = document.querySelector(".randomize")
const story = document.querySelector(".story")

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length)
  return array[random];
}

const storyTextEng = "It was 94 degrees outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const storyTextEst = "Õues oli 30 kraadi sooja ning :insertx: otsustas oma piiritus tarkuses jalutama minna. Peale :inserty: jõudmist jäi ta aga ehmunult mõttesse ning :insertz:. Juku nägi seda kõike pealt, kuid ei olnud sugugi üllatunud — :insertx: kaalus üle 120 kilo, ja ilm oli väga palav."
const insertXEng = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertYEng = ["the soup kitchen", "Disneyland", "the White House"]
const insertZEng = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]
const insertXEst = ["paharet Villu", "Paks Margareeta", "Jõuluvana"]
const insertYEst = ["supikööki", "Disneylandi", "Valgesse Majja"]
const insertZEst = ["läks seejärel iseenesest põlema", "sulas seejärel tee peal ära", "muutus ühtäkki prussakaks ja jooksis minema"]

randomize.addEventListener("click", result)

function result() {
  if (document.getElementById("eng").checked) {
  let newStory = storyTextEng
  let xItemEng = randomValueFromArray(insertXEng)
  let yItemEng = randomValueFromArray(insertYEng)
  let zItemEng = randomValueFromArray(insertZEng)
  newStory = newStory.replace(":insertx:", xItemEng).replace(":inserty:", yItemEng).replace(":insertz:", zItemEng).replace(":insertx:", xItemEng)

  if (customName.value !== "") {
    const name = customName.value
    newStory = newStory.replace("Bob", name)
  }

  if (customName2.value !== "") {
    const name2 = customName2.value
    newStory = newStory.replace(xItemEng, name2).replace(xItemEng, name2)
  }

  story.textContent = newStory.focus()
  story.style.visibility = "visible"

  } else if (document.getElementById("est").checked) {
    let newStory = storyTextEst
    let xItemEst = randomValueFromArray(insertXEst)
    let yItemEst = randomValueFromArray(insertYEst)
    let zItemEst = randomValueFromArray(insertZEst)
    newStory = newStory.replace(":insertx:", xItemEst).replace(":inserty:", yItemEst).replace(":insertz:", zItemEst).replace(":insertx:", xItemEst)

  if (customName.value !== "") {
    const name = customName.value
    newStory = newStory.replace("Juku", name)
  }

  if (customName2.value !== "") {
    const name2 = customName2.value
    newStory = newStory.replace(xItemEst, name2).replace(xItemEst, name2)
  }

    story.textContent = newStory.focus()
    story.style.visibility = "visible"
  }
}

function checkLanguage() {
  if (document.getElementById("est").checked) {
    input1.textContent = "Sisesta esimese tegelase nimi:"
    input2.textContent = "Sisesta teise tegelase nimi:"
    randomize.textContent = "Genereeri üks lugu"
  } else {
    input1.textContent = "Enter character name 1:"
    input2.textContent = "Enter character name 2:"
    randomize.textContent = "Generate random story"
  }
}
