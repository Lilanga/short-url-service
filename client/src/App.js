import { Provider } from 'react-redux';
import configureStore from './store';
import Header from './components/Header';
import ShortInput from './components/ShortInput';
import { makeStyles } from '@material-ui/core/styles';
import SuccessStatus from './components/SuccessStatus';
import ErrorStatus from './components/ErrorStatus';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    textAlign: 'center',
  },
}));

const store = configureStore();

function App() {
  const { root } = useStyles();
  return (
    <Provider store={store}>
      <div className={root}>
        <Header />
        <ShortInput />
        <ErrorStatus />
        <SuccessStatus />
      </div>
    </Provider>
  );
}

export default App;
