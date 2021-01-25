import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre'

const league = {
  membre1: {
    nom: 'Batman',
    age: 45
  },
  membre2: {
    nom: 'Superman',
    age: 45
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 30
  }
}

class App extends Component {
  state = {
    league : league 
  }

  handleClick = () => {
    const league = {...this.state.league}
    league.membre1.age += 1
    this.setState({league:league})
  }

  render() { 
    const {title} = this.props
    return(
        <Fragment>
          <div className="App">
            <h1>{this.props.title}</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae adipisci quaerat quae, eveniet voluptatem voluptates atque libero voluptate necessitatibus beatae rerum hic debitis cum, deserunt dolorem doloremque nemo error modi molestias rem ex quisquam illum! Accusantium, molestiae? Error corporis, excepturi cumque incidunt quam veritatis sint molestias deleniti ipsam fugit ipsum amet laborum omnis illo est voluptas, eveniet eum ducimus, earum obcaecati. Quo cum earum quae, quos ipsa, facere veniam numquam ipsum, ullam voluptate assumenda esse iusto accusamus laborum! Sint quod commodi assumenda voluptatibus, ex nulla velit ducimus accusantium tempore ab a architecto quasi provident nisi tempora doloremque culpa ut?</p>
          </div>
          <div>test</div>
            <Membre
          age={this.state.league.membre1.age}
          nom={this.state.league.membre1.nom} />
            <Membre
          age={this.state.league.membre2.age}
          nom={this.state.league.membre2.nom} />
            <Membre
          age={this.state.league.membre3.age}
          nom={this.state.league.membre3.nom} />
            <Membre
          age={this.state.league.membre4.age}
          nom={this.state.league.membre4.nom} />
            <Membre
          age="2"
          nom="Ace"> 
          Je suis le batdog
            </Membre>
            <button onClick={this.handleClick}>+1</button>

        </Fragment>
      //React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App'))
    )
  }
}
 
export default App;