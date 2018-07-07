console.log('This is working');

const appRoot = document.getElementById('app')

const visible_app = {
    title: 'Visibility toggle',
    visibility: false
}

const renderWebpage = () => {

    const template = (
    <div>
        <h1> {visible_app.title} </h1>
        <button onClick={toggleVisibility}>
            {visible_app.visibility ? 'Hide details': 'Show details'}
        </button>

        {visible_app.visibility && (
            <div>
                <p> Here are some details for you! </p>
            </div>
        )}
    </div>
)
    ReactDOM.render(template, appRoot)
}

const toggleVisibility = () => {
    visible_app.visibility = !visible_app.visibility
    renderWebpage()
}

renderWebpage()
