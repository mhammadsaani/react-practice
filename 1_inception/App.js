const parent = React.createElement('div', {'id': 'parent'}, React.createElement('div', {'id': 'child'}, [React.createElement('h1', {key:1}, 'Hello, H1'), React.createElement('h2', {key:2}, 'Hello H2')]))

const h1 = React.createElement('h1', {id: 'heading'}, 'Hello World From React')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)