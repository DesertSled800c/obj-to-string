const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}
// <right way to ass string to any object with same properies and values>
const htmlizer = (obj) => {
    const htmlString = `<section id="computer--${obj.id}">
    <h1>${obj.manufacturer} ${obj.make}</h1>
    <div>Model: ${obj.model}</div>
    <div>Memory: ${obj.specs.memory} GB</div>
    <div>Hard drive space: ${obj.specs.hardDrive} GB</div>
    <div>Processor speed: ${obj.specs.processor} Ghz</div>
    \b\b\b\b</section>`

    return htmlString
}

const htmlizedComputer = htmlizer(computer)

console.log(htmlizedComputer);


// <funny way to add strings to an object>
// const sectionTag = (obj) => {
//     const htmlizer = `<section id="computer--${obj}">`
//     return htmlizer
// }

// const h1Tag = (obj,obj2) => {
//     const htmlizer = `\t<h1>${obj} ${obj2}</h1>`
//     return htmlizer
// }

// const divTag = (obj) => {
//     const htmlizer = `\t<div>${obj}<div>`
//     return htmlizer
// }

// console.log(sectionTag(computer.id))
// console.log(h1Tag(computer.manufacturer,computer.make))
// console.log(divTag(`Model: ${computer.model}`))
// console.log(divTag(`Memory: ${computer.specs.memory} GB`))
// console.log(divTag(`Hard drive space: ${computer.specs.hardDrive}`))
// console.log(divTag(`Processor speed: ${computer.specs.hardDrive} Ghz`))
// console.log("</section>")
