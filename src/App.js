import { Layout } from 'antd';
import { HashRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/home';
import NewMovies from './pages/new-movies';
import Popular from './pages/popular';
import Search from './pages/search';
import Movie from './pages/movie';
import Error404 from './pages/error404';

//Components
import MenuTop from './components/MenuTop';

const App = () => {

  const { Header, Content} = Layout;

  return (
    <Layout>
      <HashRouter basename="/">
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/new-movies' exact={true} component={NewMovies} />
            <Route path='/popular' exact={true} component={Popular} />
            <Route path='/search' exact={true} component={Search} />
            <Route path='/movie:id' exact={true} component={Movie} />
            <Route path='*' exact={true} component={Error404} />
          </Switch>
        </Content>
      </HashRouter>
    </Layout>
  );
};

export default App;
