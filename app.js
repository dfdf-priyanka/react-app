const heading = React.createElement('div',{id:'parent'},
                [React.createElement('h1',{id:'heading'},'heading'),React.createElement('h2',{id:'sheading'},'small heading')]);
const root = ReactDOM.createRoot(document.getElementById('data'));
root.render(heading);