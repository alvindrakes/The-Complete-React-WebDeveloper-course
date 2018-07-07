console.log('App.js is running');

const app = {
    title: 'Indecision app',
    subtitle: 'App that will make decision for you',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()  // prevent rerendering

    const option = e.target.elements.formOption.value;

    if(option) {
        app.options.push(option)

        // delete input
        e.target.elements.formOption.value = ''
        renderWebpage()
    }
}

// jsx - javascript XML


// const user = {
//     name: 'Alvin',
//     age: 21,
//     location: 'Sungai Long'
// }

// function getLocation(location) {
//     if(location){
//         return  <p>Location: {location}</p>
//     }
// }

// const myLove = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );


const appRoot = document.getElementById('app')

const removeAllOptions = () => {
    app.options = []
    renderWebpage()
}

const onMakeDecision = () => {

    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
    }


const numbers = [55, 101, 1000]

const renderWebpage = () => {
    const template = (
        <div>
         <h1>{app.title}</h1>
         <p>{app.subtitle && app.subtitle}</p>
         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button onClick={onMakeDecision}> What should I do </button>
         <button onClick={removeAllOptions}> Remove all </button>

         {
            numbers.map((number) => {
                return <p key={number}> Number: {number * 2} </p>
            })
        }

         <ol>
         {
             app.options.map((item) => <li key={item}> List: {item} </li>)

         }

         </ol>

         <form onSubmit = {onFormSubmit}>
            <input type="text" name='formOption'/>
            <button> Add option </button>
         </form>

         </div>
        );
        ReactDOM.render(template, appRoot)
}

renderWebpage()
