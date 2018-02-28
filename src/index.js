var greeting = React.createElement('h1',{},'Hello WOrld');
var clock = React.createElement('h2',{}, `It is ${new Date().toLocaleString()}`);
var app = React.createElement('div',{}, greeting, clock);

ReactDOM.render(app, document.getElementById('react-app-root'));
